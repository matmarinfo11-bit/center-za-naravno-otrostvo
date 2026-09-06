import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Center za naravno otroštvo",
  description: "Center za naravno otroštvo, družino ter celostno izobraževanje in svetovanje.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl">
      <body>{children}</body>
    </html>
  );
}
