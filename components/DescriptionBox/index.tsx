import clsx from "clsx";
import React from "react";

interface DescriptionBoxProps {
  className?: string;
  title: string;
  content: string;
}

export default function DescriptionBox({
  className,
  title,
  content,
}: DescriptionBoxProps) {
  return (
    <div className={clsx("py-8 text-wite", className)}>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg">{content}</p>
    </div>
  );
}
