import { Link, useLoaderData } from "remix";

import { Repository } from "../../types/repository";

export const loader = async () => {
  const response = await fetch("https://api.github.com/users/avrcoelho/repos");
  const repositories: Repository[] = await response.json();
  return repositories;
};

export default function Repositories() {
  const repositories = useLoaderData<Repository[]>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Repositories</h1>
      <ul>
        {repositories.map((repository) => (
          <li key={repository.name}>
            <Link to={`/repositories/${repository.name}`}>
              {repository.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
