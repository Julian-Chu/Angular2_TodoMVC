import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  todos: any[] = [];

  @Output()
  clearCompleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ClearCompleted():void
  {
    this.clearCompleted.emit();
  }

}
