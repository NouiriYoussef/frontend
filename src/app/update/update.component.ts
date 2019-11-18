import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {Event} from '../classes/event';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  events: Event[];
  event: Event ;
  id: number;
  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.event = new Event();
    // tslint:disable-next-line: radix
    this.id = parseInt( localStorage.getItem('choix'));
    this.getEvent();
    this.event.id = this.id;
    console.log(this.event.id);
  }
  getEvent() {
    this.eventService.getEvent(this.id).subscribe(event => this.event = event);
 }
 save(): void {
  this.eventService.create(this.event as Event).subscribe(event => {this.events.push(this.event); });
  window.location.replace('aj');  }
}
