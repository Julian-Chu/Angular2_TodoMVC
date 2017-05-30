import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  InActive = false;
  InCompleted = false;
  @Input() todos: any[] = [];
  @Output() clearCompleted = new EventEmitter();
  @Output() filterTodos = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  ClearCompleted(): void {
    this.clearCompleted.emit();
  }

  FilterTodos(sortBy: string): void {
    this.InActive = false;
    this.InCompleted = false;
    switch (sortBy) {
      case 'Active': this.InActive = true;
        break;
      case 'Completed': this.InCompleted = true;
        break;
      default:
        break;
    }
    this.filterTodos.emit(sortBy);
  }

}
