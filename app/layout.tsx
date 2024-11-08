import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { bungee } from "./ui/fonts";
// import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
  // { url: "./fixtures/", name: "Fixtures" },
  // { url: "./rules", name: "Rules" },
  // { url: "./admin", name: "Admin" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const currentPath = usePathname()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen flex flex-col`}
      >
        <div className="flex w-full justify-center sticky top-5">
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

// const NavBar = (navLinks: NavLink[]) => {
//   return (
//     <div className="flex w-full justify-center bg-white text-background p-1">
//       {navLinks.map((nav) => {
//         return <Link className="m-2" key={nav.name} href={nav.url}>{nav.name}</Link>
//       })}
//     </div>
//   )
// }
