let data = [];

fetch("results.json")
    .then(res => res.json())
    .then(result => {
        data = result;
        displayData(data);
    });

function displayData(dataList) {
    let tableBody = document.querySelector("#resultTable tbody");
    tableBody.innerHTML = "";

    dataList.forEach(student => {
        let row = `
        <tr>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.marks}</td>
            <td>${student.result}</td>
            <td><button onclick="downloadResult('${student.name}')">PDF</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function searchResult() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let classFilter = document.getElementById("classFilter").value;

    let filtered = data.filter(student => {
        let matchText = student.name.toLowerCase().includes(input) || student.roll.includes(input);
        let matchClass = classFilter === "" || student.class === classFilter;
        return matchText && matchClass;
    });

    if (filtered.length > 0) {
        displayData(filtered);
        document.getElementById("noResult").style.display = "none";
    } else {
        document.querySelector("#resultTable tbody").innerHTML = "";
        document.getElementById("noResult").style.display = "block";
    }
}

function downloadResult(name) {
    alert("Downloading result for " + name);