"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useFetchPageContent } from "@/hooks/useFectchPageContent";
import ProjectPage from "@/components/PageComponents/ProjectPage";

function About() {
  const params = useParams();
  const lang = params.lang as string;

  const { data, isLoading, isError } = useFetchPageContent(lang);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Could not load content</p>;

  return <ProjectPage data={data?.project} />;
}

export default About;
