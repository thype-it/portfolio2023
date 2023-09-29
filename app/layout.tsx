// import './globals.css'
import type { Metadata } from "next";

import { MainMenu } from "./components/navigation";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Mike IT",
  description: "I build things for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "black" }}>
        <Providers>
          <MainMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
