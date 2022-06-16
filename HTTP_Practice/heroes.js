"use strict";


// //Easiest way to do it
// //Stringify turns JSON data into a string format
// fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
// .then(res => res.json())
// .then(data => {
//     //grabbed the myData element and set the text inside of it as the JSON in string format
//     //third parameter adds spaces after everything
//     document.getElementById('jsonData').innerText = JSON.stringify(data, null, 2);

// })
// .catch(err => console.error(err));



//to format the json nicely:
const output = document.getElementById('jsonData');
axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {

        const heroes = response.data;
        console.log(heroes);

        const squadName = document.createElement('h1');
        squadName.innerText = heroes.squadName;
        output.appendChild(squadName);

        const homeTown = document.createElement('p');
        homeTown.innerText = "Hometown: " + heroes.homeTown;
        output.appendChild(homeTown);

        const secretBase = document.createElement('p');
        secretBase.innerText = "Secret Base: " + heroes.secretBase;
        output.appendChild(secretBase);

        const yearFormed = document.createElement('p');
        yearFormed.innerText = "Year Formed: " + heroes.formed;
        output.appendChild(yearFormed);

        const active = document.createElement('p');
        active.innerText = "Active: " + heroes.active;
        output.appendChild(active);

        for (let member of heroes.members) {
            const memberSection = document.createElement('section');

            const memberName = document.createElement('h2');
            memberName.innerText = member.name;
            memberSection.appendChild(memberName);

            const heroAge = document.createElement('p');
            heroAge.innerText = "Age: " + member.age;
            memberSection.appendChild(heroAge);

            const heroSI = document.createElement('p');
            heroSI.innerText = "Secret Identity: " + member.secretIdentity;
            memberSection.appendChild(heroSI);

            const powers = document.createElement('ul');

            for (let power of member.powers) {
                const list = document.createElement('li');
                list.innerText = "Powers: " + power;
                powers.appendChild(list);
            }

            memberSection.appendChild(powers);
            output.appendChild(memberSection);

        }
    }   
)
    .catch(err => console.error(err));