import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import ThemeRegistry from './ThemeRegistry';

export const metadata: Metadata = {
  title: "Claire Huang",
  description: "Claire's portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-primary">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Coming+Soon&family=Nanum+Pen+Script&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeRegistry>
          <Navigation/>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}