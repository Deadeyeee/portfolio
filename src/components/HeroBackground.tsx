"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

const LINE_COUNT = 6;
const POINTS_PER_LINE = 80;

export const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number>();
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const lineColor = useMemo(() => (isDarkMode ? 0xffffff : 0x0a0a0a), [isDarkMode]);
  const lineOpacity = useMemo(() => (isDarkMode ? 0.35 : 0.65), [isDarkMode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const createWaveGroup = (rotation: number) => {
      const group = new THREE.Group();
      group.rotation.z = rotation;
      scene.add(group);

      const lines: Array<{
        attribute: THREE.BufferAttribute;
        speed: number;
        amplitude: number;
        frequency: number;
        phase: number;
      }> = [];

      for (let i = 0; i < LINE_COUNT; i++) {
        const positions = new Float32Array(POINTS_PER_LINE * 3);
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const material = new THREE.LineBasicMaterial({
          color: lineColor,
          transparent: true,
          opacity: lineOpacity - i * 0.08,
        });

        const line = new THREE.Line(geometry, material);
        line.position.y = (i - LINE_COUNT / 2) * 18;
        group.add(line);

        lines.push({
          attribute: geometry.getAttribute("position") as THREE.BufferAttribute,
          speed: 0.3 + i * 0.08,
          amplitude: 22 + i * 4,
          frequency: 2.6 + i * 0.2,
          phase: i * Math.PI * 0.2,
        });
      }

      return { lines, group };
    };

    const topLeft = createWaveGroup(Math.PI / 10);
    const bottomRight = createWaveGroup(Math.PI / 10);

    const updateLinePositions = (lines: typeof topLeft.lines, span: number, time: number) => {
      lines.forEach(({ attribute, speed, amplitude, frequency, phase }) => {
        for (let i = 0; i < POINTS_PER_LINE; i++) {
          const t = i / (POINTS_PER_LINE - 1);
          const x = (t - 0.5) * span;
          const y = Math.sin(t * frequency * Math.PI + time * speed + phase) * amplitude;
          attribute.setXYZ(i, x, y, 0);
        }
        attribute.needsUpdate = true;
      });
    };

    const handleResize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      renderer.setSize(width, height);

      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();

      const span = Math.max(width, height) * 0.8;
      updateLinePositions(topLeft.lines, span, 0);
      updateLinePositions(bottomRight.lines, span, 0);

      topLeft.group.position.set(-width * 0.2, height * 0.5, 0);
      bottomRight.group.position.set(-width * .2, -height * 0.5, 0);
      topLeft.group.scale.setScalar(Math.max(width, height) / 900 + 0.2);
      bottomRight.group.scale.setScalar(Math.max(width, height) / 900 + 0.9);
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const startTime = performance.now();
    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      const span = Math.max(container.clientWidth, container.clientHeight) * 0.8;
      updateLinePositions(topLeft.lines, span, elapsed);
      updateLinePositions(bottomRight.lines, span, elapsed + Math.PI);
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object instanceof THREE.Line) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
      renderer.forceContextLoss?.();
      container.removeChild(renderer.domElement);
    };
  }, [lineColor, lineOpacity, isDarkMode]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
};

