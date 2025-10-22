import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'site-web-miss-julie',
  templateUrl: 'site-web-miss-julie.component.html',
  styleUrls: ['site-web-miss-julie.component.css'],
})
export class SiteWebMissJulie {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
