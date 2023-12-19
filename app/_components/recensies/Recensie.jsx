import Image from 'next/image';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

export default function Recensie({ name, stars, body }) {
  const fullStars = Math.floor(stars);
  const halfStars = stars % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="testimonial flex flex-col justify-center items-center">
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <IoIosStar key={i} />
        ))}
        {[...Array(halfStars)].map((_, i) => (
          <IoIosStarHalf key={i + fullStars} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <IoIosStarOutline key={i + fullStars + halfStars} />
        ))}
      </div>
      <Image src="/spongebob.png" alt="" width={500} height={500} />
      <div className="name">{name}</div>
      <div className="border"></div>
      <p>{body}</p>
    </div>
  );
}
