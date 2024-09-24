"use client";

import React from "react";
import { useParams } from "next/navigation";
import AboutPage from "@/components/PageComponents/AboutPage";
import { useFetchPageContent } from "@/hooks/useFectchPageContent";

function About() {
  const params = useParams();
  const lang = params.lang as string;

  const { data, isLoading, isError } = useFetchPageContent(lang);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Could not load content</p>;

  return <AboutPage data={data?.about} />;
}

export default About;
