export default function Header() {
  return (
    <header className="flex justify-between py-4 px-10">
      <h1>Logo</h1>
      <nav>
        <ul className="flex gap-7">
          <li>Courses</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
