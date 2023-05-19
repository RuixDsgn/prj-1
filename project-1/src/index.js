// ! KEYS [Carla's]
const privateKey = '4b7d303353fa7d18fbc2c276aa6e23662cbb78ee'
const publicKey = '524be211ad65a7723d3a8945e03103a6'
const baseUrl = "http://gateway.marvel.com/v1/public/characters"

console.log("hi")

// =======
// // ! KEYS
// const privateKey = '7acfe099ee38ee1ad75a40a67e5654e601d675f9'
// const publicKey = 'ad1bc0094dd363602c1e1403b5f0f1ad'
// const baseUrl = "http://gateway.marvel.com/v1/public/comics"
// >>>>>>> ad97beb3b2ce0c9c1e9e0a788b10d0140cb0373a
// console.log("hi")
// =======
// //! KEYS
// const privateKey = '72455cda6cac36c28d1195298c13909b49946c3e'
// const publicKey = '23757d38169599839be617f3af110323'
// const baseUrl = "http://gateway.marvel.com/v1/public/characters"

//! Global Variables
const form = document.querySelector("#add-characters")
const divBar = document.querySelector("#character-img-bar")
const divAdd = document.querySelector("#new-character")
const btn = document.querySelector("#btn")
// >>>>>>> 4d202e6f387d848790ad04133dae4d493bfb0e86

const createHash = () => {
	const timeStamp = new Date().getTime()
	const hashStr = timeStamp + publicKey + privateKey
	const hash = CryptoJS.MD5(hashStr).toString()
	console.log({ timeStamp, hashStr, hash })
	return hash
}

const fetchFirst = () => {
	fetch(`${baseUrl}?apikey=${publicKey}&hash=${createHash()}`)
	.then(resp => resp.json())
	.then((heroes) => {
		const charBar = document.querySelector("#character-bar");
		charBar.innerHTML = ""; // Clear the existing content before appending new heroes
		
		for (let i = 0; i < 12; i += 2) {
		  const row = document.createElement("div");
		  row.className = "row";
  
		  const hero1 = heroes.data.results[i];
		  const hero2 = heroes.data.results[i + 1];
  
		  if (hero1) {
			const hero1Container = createHeroContainer(hero1);
			row.appendChild(hero1Container);
		  }
  
		  if (hero2) {
			const hero2Container = createHeroContainer(hero2);
			row.appendChild(hero2Container);
		  }
  
		  charBar.appendChild(row);
		}
	  });
  };

  function createHeroContainer(hero) {
	const heroContainer = document.createElement("div");
	heroContainer.className = "hero-container";
  
	const heroImg = document.createElement("img");
	heroImg.src = hero.thumbnail.path + "." + hero.thumbnail.extension;
	heroContainer.appendChild(heroImg);
  
	const heroName = document.createElement("p");
	heroName.innerText = hero.name;
	heroName.style.fontSize = "smaller";
	heroContainer.appendChild(heroName);

	divAdd.addEventListener("click", renderNewCharacter)

	return heroContainer;
  }
	
  const renderNewCharacter = (newCharacter) => {
	const img = document.createElement("img")
	const pName = document.createElement("p")
	const pPower = document.createElement("p")

	img.src = newCharacter.image
	img.className = "new-character-img"
	pName.textContent = newCharacter.name
	pPower.textContent = newCharacter.powers

	pName.addEventListener("mouseover", (e) => {
		e.target.style.color = "#e23636"
	})
	pName.addEventListener("mouseleave", (e) => {
		e.target.style.color = "grey"
	})

	pPower.addEventListener("mouseover", (e) => {
		e.target.style.color = "#e23636"
	})
	pPower.addEventListener("mouseleave", (e) => {
		e.target.style.color = "grey"
	})

	divAdd.append(img, pName, pPower)
}

// //Event Handling (Carla)
const handleCharacter = (e) => {
	e.preventDefault()
	const name = e.target["character-name"].value
	const image = e.target["char-img"].value
	const powers = e.target["char-power"].value

		const newCharacter = {
			name: name,
			image: image,
			powers: powers,
		}
	console.log(newCharacter)
	renderNewCharacter(newCharacter)
}

// fetchFirst()

form.addEventListener("submit", handleCharacter)
btn.addEventListener("mouseover", (e) => {
	e.target.style.color = "#e23636"
})
btn.addEventListener("mouseleave", (e) => {
	e.target.style.color = "black"
})

const toggleSwitch = document.querySelector('#mode-toggle');

function toggleTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }
}

toggleSwitch.addEventListener('change', toggleTheme);

