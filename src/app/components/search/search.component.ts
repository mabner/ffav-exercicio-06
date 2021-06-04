import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() filter = '';
  @Output() newFilterEvent = new EventEmitter<string>();

  onInputChange(name: string) {
    const handleString = name.charAt(0).toUpperCase() + name.substr(1);
    this.newFilterEvent.emit(handleString);
  }

  constructor() {}

  ngOnInit(): void {}
}
