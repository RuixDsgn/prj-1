<<<<<<< HEAD
// ! KEYS [Carla's]
const privateKey = 4b7d303353fa7d18fbc2c276aa6e23662cbb78ee;
const publicKey = 524be211ad65a7723d3a8945e03103a6;
=======
// ! KEYS
const privateKey = '7acfe099ee38ee1ad75a40a67e5654e601d675f9'
const publicKey = 'ad1bc0094dd363602c1e1403b5f0f1ad'
const baseUrl = "http://gateway.marvel.com/v1/public/comics"
>>>>>>> ad97beb3b2ce0c9c1e9e0a788b10d0140cb0373a
console.log("hi")

const createHash = () => {
	const timeStamp = new Date().getTime()
	const hashStr = timeStamp + publicKey + privateKey
	const hash = CryptoJS.MD5(hashStr).toString()
	console.log({ timeStamp, hashStr, hash })
	return hash
}

const fetchFirst = () => {
	fetch(`${baseUrl}?apikey=${publicKey}&hash=${createHash()}`)
	// fetch(`${BASE_URL}?apikey=${publicKey}&hash=8d6a0a6c953a7e74f12632699935b25e`)
		.then((r) => r.json())
		.then(console.log)
}

// <!--Features-->
// <!--Displays characters alphabetically-->
// <!--As a [a user] i want [to search for characters by name], the search result will display an image and if clicked, information will be displayed-->

// <!--Enable users do a drag and drop to add a new photo-->
// <!--As a [a user] i want [to drag and drop a photo] to be able to[add a photo to the new character]-->

// <!--Will have a click event when the image of a character is clicked, which then displays their information [Event Listener]-->
// <!--As a [a user] i want [click on a characters image] to [return the characters info and data below]-->

// <!--Light/Dark Mode-->
// <!--As a [a user] i want [toggle between light and dark]-->

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



// <!--Stretch Deliverables-->
// <!--include a carousel of the []-->
// <!--As a [a user] i want -->

// <!--include a game where users can pick who they think would win in a skirmish-->
// <!--As a [a user] i want [click on a picture] to [select which character i think would win]-->


// <!--Have the ability to add someone to the characters list [POST Request]-->
// <!--As a [a user] i want [add information] to [create a new character]-->
