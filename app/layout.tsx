import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Container, Heading, Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickBoard",
  description: "Share your clipboard across your devices quickly and easily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Theme appearance="light" accentColor="gray" suppressHydrationWarning>
          <Container className="flex items-center flex-col" pt={"9"}>
            <Heading align="center">QuickBoard</Heading>
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
