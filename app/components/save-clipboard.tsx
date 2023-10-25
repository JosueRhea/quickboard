import { saveText } from "@/services/clipboard";
import { Button, Flex, TextArea } from "@radix-ui/themes";
import { FormEvent, useRef, useState } from "react";
import { Copy } from "./copy";

export const SaveClipboard = () => {
  const [result, setResult] = useState("");
  const ref = useRef<HTMLFormElement>(null);

  const saveClipboard = async (event: FormEvent) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(ref.current as HTMLFormElement)
    ) as { text: string };
    if (formData.text.length > 0) {
      const res = await saveText(formData.text);
      if (res?.id) {
        setResult(res.id);
      }
    }
  };

  return (
    <Flex direction="column" gap="2" mt={"5"} className="max-w-md m-auto">
      <form
        className="w-full flex flex-col gap-y-2"
        ref={ref}
        onSubmit={saveClipboard}
      >
        <TextArea name="text" placeholder="Paste your text here" />
        <Button highContrast>Get my code</Button>
      </form>
      {result.length > 0 && <Copy text={result} />}
    </Flex>
  );
};
