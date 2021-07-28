import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class FxOrderRatesService {
  //access_key = 'b448b99a5cd5fda37967a50965d3a839';
  api_key = 'e6d65d678107395eefb3e90124160953';
  result: any;
  constructor(private http: HttpClient) {}

  getAvailableCurrencies() {
    return this.http.get(
      'http://data.fixer.io/api/symbols?access_key=' + this.api_key
    );
  }

  getLatestfxOrderRates() {
    return this.http.get(
      'http://data.fixer.io/api/latest&base=EUR&symbols=BTC,CAD,EGP,EUR,GBP,HKD,INR,JPY,LBP,SAR,SGD,USD?access_key=' +
        this.api_key
    );
  }

  getHistoricalRates() {
    return this.http.get(
      'http://data.fixer.io/api/2015-12-24&base=EUR&symbols=BTC,CAD,GBPBTC,CAD,EGP,EUR,GBP,HKD,INR,JPY,LBP,SAR,SGD,USD?access_key=' +
        this.api_key
    );
  }

  getCryptoPrices() {
    return this.http
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,MATIC,ETC,THETA,ICP,VETLUNA,GRT,HOT,TEL,RUNE&tsyms=EUR'
      )
      .map((result) => (this.result = result));
  }

  // getDailyPairOHLCV() {
  //   return this.http
  //     .get(
  //       'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=3&e=CCCAGG'
  //     )
  //     .map((result) => (this.result = result));
  // }
}
