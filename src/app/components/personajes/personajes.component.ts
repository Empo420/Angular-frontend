import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any = {};

  constructor(private service: PersonajesService) { }

  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe(personajes => {
      this.personajes = personajes.results;
    });
    console.log(this.personajes);
  }

}
