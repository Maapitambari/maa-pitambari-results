function searchResult() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let table = document.getElementById("resultTable");
    let rows = table.getElementsByTagName("tr");
    let found = false;

    for (let i = 1; i < rows.length; i++) {
        let rowText = rows[i].innerText.toLowerCase();

        if (rowText.includes(input)) {
            rows[i].style.display = "";
            found = true;
        } else {
            rows[i].style.display = "none";
        }
    }

    document.getElementById("noResult").style.display = found ? "none" : "block";
}