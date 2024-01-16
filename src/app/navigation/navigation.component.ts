import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {}

  public setTitle(newTitle: string) {
    
    this.titleService.setTitle(newTitle);
  }

  public downloadCv() {
    window.open('/assets/documents/2021.03.30_Lebenslauf.pdf');
  }
}
