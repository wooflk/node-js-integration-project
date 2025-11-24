import React, { useState } from "react";

export default function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [courseId, setCourseId] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const res = await fetch("https://undegenerating-contumely-lashandra.ngrok-free.dev/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        password,
        course_id: courseId
      })
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Регистрация</h1>

      <form onSubmit={handleRegister}>
        <input value={login} onChange={e => setLogin(e.target.value)} placeholder="логин" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="пароль" />

        <select value={courseId} onChange={e => setCourseId(e.target.value)}>
          <option value="">выберите курс</option>
          <option value="1">сварщик</option>
          <option value="2">менеджер</option>
          <option value="3">продавец</option>
        </select>

        <button type="submit">создать аккаунт</button>
      </form>
    </div>
  );
}