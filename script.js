function calculateGPA() {
    // Get marks of each subject
    let subject1 = parseFloat(document.getElementById('subject1').value) || 0;
    // Get marks of other subjects similarly

    // Calculate GPA (assuming equal weights for all subjects)
    let totalMarks = subject1; // Add marks of other subjects similarly
    let totalSubjects = 1; // Change to total number of subjects

    let averageMarks = totalMarks / totalSubjects;

    let gradePoint;

    // Determine grade point based on average marks
    if (averageMarks >= 91 && averageMarks <= 100) {
        gradePoint = 10;
    } else if (averageMarks >= 81 && averageMarks <= 90) {
        gradePoint = 9;
    } else if (averageMarks >= 71 && averageMarks <= 80) {
        gradePoint = 8;
    } else if (averageMarks >= 61 && averageMarks <= 70) {
        gradePoint = 7;
    } else if (averageMarks >= 51 && averageMarks <= 60) {
        gradePoint = 6;
    } else {
        gradePoint = 0; // Failing grade
    }

    // Display result
    document.getElementById('result').innerHTML = `Average Marks: ${averageMarks.toFixed(2)}<br>Grade Point: ${gradePoint}`;
}
