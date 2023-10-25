import { getText, saveText } from "@/services/clipboard";
import { Button, Flex, TextArea, TextFieldInput } from "@radix-ui/themes";
import { FormEvent, useRef, useState } from "react";
import { Copy } from "./copy";

export const GetClipboard = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState("");

  const getClipboard = async (event: FormEvent) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(ref.current as HTMLFormElement)
    ) as { id: string };
    if (formData.id.length > 0) {
      const res = await getText(formData.id);
      if (res?.text) {
        setResult(res.text);
      }
    }
  };

  return (
    <Flex direction="column" gap="2" mt={"5"} className="max-w-md m-auto">
      <form
        className="w-full flex flex-col gap-y-2"
        ref={ref}
        onSubmit={getClipboard}
      >
        <TextFieldInput name={"id"} placeholder="as3g" />
        <Button highContrast>Get my text</Button>
      </form>
      {result.length > 0 && <Copy text={result} get />}
    </Flex>
  );
};
