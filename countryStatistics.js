
async function countryClick() {
	const url = 'https://forverkliga.se/JavaScript/api/simple.php?world'
	const response = await fetch(url)
	const data = await response.json()

	console.log('Data från API', data)
	printCountryNames(data)
	findFirstAfricanCountry(data)
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
		console.log('Första afrikanska landet är: ' + found.name)
	} else {
		console.log('Det finns inga afrikanska länder!')
	}
}

export { countryClick }
