function scrapeAndReturnGPA(text) {
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

  // Split text into lines and remove the header
  const lines = text.trim().split("\n");
  // console.log(lines[0]);
  if (lines[0].toLowerCase().includes("subject code")) {
    lines.shift();
  }

  let totalCredits = 0;
  let totalPoints = 0;

  for (let line of lines) {
    // Split the line using tab characters
    const parts = line.split("\t").map((part) => part.trim()); // Trim each part

    if (parts.length === 4) {
      const credit = parseInt(parts[2]); // Credits are in the 3rd column
      const grade = parts[3]; // Grade is in the 4th column

      // Skip grades marked as "Qualified"
      if (grade === "Qualified") continue;

      // Check if the grade is valid
      if (gradeMap.hasOwnProperty(grade)) {
        totalCredits += credit;
        totalPoints += credit * gradeMap[grade];
      } else {
        console.error(`Invalid grade: "${grade}"`);
        return NaN;
      }
    } else {
      console.error(`Invalid line format: "${line}"`);
      return NaN;
    }
  }

  // Calculate and return GPA
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : NaN;
}

// Example input
const input = `
Subject Code	Subject Name	Credits	Grade
22CSH-282	DESIGN AND ANALYSIS OF ALGORITHMS	4.00	B+
22CSH-286	Machine Learning	3.00	B+
22CSH-287	Programming in Python	4.00	B+
22CSR-289	Mini Project -1	1.00	C+
22CST-281	Computer Organization and Architecture	3.00	B+
22CST-283	Probability and Statistics	4.00	A
22GPT-222	General Proficiency-4	1.00	A
22TDP-291	SOFT SKILLS II	2.00	Qualified
22TDT-292	Aptitude-II	4.00	Qualified
22UCT-297	Gender Equity and Empowerment	1.00	A
`;

console.log(scrapeAndReturnGPA(input)); // Output the calculated GPA
