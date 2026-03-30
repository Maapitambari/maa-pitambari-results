let data = JSON.parse(localStorage.getItem("students")) || [];

function display() {
    let tbody = document.querySelector("#resultTable tbody");
    tbody.innerHTML = "";

    data.forEach(s => {
        tbody.innerHTML += `
        <tr>
            <td>${s.roll}</td>
            <td>${s.name}</td>
            <td>${s.class}</td>
            <td>${s.marks}</td>
            <td>${s.marks >= 200 ? "Pass" : "Fail"}</td>
        </tr>`;
    });
}

function searchResult() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let filtered = data.filter(s =>
        s.name.toLowerCase().includes(input) || s.roll.includes(input)
    );

    let tbody = document.querySelector("#resultTable tbody");
    tbody.innerHTML = "";

    filtered.forEach(s => {
        tbody.innerHTML += `
        <tr>
            <td>${s.roll}</td>
            <td>${s.name}</td>
            <td>${s.class}</td>
            <td>${s.marks}</td>
            <td>${s.marks >= 200 ? "Pass" : "Fail"}</td>
        </tr>`;
    });
}

display();