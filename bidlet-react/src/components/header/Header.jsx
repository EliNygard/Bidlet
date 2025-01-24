import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto py-4 px-5 sticky">
      <nav className="flex justify-between items-center">
        <div>
          <Link
            href="./"
            title="Home"
            className="text-xl font-heading tracking-widest text-brand-dark hover:text-accent-dark sm:text-3xl md:text-4xl"
          >
            Bidlet
          </Link>
        </div>
        <div className="flex gap-7 sm:gap-14 md:gap-16">
          <Link
            aria-label="Link to Search page"
            title="Search for your next Bidlet"
            href="./search"
          >
            <FaSearch
              aria-hidden="true"
              className="text-xl text-brand-dark hover:text-accent-dark sm:text-2xl"
            />
          </Link>
          <button
            aria-label="Link to log in or register form"
            title="Log in or register an account"
          >
            <FaUser className="text-xl text-brand-dark hover:text-accent-dark sm:text-2xl" />
          </button>
        </div>
      </nav>
    </header>
  );
}
