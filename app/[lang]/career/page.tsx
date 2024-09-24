"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useFetchPageContent } from "@/hooks/useFectchPageContent";
import CareerPage from "@/components/PageComponents/CareerPage";

function About() {
  const params = useParams();
  const lang = params.lang as string;

  const { data, isLoading, isError } = useFetchPageContent(lang);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Could not load content</p>;

  return <CareerPage data={data?.career} />;
}

export default About;
