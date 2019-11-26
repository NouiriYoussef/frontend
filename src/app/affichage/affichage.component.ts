import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {Event} from '../classes/event';
@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
events: Event[];
event: Event ;
public search: any = '';
p: number = 1;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }
getEvents() {
   this.eventService.getEvents().subscribe(events => this.events = events);

}
delete(event: Event): void {
  if (confirm('êtes vous sûre de vouloir supprimer?')) {
  this.eventService.delete(event).subscribe();
  window.location.replace('aj');
  }
}
  update(event: Event): void {

localStorage.setItem('choix', event.id.toString());
window.location.replace('up');

}
deco() {
localStorage.clear();
localStorage.setItem('etat', null);
window.location.replace('');

}
}
