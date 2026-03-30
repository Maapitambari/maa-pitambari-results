let students = JSON.parse(localStorage.getItem("students")) || [];

function login() {
    let pass = document.getElementById("password").value;

    if (pass === "1234") {
        document.getElementById("adminPanel").style.display = "block";
        loadStudents();
    } else {
        alert("Wrong Password");
    }
}

function addStudent() {
    let student = {
        roll: document.getElementById("roll").value,
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        marks: document.getElementById("marks").value
    };

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added!");
    loadStudents();
}

function loadStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((s, i) => {
        list.innerHTML += `
        <li>${s.name} (${s.roll}) 
        <button onclick="deleteStudent(${i})">Delete</button></li>`;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
}