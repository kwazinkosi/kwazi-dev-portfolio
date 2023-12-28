export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-center space-x-4 mb-4">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/about" className="text-white">About</a></li>
        <li><a href="/projects" className="text-white">Projects</a></li>
        <li><a href="/contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  );
}
