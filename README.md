# student-grade-dashboard

## 📌 Overview

The **Student Profile App** is a React-based application that displays a student's academic performance, including subjects and grades.

Users can interact with the app by:

- Viewing subjects and grades
- Seeing pass/fail status with badges
- Expanding subject cards to reveal teacher details
- Filtering subjects using a search input

All data is **locally stored (hardcoded)** — no API calls are used.

---

## 🚀 Features

- ✅ Display student name and ID
- ✅ Show overall average score
- ✅ Pass/Fail badge using conditional rendering
- ✅ Honour Roll / Needs Improvement status
- ✅ Expandable subject details (toggle teacher name)
- ✅ Dynamic styling based on grade
- ✅ Search functionality to filter subjects
- ✅ Responsive and clean UI

---

## 🛠️ Built With

- ⚛️ React (Vite)
- 🧠 useState Hook
- 🎨 CSS / Tailwind (optional)
- 💡 JavaScript (ES6+)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── StudentHeader.jsx
│   └── SubjectCard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧩 Components

### 1. SubjectCard Component

**Props:**

- `subject` (string)
- `grade` (number)
- `teacher` (string)

**Features:**

- Displays subject name and grade
- Shows:
  - 🟢 Pass (grade ≥ 50)
  - 🔴 Fail (grade < 50)

- Expand/collapse button to show teacher name
- Dynamic left border color:
  - Green → Pass
  - Red → Fail

---

### 2. StudentHeader Component

**Props:**

- `name` (string)
- `studentId` (string)
- `overallAverage` (number)

**Features:**

- Displays student name and ID
- Shows average score
- Conditional rendering:
  - 🥇 Honour Roll (≥ 75)
  - ⚠️ Needs Improvement (< 50)
  - Nothing otherwise

---

### 3. App Component

**Responsibilities:**

- Stores subject data (hardcoded)
- Calculates overall average
- Manages search state
- Filters subjects dynamically
- Renders all components together

---

## 🔍 Search Functionality

- Users can search subjects by name
- Filtering is case-insensitive
- If no results are found:

  ```
  No subjects found
  ```

---

## 📊 Example Data

```js
const subjects = [
  { id: 1, subject: "Mathematics", grade: 78, teacher: "Mr. John" },
  { id: 2, subject: "English", grade: 45, teacher: "Mrs. Sarah" },
  { id: 3, subject: "Biology", grade: 82, teacher: "Dr. James" },
  { id: 4, subject: "Chemistry", grade: 67, teacher: "Dr. Mary" },
  { id: 5, subject: "Physics", grade: 49, teacher: "Mr. David" },
];
```

---

## 🧠 Concepts Used

- React Components
- Props
- State Management (`useState`)
- Conditional Rendering
- List Rendering (`map`)
- Event Handling
- Dynamic Styling

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/osemwengiearit/student-grade-dashboard.git
```

2. Navigate into the project:

```bash
cd student-grade-dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open in browser:

```
http://localhost:5173/
```

---

## ✅ Code Quality

- ✔ Components separated into reusable files
- ✔ No direct state mutation
- ✔ Clean and readable code
- ✔ No console errors or warnings

---

## 🎯 Learning Outcomes

This project demonstrates:

- Component-based architecture
- State and props management
- Interactive UI design
- Clean code practices

---

## 📌 Author

**Arit Bright Osemwengie**
Frontend Developer 🚀

---

## ⭐ Acknowledgements

Built as part of a React learning assignment to practice real-world UI interactions and state management.

---
