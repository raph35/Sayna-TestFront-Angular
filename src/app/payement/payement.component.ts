import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {

  data = {
    awaiting: 8,
    in_progress: 5,
    completed: 12,
    canceled: 4
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
