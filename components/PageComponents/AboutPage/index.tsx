import React from "react";
import Header from "../../Header";

interface AboutPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

function AboutPage({ data }: AboutPageProps) {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8 text-white mt-20">
        <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
        <p className="text-lg">{data?.content}</p>
      </div>
    </div>
  );
}

export default AboutPage;
