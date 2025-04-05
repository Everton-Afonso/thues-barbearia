"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Dashboard from "../icons/dashboard";

const MenuItems = () => {
  const pathname = usePathname();

  const items = [
    {
      label: "Dashboard",
      href: "/",
      icon: <Dashboard />,
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: <Dashboard />,
    },
  ];

  return (
    <>
      {items.map((item, i) => {
        const isActive = pathname === item.href;

        return (
          <li key={i}>
            <Link href={item.href} className={`${isActive && "active"}`}>
              {item.icon}
              {item.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default MenuItems;
