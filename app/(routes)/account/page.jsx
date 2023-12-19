'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Account() {
  const [user, setUser] = useState({});
  const [reservations, setReservations] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { refresh } = useRouter();

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    refresh();
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseUser = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/user`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      const responseReservations = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/reservations`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        }
      );

      const user = await responseUser.json();
      setUser(user);

      const reservations = await responseReservations.json();
      setReservations(reservations);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Profiel aan het laden</div>;
  }

  return (
    <section className="flex flex-col items-center">
      <h1>Account</h1>
      <ul>
        <li>Naam: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Rol: {user.role}</li>
      </ul>
      <h2 className="mt-8">Reserveringen</h2>
      <ul className="flex flex-col gap-4">
        {reservations ? (
          reservations.map((reservation) => (
            <li key={reservation.id}>
              <div>Reservering ID: {reservation.id}</div>
              <div>
                Van {reservation.checkInDate.split('T')[0]} tot{' '}
                {reservation.checkOutDate.split('T')[0]}
              </div>
              <div>Plek nummer: {reservation.spotId}</div>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
      <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-blauw text-wit rounded-md">
        Log uit
      </button>
    </section>
  );
}
