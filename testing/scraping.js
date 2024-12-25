text = `
22CSH-103	Object Oriented Programming Using C++	4.00	B
22CSP-102	Workshop Technology	1.00	B
22CSR-107	Independent Project	1.00	C+
22ECH-101	Digital Electronics	4.00	B+
22ECH-103	Disruptive Technologies-2	2.00	B+
22GPT-122	General Proficiency-2	1.00	C+
22SMT-125	Mathematics – II	4.00	B
22SZT-148	Biology for Engineers	3.00	B
22TDP-151	Soft Skills -1	1.00	A
22UCT-102	Academic Writing Skills and IPR	1.00	B+
22UCT-103	Universal Human Values, Ethics and Life Skills-1	2.00	B+
`;

lines = text.trim().split("\n");

if (lines[0].toLowerCase().includes("subject code")) {
  lines = lines.slice(1);
}

let values = [];
let credits = [];
let grades = [];

for (let line of lines) {
  values.push(line.split("\t"));
}

for (let value of values) {
  if (value[3].toLowerCase() !== "qualified") {
    credits.push(parseInt(value[2]));
    grades.push(value[3]);
  }
}

console.log(lines);
console.log("Credits:", credits);
console.log("Grades:", grades);
