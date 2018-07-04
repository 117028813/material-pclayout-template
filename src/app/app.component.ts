import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  versions = [5.25, 6.32]
  currentVersion: number = this.versions[this.versions.length - 1]

  changeVersion(version: number) {
    this.currentVersion = version
  }
}
