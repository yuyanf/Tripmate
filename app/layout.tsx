import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DestinationsProvider } from "../context/destinations";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  loginModal,
  signupModal,
}: {
  children: React.ReactNode;
  loginModal: React.ReactNode;
  signupModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-stone-50 pt-20")}>
        <DestinationsProvider>
          <Header />
          {children}
          {loginModal}
          {signupModal}
        </DestinationsProvider>
      </body>
    </html>
  );
}
