import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adarsh Naidu - Chief Data Architect & Technology Leader",
  description: "Executive portfolio of Adarsh Naidu - Chief Data Architect, AWS Principal Solution Architect, and Technology Leader with 18+ years of experience in data strategy, AI/ML, and cloud transformation.",
  keywords: ["Data Architect", "AWS", "AI/ML", "Cloud Architecture", "Enterprise Architecture", "Generative AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
