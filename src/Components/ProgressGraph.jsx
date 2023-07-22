import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressGraph() {
  const p1 = 78;
  const p2 = 95;
  const p3 = 59;
  const styles = buildStyles({
    textSize: "1.5rem",
    pathColor: "#2ADACE",
    textColor: "black",
    trailColor: "#CFFFFB",
  });

  return (
    <div className="font-mulish flex flex-row justify-between items-center w-2/5 mr-auto ml-20 overflow-hidden ">
      <div className="flex flex-col justify-center items-center px-3 py-1 tracking-wide font-bold ">
        <CircularProgressbar value={p1} text={`${p1}%`} styles={styles} />
        <p className="text-xs py-2 font-semibold">Average</p>
      </div>
      <div className="flex flex-col justify-center items-center px-3 py-1 tracking-wide font-bold ">
        <CircularProgressbar value={p2} text={`${p2}%`} styles={styles} />
        <p className="text-xs py-2 font-semibold">Top</p>
      </div>
      <div className="flex flex-col justify-center items-center px-3 py-1 tracking-wide font-bold ">
        <CircularProgressbar value={p3} text={`${p3}%`} styles={styles} />
        <p className="text-xs py-2 font-semibold">Me</p>
      </div>
    </div>
  );
}
