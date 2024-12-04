import { fortuneClick } from "./fortune.js"
import { countryClick } from "./countryStatistics.js"

const fortuneButton = document.querySelector('#fortune-button')
const countryButton = document.querySelector('#get-countries')

fortuneButton.addEventListener('click', fortuneClick)
countryButton.addEventListener('click', countryClick)
