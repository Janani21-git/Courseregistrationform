function showCourses() {
    fetch("http://localhost:8080/courses") // API Endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(courses => {
            const dataTable = document.getElementById("coursetable");

            // ✅ Clear existing rows before adding new ones
            dataTable.innerHTML = "";

            // ✅ Use map() to create rows efficiently
            const rows = courses.map(course => `
                <tr>
                    <td>${course.courseId}</td>
                    <td>${course.courseName}</td>
                    <td>${course.trainer}</td>
                    <td>${course.durationInWeeks}</td>
                </tr>
            `).join(""); // ✅ Convert array to string

            dataTable.innerHTML = rows; // ✅ Insert all rows at once for better performance
        })
        .catch(error => {
            console.error("Error fetching courses:", error);
            alert("Failed to fetch courses. Please try again later.");
        });
}

// ✅ Run the function when the page loads
window.onload = showCourses;


function showEnrolledStudents(){
    fetch("http://localhost:8080/courses/enrolled") //API End point
    .then((response) => response.json()) //Http response into json object
    .then((students) => {
        const dataTable = document.getElementById("enrolledtable")

        students.forEach(student => {
            var row = `<tr>
            <td>${student.name}</td>
            <td>${student.emailId}</td>
            <td>${student.courseName}</td>
            </tr>`

            dataTable.innerHTML+=row;
        });
    });
}