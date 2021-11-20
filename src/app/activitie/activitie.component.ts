import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activitie',
  templateUrl: './activitie.component.html',
  styleUrls: ['./activitie.component.scss']
})
export class ActivitieComponent implements OnInit {

  @Input() activitie: any;
  constructor() { }

  ngOnInit(): void {
  }

}
