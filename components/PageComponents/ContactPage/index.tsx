import React from "react";
import Header from "../../Header";

interface CareerPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function CareerPage({ data }: CareerPageProps) {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8 text-black">
        <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
        <p className="text-lg">{data?.content}</p>
      </div>
    </div>
  );
}
