import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.scss']
})
export class LimitComponent implements OnInit {

  creditLimit = {
    limit: 2000,
    currency: "usd",
    value: 1500
  }

  onlineLimit = {
    limit: 1500,
    currency: "usd",
    value: 1324
}
  constructor() { }

  ngOnInit(): void {
  }

}
