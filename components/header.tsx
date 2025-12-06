'use client';
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const accessLink = ['/performance', '/reliability', '/scale','/'];

export default function header() {
  const pathname = usePathname();
  if (!accessLink.includes(pathname)) {
    return null;
  }
  const Linkdata = [
    {name: 'Performance', path: '/performance'},
    {name: 'Reliability', path: '/reliability'},
    {name: 'Scale', path: '/scale'},
  ]
  return (
    <div className="absolute w-full z-10">
      <div className=" text-white flex flex-row justify-between container mx-auto p-6">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
          {Linkdata.map((link) => (
            <Link key={link.path} href={link.path}
            className={pathname === link.path ? ' text-purple-500' : ''}>{link.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}