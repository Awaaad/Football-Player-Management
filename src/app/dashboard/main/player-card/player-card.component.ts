import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ChangeContentService } from 'src/app/services/change-content.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  players: any[];
  name: string;
  age: number;
  position: string;
  edit: boolean;
  player: any[];
  playerName: string;

  constructor(
    private router: Router,
    private dataService: DataService,
    private changeContentService: ChangeContentService
  ) { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('players'));
    this.players.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  routeTo(playerId: number) {
    this.router.navigate(['/update-player', playerId]);
  }

}
