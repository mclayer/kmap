import { Node, Link, LinkType } from './Kmap'
import * as GuiEvents from './GuiEvents'

export default class Gui {
	listener?: Function

	constructor() {
		document.addEventListener('DOMContentLoaded', this.init)
	}

	setListener(callback: Function) {

	}

	handleAppEvent() {

	}

	private createNode() {
		const name = prompt()
		if (name === null) {
			return
		}
		this.emit(new GuiEvents.CreateNode(name))
	}

	private init() {
		document.body.onkeydown = (event) => {
			if (event.code === 'KeyN' && event.altKey) {
				this.createNode()
			}
		}
	}

	private emit(event: GuiEvents.GuiEvent) {
		this.listener(event)
	}
}