"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  let redirectUrlParam = searchParams.get("redirect_url");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    redirectUrlParam = searchParams.get("redirect_url");

    if (redirectUrlParam) setMessage("Log in om deze pagina te bekijken.");

    return () => {};
  }, [redirectUrlParam]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const redirectUrl = redirectUrlParam ? redirectUrlParam : "/";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      setErrorMessage(errorData.message);
    } else {
      // Go to redirectUrl without using NextJs push to reload user
      window.location.href = redirectUrl;
    }
  };

  return (
    <>
      {message ? <div>{message}</div> : <></>}
      <div className="flex justify-center items-center h-[calc(100svh-3rem)] flex-col">
        <h1 className="mb-8">Inloggen</h1>
        {errorMessage && <p>{errorMessage}</p>}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
          <button className="p-4 bg-blauw text-wit rounded-md">Inloggen</button>
        </form>
      </div>
    </>
  );
}
