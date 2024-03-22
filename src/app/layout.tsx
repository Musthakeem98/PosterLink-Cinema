import { Poppins } from "next/font/google";
import "@/app/globals.css";
import "@/app/typography.css";
import { FooterBase } from "@/components/FooterBase/FooterBase";
import NavBase from "@/components/NavBar/NavBase";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <html>
      <body className={poppins.className}>
        <NavBase />
        {children}
        <FooterBase />
      </body>
    </html>
  );
}
