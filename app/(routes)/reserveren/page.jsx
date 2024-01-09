"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reserveren() {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    guests: "",
    spotType: "",
  });

  const handleInput = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/spots`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          ...formData,
        }),
      }
    );

    const results = await response.json();

    setResults(results);
  };

  const handlePickSpot = async (spotId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/create_reservation`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
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

      push("/reserveren/afronden");
    } catch (error) {
      alert(error);
      console.error("Error making reservation:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <section className="ReserverenSect">
        <div className="ReserverenDiv">
          <div className="ResSidebar">
            <div className="ResSidehead">
              <div className="ResSideplaats"> Plaats ... </div>
              <hr className="ResSidePlaatsHr" />
            </div>

            <div className="ResSidetext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              fugit doloribus hic incidunt in id voluptatem possimus sed est
              accusamus mollitia quia illo? Reprehenderit iste saepe asperiores
              maiores, aliquid officiis.
            </div>

            <div className="ResSideBoeken">
              <hr className="ResSideBoekenHr" />
              <div className="ResSideBoekenKnop">boeken</div>
            </div>
          </div>

          <div className="KaartDiv">
            <Image className="" src="/plattegrondcamping.jpg" alt="" fill />
            <div className="KaartkeuzeDiv">
              <div className="KaartKeuzeZoom">
                <div className="KaartKeuzeDivPlus"> +</div>
                <div className="KaartKeuzeDivMin"> - </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
