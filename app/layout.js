import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ScrollUp from "../components/ScrollUp";

export const metadata = {
  title: "Responsive portfolio website Anid - Bedimcode",
  description: "Responsive portfolio website created by Bedimcode and converted to Next.js by Antigravity",
};

import { ThemeProvider } from "./ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="/css/remixicon.min.css" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          {children}
          <Footer />
          <ScrollUp />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
