"use client";
import { Card, Tabs } from "@radix-ui/themes";
import { SaveClipboard } from "./save-clipboard";
import { GetClipboard } from "./get-clipboard";

interface Props {
  value: string | null;
}

export const ClipboardTabs = ({ value }: Props) => {
  const defaultTab = value ? "Get" : "Save";
  return (
    <Card className="w-full flex-1 max-w-md m-auto mt-4 border">
      <Tabs.Root defaultValue={defaultTab}>
        <Tabs.List>
          <Tabs.Trigger value="Save">Save</Tabs.Trigger>
          <Tabs.Trigger value="Get">Get</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="Save">
          <SaveClipboard />
        </Tabs.Content>
        <Tabs.Content value="Get">
          <GetClipboard value={value} />
        </Tabs.Content>
      </Tabs.Root>
    </Card>
  );
};
