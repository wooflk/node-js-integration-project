import { Link } from "react-router-dom";
import "../styles/Courses.css";

export default function CourseCard({ course }) {
  return (
    <div className="course-card card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12}}>
        <div>
          <div className="course-title">{course.title || course.name || course.title}</div>
          <div className="small">{course.description || course.desc || ""}</div>
        </div>
        <div style={{minWidth:110}}>
          <Link to={`/course/${course.id}`}>
            <button className="btn" style={{width:'100%'}}>Открыть</button>
          </Link>
        </div>
      </div>
    </div>
  );
}