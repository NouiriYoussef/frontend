import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AffichageComponent } from './affichage/affichage.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: '', component: ConnexionComponent},
  {path: 'aj', component: AjoutComponent },
  {path: 'aff', component: AffichageComponent},
  {path: 'up', component: UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
