import { useState } from "react";
import StudentHeader from "./Components/StudentHeader";
import FilterSubject from "./Components/FilterSubject";
import SubjectCards from "./Components/SubjectCards";
import { subjectsData } from "./data";

function App() {
    const [filterValue, setFilterValue] = useState("");

    const filteredData = subjectsData.filter(({ subject }) =>
        subject.toLowerCase().includes(filterValue.toLocaleLowerCase())
    );
    return (
        <>
            <div className="wrapper">
                <StudentHeader />
                <FilterSubject
                    setFilterValue={setFilterValue}
                    filterValue={filterValue}
                />
                <SubjectCards data={filteredData} />
            </div>
        </>
    );
}

export default App;
