"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="child1">Child1</Link>
          {path === "/child1" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
