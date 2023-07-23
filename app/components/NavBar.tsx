import Link from 'next/link';
import LoginModal from './LoginModal';

export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <LoginModal
            button={
              <button className="bg-blue-400 text-white border p-2 px-4 rounded mr-3">
                Sign In
              </button>
            }
          />
          <LoginModal
            button={<button className="text-black border p-2 px-4 rounded">Sign Up</button>}
          />
        </div>
      </div>
    </nav>
  );
}
