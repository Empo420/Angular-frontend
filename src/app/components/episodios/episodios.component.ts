import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../../services/episodios.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  episodios: any = {};

  constructor(private service: EpisodiosService) { }

  ngOnInit(): void {
    this.service.getAllEpisodios().subscribe(episodios => {
      this.episodios = episodios.results;
    });
    console.log(this.episodios);
  }
}
