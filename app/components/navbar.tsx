export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <div className="text-xl font-bold">Spotify for Creators</div>

        <ul className="flex gap-10 text-lg font-medium items-center">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Video</a>
          </li>
          <li>
            <a href="#">Podcast</a>
          </li>
          <li>
            <a href="#">Switch</a>
          </li>
        </ul>

        <div className="flex gap-4 text-lg items-center">
          <button>Log in</button>
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}
