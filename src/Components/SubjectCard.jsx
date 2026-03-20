import { useState } from "react";
import "../styles/SubjectCard.css";

const SubjectCard = ({ subject, grade, teacher }) => {
    const [isExpanded, setisExpanded] = useState(false);

    return (
        <div className={`subject_card_container ${grade >= 50 ? "" : "fail"}`}>
            <div className="subject_details">
                <div>
                    <h3 className="subject_name">{subject}</h3>
                    <p className="subject_grade">
                        <span>{grade}</span>/100
                    </p>
                    {isExpanded && (
                        <span className="teacher_name">Teacher: {teacher}</span>
                    )}
                </div>
                <span className={grade >= 50 ? "" : "fail"}>
                    {grade >= 50 ? "Pass" : "Fail"}
                </span>
            </div>
            <div className="toggle_option">
                <button
                    onClick={() => {
                        setisExpanded((prev) => !prev);
                    }}
                >
                    {isExpanded ? "collapse" : "expand"}
                </button>
            </div>
        </div>
    );
};

export default SubjectCard;
