import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeContentService } from '../services/change-content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private changeContentService: ChangeContentService) { }

  ngOnInit() {
    this.changeContentService.emitChangeHeaderContentEditEmitter.emit('Dashboard');
    this.changeContentService.emitChangeFooterContentEditEmitter.emit('Add Player');
    this.changeContentService.emitChangeMainContentEditEmitter.emit('Dashboard');
  }

}
