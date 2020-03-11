import { Component, OnInit } from '@angular/core';
import { ChangeContentService } from '../services/change-content.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {
  constructor(private changeContentService: ChangeContentService) { }

  ngOnInit() {
    this.changeContentService.emitChangeHeaderContentEditEmitter.emit('Add Player');
    this.changeContentService.emitChangeFooterContentEditEmitter.emit('Create-Player');
    // this.changeContentService.emitChangeMainContentEditEmitter.emit('Create-Player');
  }

}
