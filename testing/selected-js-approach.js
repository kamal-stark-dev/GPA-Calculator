function scrapeAndReturnGPA(text) {
  const gradeMap = {
    A: 9,
    "A+": 10,
    "B+": 8,
    B: 7,
    "C+": 6,
    C: 5,
    D: 4,
    E: 3,
    F: 0,
  };

  // Split text into lines and remove the header
  const lines = text.trim().split("\n").slice(1); // Skip header row

  let totalCredits = 0;
  let totalPoints = 0;

  for (let line of lines) {
    // Split the line using tab characters
    const parts = line.split("\t").map((part) => part.trim()); // Trim each part

    if (parts.length === 4) {
      const credit = parseFloat(parts[2]); // Credits are in the 3rd column
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
  Subject Code\tSubject Name\tCredits\tGrade
  22CSH-282\tDESIGN AND ANALYSIS OF ALGORITHMS\t4.00\tB+
  22CSH-286\tMachine Learning\t3.00\tB+
  22CSH-287\tProgramming in Python\t4.00\tB+
  22CSR-289\tMini Project -1\t1.00\tC+
  22CST-281\tComputer Organization and Architecture\t3.00\tB+
  22CST-283\tProbability and Statistics\t4.00\tA
  22GPT-222\tGeneral Proficiency-4\t1.00\tA
  22TDP-291\tSOFT SKILLS II\t2.00\tQualified
  22TDT-292\tAptitude-II\t4.00\tQualified
  22UCT-297\tGender Equity and Empowerment\t1.00\tA
  `;

console.log(scrapeAndReturnGPA(input)); // Output the calculated GPA
