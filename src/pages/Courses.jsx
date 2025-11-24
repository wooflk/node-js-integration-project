import React, { useEffect, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://undegenerating-contumely-lashandra.ngrok-free.dev/courses")
      .then(res => res.json())
      .then(setCourses)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>курсы</h1>

      <div className="course-list">
        {courses.map(c => (
          <div key={c.id} className="course-card">
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <a href={`/course/${c.id}`}>открыть курс</a>
          </div>
        ))}
      </div>
    </div>
  );
}