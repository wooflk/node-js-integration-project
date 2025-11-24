import "./../styles/CoursePage.css";

export default function ProgressBar({ value = 0 }) {
  return (
    <div className="progress-box card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="small">прогресс</div>
        <div style={{fontWeight:700}}>{value}%</div>
      </div>
      <div className="progress-bar" aria-hidden>
        <div className="progress-fill" style={{width:`${value}%`}}></div>
      </div>
    </div>
  );
}