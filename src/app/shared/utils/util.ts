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
    this.players.splice((playerId - 1), 1);
    localStorage.removeItem('players');
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  public modifyPlayer(playerId, player: Player): void {
    this.players.splice((playerId - 1), 1);
    this.players.push(player);
    localStorage.removeItem('players');
    localStorage.setItem('players', JSON.stringify(this.players));
  }
}
