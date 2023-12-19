'use client';

import RecensiesSection from '@/app/_components/recensies/RecensiesSection';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Reserveren() {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    guests: '',
    spotType: '',
  });

  const handleInput = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/spots`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        ...formData,
      }),
    });

    const results = await response.json();

    setResults(results);
  };

  const handlePickSpot = async (spotId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/create_reservation`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            ...formData,
            spotId,
          }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      push('/reserveren/afronden');
    } catch (error) {
      alert(error);
      console.error('Error making reservation:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <section className="flex justify-start items-center flex-col pb-16">
        <h1>Reserveren</h1>
        <form className="mt-8">
          <div className="flex gap-8 p-6 pt-4 rounded-md bg-blauw text-wit items-center">
            <label>
              Check-in Datum:
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onInput={handleInput}
                required
                className="block text-blauw"
              />
            </label>
            <label>
              Check-out Datum:
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onInput={handleInput}
                required
                className="block text-blauw"
              />
            </label>
            <label>
              Aantal personen:
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onInput={handleInput}
                required
                className="block text-blauw w-32"
              />
            </label>
            <label>
              Type plek:
              <select
                name="spotType"
                value={formData.spotType}
                onInput={handleInput}
                required
                className="block text-blauw "
              >
                <option value="">--Selecteer een optie--</option>
                <option value="tent">Tent</option>
                <option value="camper">Camper</option>
                <option value="caravan">Caravan</option>
                <option value="huisje">Huisje</option>
              </select>
            </label>
            <button
              type="button"
              onClick={handleSearch}
              className="border-2 border-wit rounded-md px-4 py-2 h-12 mt-auto text-xl"
            >
              Zoeken
            </button>
          </div>
          {results ? (
            <ul className="flex flex-col gap-4 mt-4">
              {results.map((result) => (
                <li
                  key={result.id}
                  className="border-2 border-blauw flex justify-between rounded-md p-4"
                >
                  <div className="grid grid-cols-3 items-center flex-1">
                    <div className="pr-8">{result.spotType} plek</div>
                    <div>€{result.price}</div>
                    <div>plek nummer {result.spotNumber}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handlePickSpot(result.id)}
                    className="bg-groen text-black px-4 py-2 rounded-md"
                  >
                    Kies plek
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </form>
      </section>
      <RecensiesSection />
    </>
  );
}
