import "../styles/StudentHeader.css";
import { subjectsData } from "../data";

const StudentHeader = () => {
    const total = subjectsData.reduce((acc, curr) => acc + curr.grade, 0);
    const average = Math.ceil(total / subjectsData.length);

    return (
        <div className="student_header_container">
            <div className="student_detail">
                <h1 className="student_name">Alexander Davis</h1>
                <span className="student_id">STU-98756</span>
            </div>
            <div className="overall_average">
                <span>Average: {average}/100</span>
                <span className={average >= 75 ? "" : "needs_improvement"}>
                    {average >= 75 ? "Honor Roll" : "Needs Improvement"}
                </span>
            </div>
        </div>
    );
};

export default StudentHeader;
