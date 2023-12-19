'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useState } from 'react';

export default function Afronden() {
  const [afgerond, setAfgerond] = useState(true);

  // const searchParams = useSearchParams();
  // const { checkInDate } = searchParams.get('checkInDate');
  // const { checkOutDate } = searchParams.get('checkOutDate');
  // const { guests } = searchParams.get('guests');
  // const { spotType } = searchParams.get('spotType');
  // const { spotId } = searchParams.get('spotId');

  // const reserveringAfronden = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/create_reservation`,
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         credentials: 'include',
  //         body: JSON.stringify({
  //           checkInDate,
  //           checkOutDate,
  //           guests,
  //           spotType,
  //           spotId,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       const data = await response.json();
  //       throw new Error(data.message);
  //     }

  //     setAfgerond(true);
  //   } catch (error) {
  //     alert(error);
  //     console.error('Error making reservation:', error);
  //   }
  // };

  return (
    <section className="flex items-center flex-col">
      <h1>Reservering afgerond</h1>
      {afgerond ? (
        <div>
          Bekijk je reservering op je{' '}
          <Link href="/account" className="underline">
            account pagina
          </Link>
        </div>
      ) : (
        <button
          onClick={reserveringAfronden}
          className="mt-8 bg-groen text-wit px-4 py-2 rounded-md text-lg"
        >
          Reservering afronden
        </button>
      )}
    </section>
  );
}
