import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Admin} from '../classes/admin';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
admins: Admin[];
admin: Admin;
log: string;
mdp: string;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
 if (localStorage.getItem('etat') === 'accept') {
 window.location.replace('aj');
 }

 this.getAdmins();

  }
  getAdmins() {
    this.adminService.getAdmins().subscribe(admins => this.admins = admins);
    console.log(this.admins);
  }
  connect() {
for (const ad of this.admins) {
  if ((this.log === ad.login) && (this.mdp === ad.mdp)) {
  //  alert('ok');
  localStorage.setItem('etat', 'accepte');
  window.location.replace('aj');

  }
}

  }
}
