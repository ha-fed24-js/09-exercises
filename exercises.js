const fortuneButton = document.querySelector('#fortune-button')
const fortuneCookie = document.querySelector('#fortune-cookie')

fortuneButton.addEventListener('click', async () => {
	const url = 'https://api.adviceslip.com/advice'

	try {
		const response = await fetch(url)
		console.log('Hur gick det? Status är: ', response.status)
		// Status===200 betyder 'OK'

		const data = await response.json()
		console.log('Data från API:', data)
		const advice = data.slip.advice
		const adviceId = data.slip.id
		// console.log(advice)
		fortuneCookie.innerText = advice

		addAdviceToList(adviceId, advice)

	} catch(error) {
		const message = 'Aj aj! Det gick inte att skicka request till API:et. Felet är: ' + error.message
		console.log(message)
		fortuneCookie.innerText = message
	}
})

function addAdviceToList(id, advice) {
	const fortuneList = document.querySelector('#fortune-list')
	const li = document.createElement('li')
	li.innerText = `[${id}] ${advice} `
	fortuneList.append(li)
}
