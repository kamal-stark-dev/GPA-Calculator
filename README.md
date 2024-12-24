# GPA Calculator

This project is a simple web-based GPA Calculator that allows users to input their course information, credits, and grades to calculate their GPA. It uses **HTML**, **CSS**, and **JavaScript** for the frontend and logic.

![](./demo.png)

## Features

1. Dynamic input fields for multiple courses.
2. Dropdown menus for grade selection to avoid manual grade input errors.
3. Real-time GPA calculation upon submission.
4. Error handling for invalid or missing inputs.

## How to Use

1. **Open the Application**: Load the HTML file in any modern web browser.
2. **Add Courses**: Click the "Add Course" button to add fields for a new course.
3. **Enter Course Details**:
   - **Course Name**: Enter the **name** of the course.
   - **Credits**: Input the **credit** for the course.
   - **Grade**: Select the **grade** received for the course from the dropdown.
4. **Calculate GPA**: Click the "Calculate GPA" button to view your GPA. The result will be displayed at the bottom of the form.

## Grade-to-Point Mapping

The following grade-to-point mapping is used:

| Grade | Points |
| ----- | ------ |
| A+    | 10     |
| A     | 9      |
| B+    | 8      |
| B     | 7      |
| C+    | 6      |
| C     | 5      |
| D     | 4      |
| E     | 3      |
| F     | 0      |

## Customization

You can modify the following aspects to suit your needs:

1. **Grade Mapping**: Update the `gradeMap` object in the script to adjust grade-to-point conversions.
2. **Styling**: Enhance the design by adding a separate CSS file or modifying the existing inline styles.
3. **Validation Rules**: Extend validation logic to suit specific use cases, such as handling decimals for credits.

## Future Enhancements

- Save course data locally using browser storage.
- Allow importing and exporting course lists as CSV files.
- Add support for custom grading systems.

## License

This project is open-source and free to use under the MIT License. Build by [Kamalveer Singh](https://www.github.com/kamal-stark-dev)
