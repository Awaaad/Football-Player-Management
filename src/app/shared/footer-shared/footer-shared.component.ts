import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ChangeContentService } from 'src/app/services/change-content.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-footer-shared',
  templateUrl: './footer-shared.component.html',
  styleUrls: ['./footer-shared.component.scss']
})
export class FooterSharedComponent implements OnInit, OnDestroy {
  @Output() submitAddEvent = new EventEmitter();

  public footerButtonContent: string;
  private changeFooterContentSubscription: Subscription;

  dashboard: boolean;
  createPlayer: boolean;
  updatePlayer: boolean;

  constructor(
    private changeContentService: ChangeContentService
  ) { }

  ngOnInit() {
    this.changeFooterContentSubscription = this.changeContentService.emitChangeFooterContentEditEmitter.subscribe(data => {
      this.footerButtonContent = data;
      if (this.footerButtonContent == 'Create-Player') {
        this.dashboard = false;
        this.createPlayer = true;
        this.updatePlayer = false;
      } else if (this.footerButtonContent == 'Update-Player') {
        this.dashboard = false;
        this.createPlayer = false;
        this.updatePlayer = true;
      } else {
        this.createPlayer = false;
        this.updatePlayer = false;
        this.dashboard = true;
      }
    });
  }

  addPlayer() {
    this.changeContentService.emitSubmitAddEventEmitter.emit(true);
  }

  modifyPlayer() {
    this.changeContentService.emitSubmitModifyEventEmitter.emit(true);
  }

  ngOnDestroy(): void {
    this.changeFooterContentSubscription.unsubscribe();
  }


}
