import SubjectCard from "./SubjectCard";
import "../styles/SubjectCard.css";
import { subjectsData } from "../data";

const SubjectCards = ({ data }) => {
    return (
        <>
            {data.length >= 1 ? (
                <div className="subject_card_wrapper">
                    {data.map(({ id, subject, grade, teacher }) => (
                        <SubjectCard
                            key={id}
                            subject={subject}
                            grade={grade}
                            teacher={teacher}
                        />
                    ))}
                </div>
            ) : (
                <div className="no_subj_found">No subject found.</div>
            )}
        </>
    );
};

export default SubjectCards;
