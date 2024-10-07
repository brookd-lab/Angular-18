import { Component, DoCheck } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule, MatToolbarModule, CommonModule],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements DoCheck {
  showmenu=true;
  constructor(private router:Router) {

  }
  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl==='/login' || currenturl==='/register') {
      this.showmenu = false;
    } else {
      this.showmenu=true;
    }
  }
}
