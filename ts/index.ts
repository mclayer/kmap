// import message from './message'

document.addEventListener('DOMContentLoaded', (event) => {
	init()
})

function init() {
	document.body.onkeydown = (event) => {
		if (event.code === 'KeyN' && event.altKey) {
			addNewNode()
		}
	}
}

function addNewNode() {
	console.log()
}
