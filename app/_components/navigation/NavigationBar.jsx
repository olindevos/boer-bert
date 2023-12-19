'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import MobileNavigationBar from './MobileNavigationBar';
import { IoMenu } from 'react-icons/io5';
import Image from 'next/image';

export default function NavigationBar({ user }) {
  const [isActive, setIsActive] = useState(false);

  const handleNav = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-groen flex justify-between items-center z-[99999]">
      <div className="flex h-full">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={60} width={60} />
        </Link>
        <div className="hidden h-full ml-auto lg:flex gap-4 items-center">
          <ul className="flex h-full">
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
                {user.role === 'admin' ? (
                  <li className="p-2">
                    <Link href="/dashboard" className=" bg-wit rounded-md text-black px-2 py-1">
                      Admin Dashboard
                    </Link>
                  </li>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
      <div className="flex">
        <Link href="/account">
          <div className="flex justify-center">
            <Image src="/person.png" alt="profile" height={48} width={64} />
          </div>
        </Link>
        <Link href="#">
          <div className="flex justify-center">
            <Image src="/language.svg" alt="language" height={48} width={64} />
          </div>
        </Link>
        <button onClick={handleNav} className="p-4 block lg:hidden">
          <IoMenu size={32} className="text-wit" />
        </button>
      </div>

      {isActive ? <MobileNavigationBar user={user} handleNav={handleNav} /> : <></>}
    </nav>
  );
}

// <nav>
// <ul class="sidebar">
//   <li onclick="hideSidebar()">
//     <a href="#">btn</a>
//   </li>
//   <li><a href="*.html">Reserveren</a></li>
//   <li><a href="*.html">Wie</a></li>
//   <li><a href="*.html">Activiteiten</a></li>
//   <li><a href="*.html">Plattegrond</a></li>
//   <li><a href="*.html">Contact</a></li>
// </ul>
// <ul>
//   <li>
//     <a href="index.html"><img src="images/logo.png" class="logo" /></a>
//   </li>
//   <li class="hideOnMobile"><a href="*.html">Reserveren</a></li>
//   <li class="hideOnMobile"><a href="*.html">Wie</a></li>
//   <li class="hideOnMobile"><a href="*.html">Activiteiten</a></li>
//   <li class="hideOnMobile"><a href="*.html">Plattegrond</a></li>
//   <li class="hideOnMobile"><a href="*.html">Contact</a></li>
//   <li class="menu-button" onclick="showSidebar()">
//     <a href="#">btn</a>
//   </li>
// </ul>
// </nav>
