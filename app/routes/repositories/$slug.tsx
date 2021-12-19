import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import { Repository } from "../../types/repository";

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(
    `https://api.github.com/repos/avrcoelho/${params.slug}`
  );
  const repository: Repository[] = await response.json();
  return repository;
};

export default function Repository() {
  const repository = useLoaderData<Repository>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Repository - {repository.name}</h1>
    </div>
  );
}
