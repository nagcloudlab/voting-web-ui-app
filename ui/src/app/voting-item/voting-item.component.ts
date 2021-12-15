import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-item',
  templateUrl: './voting-item.component.html',
  styleUrls: ['./voting-item.component.scss']
})
export class VotingItemComponent implements OnInit {

  voteCount = 0;

  handleVote(v: number) {
    this.voteCount += v
  }

  constructor() { }

  ngOnInit(): void {
  }

}
