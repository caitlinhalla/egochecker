import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [QuoteService]
})
export class IndexComponent implements OnInit {
  quotes: FirebaseListObservable<any[]>;
  hideIntro = true;
  getQuote = false;

  constructor(private quoteService: QuoteService) { }

  egoCheck(){
    this.hideIntro = false;
    this.getQuote = true;
  }

  newQuote(){

  }

  ngOnInit() {
  }

}
