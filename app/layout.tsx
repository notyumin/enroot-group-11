import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { bungee, geistMono, geistSans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Freshmore Faceoff!",
  description: "Presented by EnROOT Group 11",
};

type NavLink = {
  url: string,
  name: string
}

const navLinks: NavLink[] = [
  { url: "/", name: "Home" },
  { url: "./schedule", name: "Schedule" },
  { url: "./rules", name: "Rules" },
  // { url: "./fixtures/", name: "Fixtures" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen flex flex-col`}
      >
        <div className="flex w-full justify-center fixed top-5">
          <div className="bg-gray-50 text-slate-800 p-5 lg:text-xl md:text-base text-sm rounded-full shadow-lg">
            {navLinks.map((nav) => {
              return <Link className={bungee.className + " m-2 lg:mx-5 hover:text-background"} key={nav.name} href={nav.url}>{nav.name}</Link>
            })}
          </div>
        </div>
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}
