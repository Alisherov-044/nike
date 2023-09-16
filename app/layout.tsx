import "@/assets/styles/main.scss";
import type { Metadata } from "next";
import { LayoutInterface } from "@/interface";
import { Providers } from "@/redux/Provider";

export const metadata: Metadata = {
  title: "Nike. Just Do It",
  description:
    "Nike delivers innovative products, experiences and services to inspire athletes.",
};

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
