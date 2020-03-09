import { Node, Link, LinkType } from './Kmap'

export default class UI {
	listener?: Function

	setListener(callback: Function) {

	}
	private emit() {
		this.listener()
	}
}