import { fetchMessage } from "@/lib/api";

export default async function Home() {
  const data = await fetchMessage();

  return (
    <div>
      <h1>Flashcard</h1>
      <p>response: {data.message}</p>
    </div>
  );
}
