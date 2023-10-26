import { getText } from "@/services/clipboard";
import { Flex, TextFieldInput } from "@radix-ui/themes";
import { FormEvent, useRef, useState } from "react";
import { Copy } from "./copy";
import { SubmitButton } from "./submit-button";

export const GetClipboard = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState("");
  const [pending, setPending] = useState(false);

  const getClipboard = async (event: FormEvent) => {
    event.preventDefault();
    setPending(true);
    const formData = Object.fromEntries(
      new FormData(ref.current as HTMLFormElement)
    ) as { id: string };
    if (formData.id.length > 0) {
      const res = await getText(formData.id);
      if (res?.text) {
        setResult(res.text);
      }
    }
    setPending(false);
  };

  return (
    <Flex direction="column" gap="2" className="max-w-md m-auto mt-4">
      <form
        className="w-full flex flex-col gap-y-2"
        ref={ref}
        onSubmit={getClipboard}
      >
        <TextFieldInput name={"id"} placeholder="as3g" />
        <SubmitButton pending={pending}>Get my text</SubmitButton>
      </form>
      {result.length > 0 && <Copy text={result} get />}
    </Flex>
  );
};
