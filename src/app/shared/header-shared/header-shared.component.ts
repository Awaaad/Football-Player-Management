import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeContentService } from 'src/app/services/change-content.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-shared',
  templateUrl: './header-shared.component.html',
  styleUrls: ['./header-shared.component.scss']
})
export class HeaderSharedComponent implements OnInit, OnDestroy {
  edit: boolean;
  showContent: string;
  playerId: any = this.route.snapshot.paramMap.get('id');
  players: any[];
  player: any[];
  playerName: string;

  public pageSubtitle: string;
  private changeHeaderContentSubscription: Subscription;

  constructor(
    private changeContentService: ChangeContentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.changeHeaderContentSubscription = this.changeContentService.emitChangeHeaderContentEditEmitter.subscribe(data => {
      this.pageSubtitle = data;
    });

    if (this.playerId > 0) {
      this.edit = true;
      // console.log(this.edit)
      this.players = JSON.parse(localStorage.getItem('players'));
      this.player = this.players.filter(data => data.id == this.playerId);
      this.playerName = this.player[0].name;
    } else {
      this.edit = false;
    }

  }

  ngOnDestroy(): void {
    this.changeHeaderContentSubscription.unsubscribe();
  }
}
