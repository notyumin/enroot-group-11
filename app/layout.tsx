import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const navLinks = [
  { url: "/", name: "Home" },
  // { url: "./schedule", name: "Schedule" },
  // { url: "./bracket", name: "Bracket" },
  // { url: "./rules", name: "Rules" },
  // { url: "./admin", name: "Admin" },
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
        <div className="flex w-full justify-center bg-white text-background p-1">
          {navLinks.map((nav) => {
            return <a className="m-2" key={nav.name} href={nav.url}>{nav.name}</a>
          })}
        </div>
        <div className="m-2 grow">{children}</div>
      </body>
    </html>
  );
}
