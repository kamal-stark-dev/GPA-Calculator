const courseInputs = document.getElementById("courseInputs");
const outputDiv = document.getElementById("output");

const gradeMap = {
  "A+": 10,
  A: 9,
  "B+": 8,
  B: 7,
  "C+": 6,
  C: 5,
  D: 4,
  E: 3,
  F: 0,
};

function calculateGPA(subjects, credits, grades) {
  let totalCredits = 0;
  let studentPoints = 0;

  for (let i = 0; i < subjects.length; i++) {
    if (credits[i] > 0 && gradeMap.hasOwnProperty(grades[i])) {
      totalCredits += credits[i];
      studentPoints += credits[i] * gradeMap[grades[i]];
    } else {
      return NaN; // Invalid data
    }
  }

  return totalCredits > 0 ? (studentPoints / totalCredits).toFixed(2) : NaN;
}

function addCourseInput() {
  const courseRow = document.createElement("div");
  courseRow.className = "course-row";

  const subjectInput = document.createElement("input");
  subjectInput.type = "text";
  subjectInput.name = "subject";
  subjectInput.placeholder = "Course Name";
  subjectInput.required = true;

  const creditInput = document.createElement("input");
  creditInput.type = "number";
  creditInput.name = "credit";
  creditInput.placeholder = "Credits";
  creditInput.min = 1;
  creditInput.required = true;

  const gradeInput = document.createElement("select");
  gradeInput.name = "grade";
  gradeInput.required = true;

  Object.keys(gradeMap).forEach((grade) => {
    const option = document.createElement("option");
    option.value = grade;
    option.textContent = grade;
    gradeInput.appendChild(option);
  });

  courseRow.appendChild(subjectInput);
  courseRow.appendChild(creditInput);
  courseRow.appendChild(gradeInput);

  courseInputs.appendChild(courseRow);
}

function removeCourseInput() {
  const rows = courseInputs.getElementsByClassName("course-row");
  if (rows.length > 0) {
    // remove the last row
    courseInputs.removeChild(rows[rows.length - 1]);
  }
}

document.getElementById("addCourse").addEventListener("click", addCourseInput);
document
  .getElementById("removeCourse")
  .addEventListener("click", removeCourseInput);

document.getElementById("gpaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const subjects = [];
  const credits = [];
  const grades = [];

  const rows = courseInputs.getElementsByClassName("course-row");
  Array.from(rows).forEach((row) => {
    const subject = row.querySelector('input[name="subject"]').value;
    const credit = parseFloat(row.querySelector('input[name="credit"]').value);
    const grade = row.querySelector('select[name="grade"]').value;

    if (subject && !isNaN(credit) && grade) {
      subjects.push(subject);
      credits.push(credit);
      grades.push(grade);
    }
  });

  const gpa = calculateGPA(subjects, credits, grades);

  if (!isNaN(gpa)) {
    outputDiv.textContent = `YOUR GPA IS - ${gpa}`;
  } else {
    outputDiv.textContent = `Error: Please ensure all fields are filled correctly.`;
  }
  outputDiv.style.display = "block";
});

// Add the first course input fields on load
addCourseInput();
