'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ menuItems }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`colorMain mt-32 flex items-center justify-between p-4 bg-main`}>
        <div className="flex items-center">
          <div className="mr-1">
            <Image src="/logo.png" alt="logo" height={60} width={60} />
          </div>
          {!isMobile && (
            // Render regular navigation for larger screens
            <ul className="md:flex space-x-5 text-white">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center">
          <button className="m-0.5">
            <div className="navButtons flex justify-center">
              <Image src="/person.png" alt="profile" height={48} width={64} />
            </div>
          </button>
          <button className="m-0.5">
            <div className="navButtons flex justify-center">
              <Image src="/language.svg" alt="language" height={48} width={48} />
            </div>
          </button>
        </div>
        {isMobile && (
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-12 w-12 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        )}
      </nav>
      {isMenuOpen && isMobile && (
        <div className="fixed w-screen h-screen">
          <ul className="flex flex-col justify-stretch h-full colorMain">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white w-screen h-auto flex justify-center">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
