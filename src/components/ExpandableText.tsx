import { useState } from "react";

interface ExpandableTextProps {
  text: string | undefined;
  maxLines?: number;
}

const ExpandableText = ({ text }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative w-full">
      <p
        className={`font-base transition-all duration-300 ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {text}
      </p>
      <button
        className="mt-2 text-white underline cursor-pointer font-semibold"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "접기" : "더보기"}
      </button>
    </div>
  );
};

export default ExpandableText;
