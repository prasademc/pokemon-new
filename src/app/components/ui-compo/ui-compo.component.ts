import { Component, OnInit } from '@angular/core';

import { NewApiService } from '../../services/new-api.service';
import { AllPokeman, Pokemon } from '../../models/pokeman';

@Component({
  selector: 'app-ui-compo',
  templateUrl: './ui-compo.component.html',
  styleUrls: ['./ui-compo.component.scss']
})
export class UiCompoComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private newApiService:NewApiService) { }

  ngOnInit(): void {
    this.newApiService.getDate().subscribe(data => {
      this.pokemons = data.pokemon;
    });
  }

}
