import uuid from 'uuid/v4'

export type NodeFields = {
	title: string,
  x: number,
  y: number
}

export default class Node {
	id: string
	title: string
  content: string
  x: number
  y: number

	// @todo type NodeFields
	constructor(fields: NodeFields) {
    this.title = fields.title
    this.content = ''
    this.x = fields.x
    this.y = fields.y

    if (!this.id) {
      this.id = uuid()
    }
  }
}
