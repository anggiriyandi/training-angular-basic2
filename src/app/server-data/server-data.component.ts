import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-data',
  templateUrl: './server-data.component.html',
  styleUrls: ['./server-data.component.css']
})
export class ServerDataComponent implements OnInit {

  @Input() element: [{name: string, content: string}];

  constructor() { }

  ngOnInit() {
  }

}
