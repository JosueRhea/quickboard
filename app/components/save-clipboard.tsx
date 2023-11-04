import { saveText } from "@/services/clipboard";
import { Flex, TextArea } from "@radix-ui/themes";
import { FormEvent, useRef, useState } from "react";
import { Copy } from "./copy";
import { SubmitButton } from "./submit-button";

export const SaveClipboard = () => {
  const [result, setResult] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);

  const saveClipboard = async (event: FormEvent) => {
    event.preventDefault();
    setPending(true);
    const formData = Object.fromEntries(
      new FormData(ref.current as HTMLFormElement)
    ) as { text: string };
    if (formData.text.length > 0) {
      const res = await saveText(formData.text);
      if (res?.id) {
        setResult(res.id);
      }
    }
    setPending(false);
  };

  return (
    <Flex
      direction="column"
      gap="2"
      className="max-w-md m-auto mt-4"
      justify="center"
    >
      <form
        className="w-full flex flex-col gap-y-2"
        ref={ref}
        onSubmit={saveClipboard}
      >
        <TextArea name="text" placeholder="Paste your text here" rows={10} />
        <SubmitButton pending={pending}>Get my code</SubmitButton>
      </form>
      {result.length > 0 && <Copy text={result} />}
    </Flex>
  );
};
