import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ChangeContentService } from 'src/app/services/change-content.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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
  }

  routeTo(playerId: number) {
    this.router.navigate(['/update-player', playerId]);
  }
}
