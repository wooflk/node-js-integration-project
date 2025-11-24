import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function CourseView({ user, setUser }) {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [currentLesson, setCurrentLesson] = useState(0);

    useEffect(() => {
        fetch(`https://undegenerating-contumely-lashandra.ngrok-free.dev/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [id]);

    if (!course) return <div>загрузка...</div>;

    const lessons = course.lessons;
    const lesson = lessons[currentLesson];

    function completeLesson() {
        fetch("https://undegenerating-contumely-lashandra.ngrok-free.dev/progress/complete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                login: user.login,
                course_id: id,
                lesson_id: currentLesson
            })
        })
            .then(res => res.json())
            .then(data => {
                setUser({
                    ...user,
                    lessons_done: data.lessons_done
                });

                if (currentLesson + 1 < lessons.length) {
                    setCurrentLesson(currentLesson + 1);
                }
            });
    }

    const progressPercent =
        user.lessons_done && user.lessons_done.length
            ? (user.lessons_done.length / lessons.length) * 100
            : 0;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{course.title}</h1>

            <ProgressBar progress={progressPercent} />

            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>

            <button onClick={completeLesson}>отметить как пройден</button>
        </div>
    );
}