import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import { Container, Heading, Link, Quote, Text, Theme } from "@radix-ui/themes";
import { GeistMono } from "geist/font";
import { Toaster } from "sonner";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";

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
    <html
      lang="en"
      className={`${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <div className="bg-[url(/grid--light.svg)] overflow-hidden fixed top-0 left-0 right-0 bottom-0 h-full w-full" />
        <Theme
          accentColor="indigo"
          radius="small"
          scaling="95%"
          appearance="dark"
        >
          <Container className="flex items-center flex-col" pt={"9"}>
            <div className="w-full h-fit relative m-auto flex flex-col">
              <div
                className="w-48 h-48 absolute right-0 left-0 bottom-0 top-36 m-auto block bg-[var(--accent-10)] -z-10"
                style={{ filter: "blur(120px)" }}
              />
              <Heading align="center" className="mb-4 mx-auto">
                QuickBoard
              </Heading>
              <Text align="center" className="mx-auto">
                Sync your clipboard across your devices.
              </Text>
            </div>
            {children}
          </Container>
          <div className="w-full text-center flex justify-center items-center gap-x-2">
            <img src="/me.jpg" className="w-7 h-7 rounded-full" alt="" />
            <p>
              Made by{" "}
              <Link href="https://josuerhea.me" target="_blank">
                <strong>@JosueRhea</strong>
              </Link>
            </p>
            <HeartFilledIcon className="w-4 h-4" />
          </div>
          <Toaster
            theme="dark"
            toastOptions={{
              style: { background: "var(--color-panel)" },
            }}
          />
        </Theme>
      </body>
    </html>
  );
}
