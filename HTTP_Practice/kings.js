const output = document.getElementById('jsonData');
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', function (event) {

    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
        .then(response => {

            const kings = response.data;
            console.log(kings);

            let searchValue = searchBar.value;

            //Loops through each value in the kings object
            for (let king of kings) {

                const kingDeets = document.createElement('div');

                    if (searchValue === king.nm || searchValue === king.cty || searchValue === king.hse || searchValue === king.yrs) {
                        kingDeets.innerText = JSON.stringify(king, null, 2);
                    } 

                console.log(kingDeets);
                output.appendChild(kingDeets);
            }
        }
        )
        .catch(err => console.error(err));
}
)