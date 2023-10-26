import { CheckCircledIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import { IconButton, Text, Tooltip } from "@radix-ui/themes";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  get?: boolean;
}

export const Copy = ({ text, get = false }: Props) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <div className="flex gap-x-2 w-full justify-center">
      {get ? (
        <div className="relative w-full">
          <Text>{text}</Text>
          <Tooltip content="Copy to clipboard">
            <IconButton
              className="absolute top-2 right-2"
              highContrast
              onClick={!copied ? copy : undefined}
            >
              {copied ? (
                <CheckCircledIcon width="18" height="18" />
              ) : (
                <ClipboardCopyIcon width="18" height="18" />
              )}
            </IconButton>
          </Tooltip>
        </div>
      ) : (
        <>
          <Text>{text}</Text>
          <Tooltip content="Copy to clipboard">
            <IconButton highContrast onClick={!copied ? copy : undefined}>
              {copied ? (
                <CheckCircledIcon width="18" height="18" />
              ) : (
                <ClipboardCopyIcon width="18" height="18" />
              )}
            </IconButton>
          </Tooltip>
        </>
      )}
    </div>
  );
};
