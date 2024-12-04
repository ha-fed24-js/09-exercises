
async function countryClick() {
	const url = 'https://forverkliga.se/JavaScript/api/simple.php?world'
	const response = await fetch(url)
	const data = await response.json()

	console.log('Data från API', data)
	printCountryNames(data)
}

function printCountryNames(countries) {
	console.log('Här kommer alla länder:')
	countries.forEach(country => {
		console.log('-- ' + country.name)
	})
	console.log(' ')
}

export { countryClick }
