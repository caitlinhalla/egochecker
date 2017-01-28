import { Injectable } from '@angular/core';
import { Quote } from './quote.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class QuoteService {
  quotes: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.quotes = angularFire.database.list('quotes');
   }

   getQuotes(){
     return this.quotes;
   }

   getQuoteById(quoteId: number){
    return this.angularFire.database.object('quotes/' + quoteId);
   }
}
