import { Data } from '@angular/router';

export class Util {
  players: any[];
  constructor(
    private data: Data,
  ) {
    this.players = JSON.parse(localStorage.getItem('players'));
  }
  public static deletePlayer() {

  }
}
