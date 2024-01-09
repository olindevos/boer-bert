"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const { push } = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    push("/login");
  };

  return (
    <section className="flex justify-center items-center h-[calc(100svh-3rem)] flex-col">
      <h1 className="mb-8">Maak een account aan</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          required
          onInput={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onInput={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onInput={(e) => setPassword(e.target.value)}
        />
        <button className="p-4 bg-blauw text-wit rounded-md">Registreer</button>
      </form>
    </section>
  );
}
