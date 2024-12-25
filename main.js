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

// calculate the GPA from credits and grades
function calculateGPA(credits, grades) {
  let totalCredits = 0;
  let studentPoints = 0;

  for (let i = 0; i < credits.length; i++) {
    if (credits[i] > 0 && gradeMap.hasOwnProperty(grades[i])) {
      totalCredits += credits[i];
      studentPoints += credits[i] * gradeMap[grades[i]];
    } else {
      return NaN; // Invalid data
    }
  }

  return totalCredits > 0 ? (studentPoints / totalCredits).toFixed(2) : NaN;
}

// displays the GPA if exists
function displayGPA(gpa) {
  if (!isNaN(gpa)) {
    outputDiv.textContent = `YOUR GPA IS - ${gpa}`;
  } else {
    outputDiv.textContent = `Error: Please ensure all fields are filled correctly.`;
  }
  outputDiv.style.display = "block";
}

// add course input fields
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

// remove the course input fields
function removeCourseInput() {
  const rows = courseInputs.getElementsByClassName("course-row");
  if (rows.length > 0) {
    // remove the last row
    courseInputs.removeChild(rows[rows.length - 1]);
  }
}

// addning event listeners to the add and remove course buttons
document.getElementById("addCourse").addEventListener("click", addCourseInput);
document
  .getElementById("removeCourse")
  .addEventListener("click", removeCourseInput);

// get details from the form, calculate and display GPA
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

  const gpa = calculateGPA(credits, grades);
  displayGPA(gpa);
});

// Report paste feature
const pasteButton = document.querySelector("#pasteBtn");
const outputArea = document.querySelector("#pasteArea");

pasteButton.addEventListener("click", async () => {
  try {
    // Request permission to read from the clipboard
    const text = await navigator.clipboard.readText();
    outputArea.value = text;
    scrapeGPA(text);
    displayGPA(gpa);
  } catch (err) {
    console.error("Failed to read clipboard contents: ", err);
  }
});

function scrapeGPA(text) {}

// Add the first course input fields on load
addCourseInput();
