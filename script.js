// Sample student details (replace with your data)
const studentData = [
    { certificateId: "ADV860964", name: "Vinay Kumar", Domain: "Java Developer", Starting_date: "15/09/2023", Ending_date: "15/10/2023" },
    { certificateId: "ADV860965", name: "Jane Smith", Domain: "Data Science", Starting_date: "15/09/2023", Ending_date: "15/10/2023" },
];

const form = document.getElementById("verification-form");
const certificateIdInput = document.getElementById("certificate-id");
const resultDiv = document.getElementById("result");
const studentDetails = document.getElementById("student-details");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const certificateId = certificateIdInput.value.trim();

    const student = studentData.find((student) => student.certificateId === certificateId);

    if (student) {
        resultDiv.style.display = "block";
        studentDetails.innerHTML = `
            <strong>Name:</strong> ${student.name}<br>
            <strong>Domain:</strong> ${student.Domain}<br>
            <strong>Starting Date:</strong> ${student.Starting_date}<br>
            <strong>Ending Date:</strong> ${student.Ending_date}<br>
        `;
        successMessage.style.display = "block"; // Show the success message
    } else {
        resultDiv.style.display = "none";
        successMessage.style.display = "none"; // Hide the success message
        alert("Certificate ID not found. Please check the ID and try again.");
    }
});
