import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar/Nav";
import Provider from "@/components/Provider/Provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Portfolio",
  description: "Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Nav/>
        {children}
        </Provider>
        </body>
    </html>
  );
}
