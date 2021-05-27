import { Component, OnInit } from '@angular/core';
import { HomeComponent} from '../home/home.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }



  

}
