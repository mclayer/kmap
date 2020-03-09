import { Node, Link, LinkType } from './Kmap'
import { Base as Event} from './UIEvents'

export default class UI {
	listener?: Function

	setListener(callback: Function) {

	}
	private emit() {
		this.listener()
	}
}