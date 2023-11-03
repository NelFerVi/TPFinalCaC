const listVinos = async () => {
    const response = await fetch("https://api.sampleapis.com/wines/reds");
    const vinos = await response.json();
    console.log(vinos);
    
    vinos.forEach((vino, index) => {
        console.log(vino);
    })
    let tableBody = ``;
    
    vinos.forEach((vino, index) => {
        tableBody += `<tr>
            <td><img src="${vino.image}" width="50"></img></td>
                <td>${vino.id}</td>
                <td>${vino.winery}</td>
                <td>${vino.wine}</td>
                <td>${vino.location}</td>
                <td>${vino.rating}</td>
        </tr>`;
    });

    /* document.getElementById("tBodyVinos").innerHTML = tableBody; */
    tBodyVinos.innerHTML = tableBody;
};

window.addEventListener("load", function() {
    listVinos();
});
/* {
    "winery": "Maselva",
    "wine": "Emporda 2012",
    "rating": {
    "average": "4.9",
    "reviews": "88 ratings"
    },
    "location": "Spain\n·\nEmpordà",
    "image": "https://images.vivino.com/thumbs/ApnIiXjcT5Kc33OHgNb9dA_375x500.jpg",
    "id": 1
    } */