export interface GuiEvent {
}

export class CreateNode implements GuiEvent {
	constructor(readonly name: string) {}
}