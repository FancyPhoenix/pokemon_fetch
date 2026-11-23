

async function fetchData() {
    
    try {
        const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            alert("There is an error while fetching data");
            throw new Error("There is an error while fetching data");
        }

        let imageBox = document.getElementById("pokemon-sprite");
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        imageBox.src = pokemonSprite;
        imageBox.style.display = "block";
        }
        catch(error) {
            alert("There is an error while fetching data");
            console.error("There is an error while fetching data");
    }
}