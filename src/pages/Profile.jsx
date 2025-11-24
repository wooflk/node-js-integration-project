import { useEffect, useState } from "react";

export default function Profile({ user }) {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    fetch(`https://undegenerating-contumely-lashandra.ngrok-free.dev/progress/${user.login}`)
      .then(r => r.json())
      .then(setProgress);
  }, [user]);

  return (
    <div>
      <h2>добро пожаловать, {user.login}</h2>

      <h3>в прогресс по курсам:</h3>

      {Object.keys(progress).length === 0 && <p>вы ещё не начали курсы</p>}

      {Object.entries(progress).map(([course, value]) => (
        <div key={course}>
          {course}: <b>{value}%</b>
        </div>
      ))}
    </div>
  );
}