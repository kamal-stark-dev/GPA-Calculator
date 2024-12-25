"""
This program scrapes the data from text and calculates the GPA from it.
"""

# calculating the grade
def gradeVal(grade):
    grade = grade.upper()

    gradeMap = {
        "A+": 10, "A": 9, "B+": 8, "B": 7, "C+": 6, "C": 5, "D": 4, "E": 3, "F": 0
    }
    return gradeMap.get(grade, -1)

data = """
ode	Subject Name	Credits	Grade
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
"""

lines = data.strip().split("\n")

# removing the headers they exist
if (lines[0].lower() in "subject code	subject name	credits	grade"):
    lines = lines[1:]

values = []

for line in lines:
    values.append(line.split("\t"))

# scrapint out the credits and grades
credits = []
grades = []
for value in values:
    if value[3].lower() != "qualified":
        credits.append(int(value[2][0]))
        grades.append(value[3])

# calculating GPA
totalCredits = 0
studentScore = 0
for credit, grade in zip(credits, grades):
    totalCredits += credit
    studentScore += credit * gradeVal(grade)

    GPA = studentScore / totalCredits

# Debugging
print(f"{values=}\n\n{credits=}\n\n{grades=}\n\n{GPA=:.2f}")
