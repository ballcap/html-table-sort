fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var table = document.getElementById("data_output");

        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = data[i].id;
            cell2.innerHTML = data[i].name;
            cell3.innerHTML = data[i].job;
            cell4.innerHTML = data[i].game;
            cell5.innerHTML = data[i].desc;
        }
    })
    .catch(error => console.error('Error fetching data:', error));