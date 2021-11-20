import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {

  activities = [
    {
      title: "Today",
      transaction : [
        {
          type: "debit",
          destinataire: "Martin Mitchel",
          status: "sent",
          value: -3004.52,
          currency: "usd"
        },
        {
          type: "debit",
          destinataire: "Jane Klamberberg",
          status: "sent",
          value: -1023.19,
          currency: "usd"
        },
        {
          type: "conversion",
          origin: "eur",
          destination: "usd",
          status: "conversion",
          value: 1456.00,
          currency: "usd"
        },
      ],
    },
    {
    title: "Yesterday",
      transaction : [
        {
          type: "payement",
          destinataire: "Starbucks",
          status: "sent",
          value: -5.99,
          currency: "usd"
        },
        {
          type: "deposit",
          destinataire: "",
          status: "opened",
          value: 4000,
          currency: "usd"
        }
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
