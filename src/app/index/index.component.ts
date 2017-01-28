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
  quoteToDisplay;
  randomNumber = Math.floor(Math.random() * ((35 - 1) + 1)) + 1;


  constructor(private quoteService: QuoteService) { }

  egoCheck(){
    this.hideIntro = false;
    this.getQuote = true;
  }

  ngOnInit() {
    this.quotes = this.quoteService.getQuotes();
    this.quoteToDisplay = this.quoteService.getQuoteById(this.randomNumber);
  }

}
