import Gui from './Gui'
import * as GuiEvents from './GuiEvents'
import { v5 as uuid } from 'uuid'

export type Node = {
	id?: number
	name?: string
	content?: string
}
export type Link = {
	id?: number
	typeId?: number
	fromNodeId?: number
	toNodeId?: number
}
export type LinkType = {
	id?: number
	name: string
}
const nodes = Symbol('nodes')
const links = Symbol('links')
const linkTypes = Symbol('linkTypes')
export default class Kmap {

	private uuidNamespaces = {
		[nodes]: '48ad072f-1f72-447d-aca0-dcb4490b6dab',
		[links]: '7f75565d-4218-4d5c-a074-3ef016e255d2',
		[linkTypes]: '7ff5dc48-e365-4b17-ade8-875f242bd842'
	}

	private [nodes]: Map<number, Node> = new Map()
	private [links]: Map<number, Link> = new Map()
	private [linkTypes]: Map<number, LinkType> = new Map()

	constructor(private storage: Storage, private gui: Gui) {
		gui.setListener(this.handleUiEvent)
	}

	handleUiEvent(event: GuiEvents.GuiEvent) {
		if (event instanceof GuiEvents.CreateNode) {
			event.name
		}
	}

	addNode(node: Node) {

	}

	private genUuid(type: Symbol) {

	}
}