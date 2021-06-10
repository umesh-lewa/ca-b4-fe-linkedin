import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.scss']
})
export class SuggestionCardComponent implements OnInit {

  @Input() suggestion;
  constructor() { }

  ngOnInit(): void {    
  }

}
