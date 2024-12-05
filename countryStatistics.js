
async function countryClick() {
	const url = 'https://forverkliga.se/JavaScript/api/simple.php?world'
	const response = await fetch(url)
	const data = await response.json()

	console.log('Data från API', data)
	printCountryNames(data)
	findFirstAfricanCountry(data)
	womenInAustralia(data)
	makePopulationList(data)
	populationInEurope(data)
}

function printCountryNames(countries) {
	console.log('Här kommer alla länder:')
	countries.forEach(country => {
		console.log('-- ' + country.name)
	})
	console.log(' ')
}

function findFirstAfricanCountry(countries) {
	function isAfrican(country) {
		return country.continent === 'Africa'
	}

	// const found = countries.find(country => country.continent === 'Africa')
	const found = countries.find(isAfrican)
	if( found ) {
		printCountryData('Första afrikanska landet är: ' + found.name)
	} else {
		printCountryData('Det finns inga afrikanska länder!')
	}
}

function womenInAustralia(countries) {
	// hitta objektet för Australien
	// se om vi kan få ut antal kvinnor ur det
	const australia = countries.find(country => country.name === 'Australia')
	if( australia ) {
		let women = australia.population * australia.pFemale
		women = Math.round(women)
		printCountryData(`Det finns ${women} kvinnor i Australien.`)
	} else {
		printCountryData('Vi kunde inte hitta Australien')
	}
}

function makePopulationList(countries) {
	// Vi har: [ {continent, name, pFemale, population} ]
	// Vi behöver: [ {name, men, women} ]
	function makeObject(country) {
		let women = Math.round(country.population * country.pFemale)
		let men = country.population - women
		return { name: country.name, men: men, women: women }
	}
	const newList = countries.map(makeObject)
	console.log('Lista med könsfördelning:', newList)
}

function populationInEurope(countries) {
	const europeCountries = countries.filter(country => country.continent === 'Europe')
	// Två möjligheter: forEach + variabel eller reduce
	let total = 0
	europeCountries.forEach(country => {
		total += country.population
	})
	printCountryData(`Det bor sammanlagt ${total} personer i Europa.`)
}

function printCountryData(message) {
	const countryData = document.querySelector('#country-data')
	const span = document.createElement('span')
	const br = document.createElement('br')
	span.innerText = message
	countryData.append(span, br)

	console.log(message)
}

export { countryClick }
