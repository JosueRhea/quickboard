"use client";
import { Tabs } from "@radix-ui/themes";
import { SaveClipboard } from "./components/save-clipboard";
import { GetClipboard } from "./components/get-clipboard";

export default function Home() {
  return (
    <Tabs.Root
      defaultValue="Save"
      className="w-full flex-1 max-w-md m-auto mt-4"
    >
      <Tabs.List>
        <Tabs.Trigger value="Save">Save</Tabs.Trigger>
        <Tabs.Trigger value="Get">Get</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="Save">
        <SaveClipboard />
      </Tabs.Content>
      <Tabs.Content value="Get">
        <GetClipboard />
      </Tabs.Content>
    </Tabs.Root>
  );
}
