import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
Author={"Firstname":'Abdessalem', "lastName":'Guesmi', "email":'guesmiabdessalem@yahoo.fr',
        "country":'Tunisia', "phoneNumber": '(+216) 53376894'};
        Data={};
  constructor() { }

  ngOnInit() {
  
  }

}
