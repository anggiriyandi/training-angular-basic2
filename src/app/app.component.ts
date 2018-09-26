import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'test srver', content: 'just content'}];

  onAddServer(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onAddBlueprint(bluePringData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePringData.name,
      content: bluePringData.content
    });
  }

}
