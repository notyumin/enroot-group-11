import localFont from "next/font/local";
import { Bungee_Inline, Bungee, Lobster } from "next/font/google"

export const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const bungeeInline = Bungee_Inline({ weight: "400", subsets: ["latin"] })
export const bungee = Bungee({ weight: "400", subsets: ["latin"] })
export const lobster = Lobster({ weight: "400", subsets: ["latin"] })
