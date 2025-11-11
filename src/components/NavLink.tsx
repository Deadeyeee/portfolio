"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";
import type { Route } from "next";

type NextLinkProps = ComponentProps<typeof Link>;

interface NavLinkProps extends Omit<NextLinkProps, "href"> {
  href: Route;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export const NavLink = ({ href, className, activeClassName, children, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link href={href} className={cn(className, isActive && activeClassName)} {...props}>
      {children}
    </Link>
  );
};
