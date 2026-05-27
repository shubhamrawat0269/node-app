import { useMemo, useRef, useEffect, useState } from "react";
import BaseNode from "../components/BaseNode";

const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ data }) => {
  const [text, setText] = useState(data?.text || "");

  const textareaRef = useRef(null);
  const variables = useMemo(() => {
    const matches = [...text.matchAll(variableRegex)];

    return matches.map((match) => ({
      id: match[1],
    }));
  }, [text]);

  /*
    TODO (Shubham) : Auto Resize feature
  */

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";

      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  /*
   TODO (Shubham) : Dynamic node width
  */

  const dynamicWidth = Math.min(Math.max(text.length * 7, 260), 500);

  return (
    <BaseNode
      title="Text Node"
      inputs={variables}
      outputs={[{ id: "output" }]}
      width={dynamicWidth}
    >
      <div className="node-input">
        <label>Text Content</label>

        <textarea
          ref={textareaRef}
          value={text}
          placeholder="Type something like {{input}}"
          onChange={(e) => setText(e.target.value)}
          style={{
            resize: "none",
            overflow: "hidden",
            minHeight: "120px",
          }}
        />
      </div>
    </BaseNode>
  );
};
