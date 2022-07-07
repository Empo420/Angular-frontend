import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  condicion: boolean = true;

  lenguajes: Array<any> = [
    { lenguaje: 'CSS', complejidad: 'Media', tipo:'Frontend', fundacion: '2003'},
    { lenguaje: 'HTML', complejidad: 'Media', tipo:'Frontend', fundacion: '2001'},
    { lenguaje: 'JS', complejidad: 'Media', tipo:'Frontend', fundacion: '2004'},
    { lenguaje: 'PHP', complejidad: 'Compleja', tipo:'Backend', fundacion: '2002'},
    { lenguaje: 'JAVA', complejidad: 'Compleja', tipo:'Backend', fundacion: '2000'},
    { lenguaje: 'C#', complejidad: 'Compleja', tipo:'Backend', fundacion: '2003'},
    { lenguaje: 'PYTHON', complejidad: 'Mucha', tipo:'Backend', fundacion: '2000'},
    { lenguaje: 'TS', complejidad: 'Compleja', tipo:'Frontend', fundacion: '2003'},
    { lenguaje: 'ANGULAR', complejidad: 'Compleja', tipo:'Frontend', fundacion: '2003'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
