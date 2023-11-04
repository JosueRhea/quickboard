import "./radix-theme.css";
import { headers } from "next/headers";
import { ClipboardTabs } from "./components/tabs";
import { getText } from "@/services/clipboard";

export default async function Home() {
  const headersList = headers();
  const url = headersList.get("x-url");
  let value = null;
  try {
    const searchParams = new URL(url as string).searchParams;
    const code = searchParams.get("code");
    const res = await getText(code as string);
    if (res?.text) {
      value = res.text;
    }
  } catch (error) {}

  return <ClipboardTabs value={value} />;
}
