import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FxOrderRatesService {
  //access_key = 'b448b99a5cd5fda37967a50965d3a839';
  api_key = 'e6d65d678107395eefb3e90124160953';
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

  // getConvertedRates() {
  //   return this.http.get(
  //     'https://api.currencylayer.com/list?access_key=' + this.api_key
  //   );
  // }

  // latestRates(base: string = 'USD'): Promise<any> {
  //   console.log(
  //     'http://api.currencylayer.com/live?access_key=' +
  //       this.access_key +
  //       '&currencies = USD,AUD,CAD,PLN,MXN &format = 1'
  //   );
  //   return this.http
  //     .get(
  //       'http://api.currencylayer.com/live?access_key=' +
  //         this.access_key +
  //         '&currencies = USD,AUD,CAD,PLN,MXN &format = 1'
  //     )
  //     .toPromise();
  // }
}
