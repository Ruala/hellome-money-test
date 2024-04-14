import replace from "react-string-replace";

const reg = /\{([a-z|A-Z|0-9|.]+)\}/g;

interface KeyValue {
  [key: string]: any;
}

export const formatMessageWithParams = (
  message: string,
  replacements: KeyValue,
): any => {
  const output = replace(message, reg, (prop: any) => replacements[prop]);

  return output;
};
