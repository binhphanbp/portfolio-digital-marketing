import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ScrollUp from "../components/ScrollUp";

export const metadata = {
  title: "Responsive portfolio website Anid - Bedimcode",
  description: "Responsive portfolio website created by Bedimcode and converted to Next.js by Antigravity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="/css/remixicon.min.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollUp />
        <CustomCursor />
      </body>
    </html>
  );
}
