import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mks Challenge",
  description: "Challenge for job vacancy in MKS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
