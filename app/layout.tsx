import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./component/navigation";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

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
      <body>
        <Navigation/> 
        {children}
      </body>
    </html>
  );
}


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="bg-primary">
//       <body className={inter.className}><NavBar/> {children}</body>

//     </html>
//   );
// }
