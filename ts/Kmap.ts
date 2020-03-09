import UI from './UI'

export type Node = {
	id?: number
	name?: string
	content?: string
}
export type Link = {
	id?: number
	typeId?: number
	fromNodeId?: number
	toNodeUd?: number
}
export type LinkType = {
	id?: number
	name: string
}

export default class Kmap {
	private nodes: Map<number, Node> = new Map()
	private links: Map<number, Link> = new Map()
	private linksType: Map<number, LinkType> = new Map()

	constructor(private storage: Storage, private ui: UI) {
		ui.setListener(this.handleUiEvent)
	}

	handleUiEvent() {

	}

	addNode(node: Node) {

	}
}