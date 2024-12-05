
async function countryClick() {
	const url = 'https://forverkliga.se/JavaScript/api/simple.php?world'
	const response = await fetch(url)
	const data = await response.json()

	console.log('Data från API', data)
	printCountryNames(data)
	findFirstAfricanCountry(data)
	womenInAustralia(data)
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

function printCountryData(message) {
	const countryData = document.querySelector('#country-data')
	countryData.innerText = message
	console.log(message)
}

export { countryClick }
