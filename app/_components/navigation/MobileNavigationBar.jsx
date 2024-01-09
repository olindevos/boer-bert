import Link from "next/link";
import { FaUser } from "react-icons/fa";

import { IoMdClose } from "react-icons/io";

export default function MobileNavigationBar({ user, handleNav }) {
  return (
    <div className="block lg:hidden sidebar">
      <div className="flex justify-end p-4">
        <button onClick={handleNav}>
          <IoMdClose size={32} />
        </button>
      </div>
      <ul className="flex flex-col">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/reserveren">Reserveren</Link>
        </li>
        <li>
          <Link href="/over-ons">Over ons</Link>
        </li>
        <li>
          <Link href="/activiteiten">Activiteiten</Link>
        </li>
        <li>
          <Link href="/plattegrond">Plattegrond</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link href="/account" className="flex items-center gap-1">
                <FaUser />
                {user.name}
              </Link>
            </li>
            {user.role === "admin" ? (
              <li className="p-2">
                <Link
                  href="/dashboard"
                  className="bg-wit rounded-md px-2 py-1 text-black"
                >
                  Admin Dashboard
                </Link>
              </li>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Log in</Link>
            </li>

            <li>
              <Link href="/register">Registreer</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
