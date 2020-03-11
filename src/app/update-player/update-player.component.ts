import { Component, OnInit } from '@angular/core';
import { ChangeContentService } from '../services/change-content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {
  players: any[];
  player: any[];
  playerName: string;
  playerId: any = this.route.snapshot.paramMap.get('id');

  constructor(
    private changeContentService: ChangeContentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('players'));
    this.player = this.players.filter(data => data.id == this.playerId);
    this.playerName = this.player[0].name;

    this.changeContentService.emitChangeHeaderContentEditEmitter.emit('Modify Player: ' + this.playerName);
    this.changeContentService.emitChangeFooterContentEditEmitter.emit('Update-Player');
  }

}
