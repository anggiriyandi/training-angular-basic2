import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() bluePrintCreated = new EventEmitter<{name: string, content: string}>();

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
