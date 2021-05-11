import { Component, OnInit, OnDestroy } from '@angular/core';
import { PanelService } from '../panel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit, OnDestroy {
  people: any[] = [];

  private peopleSub: Subscription;

  constructor(public panelsService: PanelService) {}

  ngOnInit() {
    this.panelsService.getPeople();
    this.peopleSub = this.panelsService
      .getPeopleUpdateListener()
      .subscribe((people: any) => {
        this.people = people;
        console.log(this.people);
      });
  }

  ngOnDestroy() {
    this.peopleSub.unsubscribe();
  }
}
