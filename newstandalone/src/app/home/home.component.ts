import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../custom/reverse.pipe';
import { MasterService } from '../service/master.service';
import { Person } from '../model/masterModel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service: MasterService) {
    this.Getallpeople();
  }

  _persondata!: Person[]

  title = 'Angular 18 Tutorial';
  subtitle = 'Angular for beginners';
  todaysdate = new Date();
  salary = 1000233444;
  _obj = { "name": "NT" };

  isDisabled = true;
  _class = 'active';
  _color = 'blue';
  _font = '48px';

  isshow = false;

  ticketInfo = [
    { 'id': 1, 'name': 'angular', color: 'green' },
    { 'id': 2, 'name': 'react', color: 'red' },
    { 'id': 3, 'name': 'vue', color: 'blue' }
  ]

  _view = 'about';


  Changetitle() {
    this.title = "Angular 18 Full Tutorial";
  }

  updatetitle(event: any) {
    this.title = event.target.value;
  }

  Getallpeople() {
    return this.service.GetAllPeople().subscribe(item => {
      this._persondata = item;
      console.log(this._persondata);
    });
  }

}
