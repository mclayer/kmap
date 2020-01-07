import { Component, OnInit } from '@angular/core';
import Node from '../node/node'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.svg',
  styleUrls: ['./map.component.styl']
})
export class MapComponent implements OnInit {

  nodes: Node[]

  constructor() {
    this.nodes = [
      new Node({ title: 'Vegetables', x: 1, y: 0 }),
      new Node({ title: 'Cheese', x: 2, y: 60 }),
      new Node({ title: 'Whatever else humans are supposed to eat', x:3, y: 120 })
    ]
  }

  ngOnInit() {}

  onKey(event: KeyboardEvent) {
    console.log(event)
  }
}
