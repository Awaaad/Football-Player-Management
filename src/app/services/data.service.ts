import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private players: any[];
  public positions: any[];

  constructor() {
    this.players = [
      {id: 1, name: 'Awad', age: 23, position: 'Forward', dob: '2020-03-04', gender: 'Male'},
      {id: 2, name: 'Feysal', age: 30, position: 'GoalKeeper', dob: '2020-03-04', gender: 'Male'},
      {id: 3, name: 'Tashley', age: 24, position: 'Defender', dob: '2020-03-04', gender: 'Male'},
      {id: 4, name: 'Irshad', age: 29, position: 'Defender', dob: '2020-03-04', gender: 'Male'},
      {id: 5, name: 'Pol', age: 29, position: 'Midfielder', dob: '2020-03-04', gender: 'Male'},
      {id: 6, name: 'Ganesh', age: 23, position: 'Defender', dob: '2020-03-04', gender: 'Male'}
    ];
    this.positions = [
      'Forward',
      'Midfielder',
      'Defender',
      'GoalKeeper'
    ];
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  getAllPlayers() {
    return this.players;
  }
}
