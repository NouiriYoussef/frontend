import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {Event} from '../classes/event';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  events: Event[];
  event: Event ;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = new Event();
    if (localStorage.length === 0) {
    window.location.replace('');
    }
  }
  save(): void {
    this.eventService.create(this.event as Event).subscribe(event => {this.events.push(this.event); });
    window.location.replace('aj');  }

}
