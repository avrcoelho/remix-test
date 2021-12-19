import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix Test - André Coelho Repositories</h1>
      <ul>
        <li>
          <Link to="/repositories">Repositories</Link>
        </li>
      </ul>
    </div>
  );
}
