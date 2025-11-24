import React, { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("https://undegenerating-contumely-lashandra.ngrok-free.dev/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password })
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <h1>вход</h1>
      <form onSubmit={handleLogin}>
        <input value={login} onChange={e => setLogin(e.target.value)} />
        <input value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">войти</button>
      </form>
    </div>
  );
}