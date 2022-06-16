"use strict";

const output = document.getElementById('kittenOutput');

//Allows user to add to array via form on page
document.getElementById('kittenForm').addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    const kitten = {
        name: form.kittenName.value,
        age: form.kittenAge.value,
        breed: form.kittenBreed.value,
        cuteness: form.kittenCuteness.value
    }

    axios.post("http://localhost:4494/kitten/create", kitten)
        .then(res => {
            console.log(res);
            renderKittens();
        })
        .catch(err => console.error(err));
})

//delete a kitten by id and refresh printed list when deleted
function deleteKitten (id) {
    axios.delete("http://localhost:4494/kitten/remove/" + id)
    .then(res => {
        console.log();
        renderKittens();
    })
    .catch(err => console.log(err));
}


//renders the kitten information on the page
function renderKittens() {
    axios.get("http://localhost:4494/kitten/getAll")
        .then(res => {
            output.innerHTML = "";
            for (let kittens of res.data) {
                console.log(kittens);

                const kittenDiv = document.createElement("div");
                kittenDiv.id = ".kitten";

                const kittenName = document.createElement("h2");
                kittenName.innerText = kittens.name;
                kittenDiv.appendChild(kittenName);

                // const kittenID = document.createElement("p");
                // kittenID.innerText = "ID: " + kittens.id;
                // kittenDiv.appendChild(kittenID);

                const kittenAge = document.createElement("p");
                kittenAge.innerText = "Age: " + kittens.age;
                kittenDiv.appendChild(kittenAge);

                const kittenBreed = document.createElement("p");
                kittenBreed.innerText = "Breed: " + kittens.breed;
                kittenDiv.appendChild(kittenBreed);

                const kittenCuteness = document.createElement("p");
                kittenCuteness.innerText = "Cuteness: " + kittens.cuteness;
                kittenDiv.appendChild(kittenCuteness);

                //adds a delete button to each div
                //when button is clicked, pull through kitten id and run delete function
                const kittenDelete = document.createElement("button");
                kittenDelete.innerText = "Delete";
                kittenDelete.addEventListener("click", function() {
                    deleteKitten(kittens.id);
                })

                kittenDiv.appendChild(kittenDelete);

                output.prepend(kittenDiv);
            }
        })
        .catch(err => console.error(err));
}

//renders the kitten data onload of page
renderKittens();
