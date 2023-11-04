import {
  CheckCircledIcon,
  ClipboardCopyIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import { Flex, IconButton, Text, TextArea, Tooltip } from "@radix-ui/themes";
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

  const copyUrl = async () => {
    const url = new URL(window.location.origin);
    url.searchParams.append("code", text);
    await navigator.clipboard.writeText(url.toString());
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
          <TextArea
            name="text"
            placeholder="Paste your text here"
            disabled
            value={text}
            rows={10}
          />
          <Tooltip content="Copy to clipboard">
            <IconButton
              className="absolute bottom-2 right-2"
              onClick={!copied ? copy : undefined}
              variant="solid"
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
        <Flex align="center" gap="2">
          <Text>{text}</Text>
          <Flex align="center" gap="2">
            <Tooltip content="Copy code to clipboard">
              <IconButton variant="soft" onClick={!copied ? copy : undefined}>
                {copied ? (
                  <CheckCircledIcon width="18" height="18" />
                ) : (
                  <ClipboardCopyIcon width="18" height="18" />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip content="Copy url to clipboard">
              <IconButton
                variant="soft"
                onClick={!copied ? copyUrl : undefined}
              >
                {copied ? (
                  <CheckCircledIcon width="18" height="18" />
                ) : (
                  <Link1Icon width="18" height="18" />
                )}
              </IconButton>
            </Tooltip>
          </Flex>
        </Flex>
      )}
    </div>
  );
};
