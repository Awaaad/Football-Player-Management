import { Player } from '../models/models';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Util {
  players: any[];
  constructor(
  ) {
    this.players = JSON.parse(localStorage.getItem('players'));
  }
  public addPlayer(player: Player): void {
    this.players.push(player);
    localStorage.removeItem('players');
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  public deletePlayer(playerId): void {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id == playerId) {
        console.log(this.players[i].id)
        this.players.splice(i, 1);
        localStorage.removeItem('players');
        localStorage.setItem('players', JSON.stringify(this.players));
      }
    }
  }

  public modifyPlayer(playerId, player: Player): void {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id == playerId) {
        console.log(this.players[i].id);
        this.players.splice(i, 1);
        this.players.push(player);
        localStorage.removeItem('players');
        localStorage.setItem('players', JSON.stringify(this.players));
      }
    }
  }
}
