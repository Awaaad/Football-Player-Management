import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeContentService {
  @Output() public emitChangeHeaderContentEditEmitter = new EventEmitter<string>();
  @Output() public emitChangeFooterContentEditEmitter = new EventEmitter<string>();
  @Output() public emitChangeMainContentEditEmitter = new EventEmitter<string>();

  @Output() public emitSubmitAddEventEmitter = new EventEmitter<boolean>();
  @Output() public emitSubmitModifyEventEmitter = new EventEmitter<boolean>();

  constructor() { }

}
