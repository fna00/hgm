import HomePage from "@/components/PageComponents/CorporatePage/HomePage";

// Statik parametreleri önceden belirleyin
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }, { lang: "de" }];
}

function Home() {
  return <HomePage />;
}

export default Home;
