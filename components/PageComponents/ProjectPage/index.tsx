import React from "react";
import Header from "../../Header";
import DescriptionBox from "@/components/DescriptionBox";
import TechnologiesTable from "@/components/TechnologiesTable";

interface ProjectPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

function ProjectPage({ data }: ProjectPageProps) {
  console.log("data", data);
  return (
    <>
      <Header />
      <div className="relative container mx-auto px-4 mt-20">
        <DescriptionBox
          className={""}
          title={data?.title}
          content={data?.content}
        />
        <TechnologiesTable technologies={data?.technologies} />
      </div>
    </>
  );
}

export default ProjectPage;
