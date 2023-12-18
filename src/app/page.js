import Navbar from "@/app/StaticComponents/Navbar";
import React from "react";
import Image from "next/image";

const Home = () => {
    const menuItems = [
        { name: 'Reserveren', href: '#reserveren' },
        { name: 'Wie', href: '#wie' },
        { name: 'Activiteiten', href: '#activiteiten' },
        { name: 'Plattegrond', href: '#plattegrond' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div>
            <Navbar menuItems={menuItems} />
            <Image
                src="/boerencamping.png"
                alt="CampingPlaatje"
                height={1970}
                width={810}
                className="w-screen"
            />
        </div>
    );
};

export default Home;