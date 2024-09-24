// hooks/useFetchContent.ts

import { useQuery } from "@tanstack/react-query";

export const QUERY_KEY = (language: string) => ["content", language];

export const useFetchPageContent = (language: string) => {
  return useQuery({
    queryKey: QUERY_KEY(language), // Sorgu anahtarını oluştur
    queryFn: async () => {
      const res = await fetch(`/api/content/${language}`);
      if (!res.ok) {
        throw new Error("Failed to fetch content"); // Hata durumunda bir hata fırlat
      }
      const content = await res.json();
      return content; // JSON formatında içeriği döndür
    },
    enabled: !!language, // language varsa sorguyu etkinleştir
  });
};
