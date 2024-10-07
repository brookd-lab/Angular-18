import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  routevalue: any;
  submenu: any;

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.routevalue = this.route.snapshot.paramMap.get('id');
    this.submenu = this.route.snapshot.paramMap.get('submenu');
    console.log(this.routevalue);
    console.log(this.submenu);
  }

}
