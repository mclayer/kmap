import { Component, OnInit, Input } from '@angular/core'
import Node from './node'

@Component({
  selector: 'g[node]',
  templateUrl: './node.component.svg',
  styleUrls: ['./node.component.styl']
})
export class NodeComponent implements OnInit {
  @Input() node: Node;

  constructor() { }
  ngOnInit() { }

  editTitle(node: Node) {
    console.log(node)
    node.title = prompt('', node.title)
    // let v = (<SVGElement>event.target).getElementsByTagName('text').item(0).textContent
    // console.log(v)

    // v = prompt('', v);

    // (<SVGElement>event.target ).getElementsByTagName('text').item(0).textContent = v
  }

}
