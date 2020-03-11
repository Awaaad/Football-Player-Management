import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { ChangeContentService } from 'src/app/services/change-content.service';
import { Util } from '../utils/util';
import { Player } from '../models/models';

@Component({
  selector: 'app-main-shared',
  templateUrl: './main-shared.component.html',
  styleUrls: ['./main-shared.component.scss']
})
export class MainSharedComponent implements OnInit, OnDestroy {
  playerId: any = this.route.snapshot.paramMap.get('id');
  positions: any[];
  formPlayer: FormGroup;
  players: any[];
  incrementId = 6;
  success: boolean;
  unsuccess: boolean;
  edit: boolean;
  deleted: boolean;
  player: any[];
  dob: any;
  position: string;
  playerName: string;

  private submitAddFormSubscription: Subscription;
  private submitModifyFormSubscription: Subscription;
  submitAddForm: boolean;
  submitModifyForm: boolean;

  constructor(
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private changeContentService: ChangeContentService,
    private util: Util
  ) { }

  ngOnInit() {
    this.submitAddFormSubscription = this.changeContentService.emitSubmitAddEventEmitter.subscribe(data => {
      this.submitAddForm = data;
      console.log('submit', this.submitAddForm);
      // tslint:disable-next-line: triple-equals
      if (this.submitAddForm == true) {
        this.addNewPlayerDetails();
      }
    });
    this.submitModifyFormSubscription = this.changeContentService.emitSubmitModifyEventEmitter.subscribe(data => {
      this.submitModifyForm = data;
      console.log('submit', this.submitModifyForm);
      // tslint:disable-next-line: triple-equals
      if (this.submitModifyForm == true) {
        this.modifyPlayer(this.playerId);
      }
    });

    this.success = true;
    this.unsuccess = true;
    this.deleted = true;
    this.players = JSON.parse(localStorage.getItem('players'));
    this.positions = this.dataService.positions;


    if (this.playerId > 0) {
      this.edit = true;
      // tslint:disable-next-line: triple-equals
      this.player = this.players.filter(data => data.id == this.playerId);
      this.dob = new Date(this.player[0].dob);
      this.position = this.player[0].position;
      this.playerName = this.player[0].name;

      this.formPlayer = this.formBuilder.group({
        name: [this.player[0].name, [Validators.required, Validators.maxLength(75)]],
        age: [this.player[0].age,
            [Validators.required, Validators.maxLength(3),
            Validators.pattern('^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|40)$')]],
        dob: [this.player[0].dob, Validators.required],
        gender: [this.player[0].gender, Validators.required],
        position: [this.player[0].position, Validators.required],
      });
    } else {
      this.edit = false;

      this.formPlayer = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(75)]],
        age: ['', [Validators.required, Validators.maxLength(3), Validators.pattern('^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|40)$')]],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        position: ['', Validators.required]
      });
    }
  }

  public addNewPlayerDetails(): void {
    if (this.formPlayer.invalid) {
      this.unsuccess = false;
      setTimeout(() => {
        this.unsuccess = true;
      }, 2000);
      return;
    } else {
      this.success = false;
      const player = {
        id: this.incrementId + 1,
        name: this.formPlayer.get('name').value,
        age: this.formPlayer.get('age').value,
        dob: this.formPlayer.get('dob').value,
        gender: this.formPlayer.get('gender').value,
        position: this.formPlayer.get('position').value
      };
      this.util.addPlayer(player);

      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    }
  }

  public deletePlayer(playerId): void {
    alert('Are you sure you want to proceed?');
    this.deleted = false;
    this.util.deletePlayer(playerId);
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);
  }

  public modifyPlayer(playerId): void {
    if (this.formPlayer.invalid) {
      this.unsuccess = false;
      setTimeout(() => {
        this.unsuccess = true;
      }, 2000);
      return;
    } else {
      this.success = false;
      const player = {
        id: this.playerId,
        name: this.formPlayer.get('name').value,
        age: this.formPlayer.get('age').value,
        dob: this.formPlayer.get('dob').value,
        gender: this.formPlayer.get('gender').value,
        position: this.formPlayer.get('position').value
      };
      this.util.modifyPlayer(playerId, player);
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    }
  }

  ngOnDestroy() {
    this.submitAddFormSubscription.unsubscribe();
    this.submitModifyFormSubscription.unsubscribe();
  }

}
