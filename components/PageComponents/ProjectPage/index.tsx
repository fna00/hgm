import React from "react";
import Header from "../../Header";
import DescriptionBox from "@/components/DescriptionBox";
import TechnologiesTable from "@/components/TechnologiesTable";

interface ProjectPageProps {
  data: any;
}

function ProjectPage({ data }: ProjectPageProps) {
  console.log("data", data);
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <DescriptionBox
          className={"mt-10"}
          title={data?.title}
          content={data?.content}
        />
        <TechnologiesTable technologies={data?.technologies} />
      </div>
    </>
  );
}

export default ProjectPage;
