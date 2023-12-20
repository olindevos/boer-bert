import FAQ from '@/app/_components/FAQ';
import Boekbar from '@/app/_components/boekbar';
import Divacre from '@/app/_components/divacre';
import Filmpje from '@/app/_components/filmpje';
import Footerhome from '@/app/_components/Footerhome';
import Kaart from '@/app/_components/kaart';
import RecensiesSection from '@/app/_components/recensies/RecensiesSection';
import Image from 'next/image';
import { FaQq } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <Image
        src="/boerencamping.png"
        alt="CampingPlaatje"
        height={1970}
        width={810}
        className="w-screen"
      />
      <Boekbar />
      <Divacre />
      <Filmpje />
      <Kaart />
      <RecensiesSection />
      <FAQ />
      <Footerhome />
    </div>
  );
};


export default Home;
