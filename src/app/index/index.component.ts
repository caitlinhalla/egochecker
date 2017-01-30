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
  quoteToDisplay;

  constructor(private quoteService: QuoteService) { }

  egoCheck(){
    this.hideIntro = false;
  }

  randomNumber(){
    return Math.floor((Math.random() * 34));
  }

  newQuote(){
    var number = this.randomNumber();
    this.quoteToDisplay = this.quoteService.getQuoteById(number);
  }

  ngOnInit() {
    this.quotes = this.quoteService.getQuotes();
    this.quoteToDisplay = this.quoteService.getQuoteById(this.randomNumber());
    }

}
