import "@/assets/styles/main.scss";
import type { Metadata } from "next";
import { LayoutInterface } from "@/interface";
import { Providers } from "@/redux/Provider";
import { Footer, Header } from "@/components";
import { Inter } from "next/font/google";
import { CategoryProvider } from "@/context";

export const metadata: Metadata = {
  title: "Nike. Just Do It",
  description:
    "Nike delivers innovative products, experiences and services to inspire athletes.",
};

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutInterface) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://www.nike.com/favicon.ico?v=1"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <div id="root">
          <Providers>
            <CategoryProvider>
              <Header />
              {children}
              <Footer />
            </CategoryProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
