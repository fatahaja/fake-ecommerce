import type { Metadata } from "next";
import "./style/globals.css";
import { AppProvider } from "./context/app-context";

export const metadata: Metadata = {
  title: "FAKE Ecommerce",
  description: "It is not real e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
