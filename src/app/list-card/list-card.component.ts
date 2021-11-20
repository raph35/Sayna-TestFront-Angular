import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  cards = [
    {
      money: 1242.42,
      currency: "usd",
      id_card: "5495 7381 3759 2321",
      expiration_date: "04 / 24",
      type: "master-card",
      locked: false
    },
    {
      money: 249.00,
      currency: "eur",
      id_card: "4535 8933 1673 6770",
      expiration_date: "05 / 25",
      type: "visa",
      locked: false
    },
    {
      money: 249.00,
      currency: "eur",
      id_card: "5363 7205 7398 4138",
      expiration_date: "01 / 25",
      type: "master-card",
      locked: true
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
