import { Component } from '@angular/core';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent {
tabPersonnages=[
  {nom:'laugh', Image:'assets/images/emoji1.png',nb:44,majeur:true},
  {nom:'lovely', Image:'assets/images/emoji2.png',nb:16,majeur:true},
  {nom:'blink', Image:'assets/images/emoji1.png',nb:12,majeur:false},];
  nombreMajeurs() {
    let nombreMajeurs = 0;
    for (let personne of this.tabPersonnages) {
      if (personne.majeur) {
        nombreMajeurs++;
      }
    }
    return nombreMajeurs;
  }
}
