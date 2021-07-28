import { Component, OnInit } from '@angular/core';
import { FxOrderRatesService } from 'src/app/services/fx-order-rates.service';

@Component({
  selector: 'app-fx-order-rates',
  templateUrl: './fx-order-rates.component.html',
  styleUrls: ['./fx-order-rates.component.css'],
})
export class FxOrderRatesComponent implements OnInit {
  availableCurrencies!: Array<any>;
  fxOrderData!: Array<any>;
  historicalData!: Array<any>;
  baseCurrency: any;
  dateValueLatest: any;
  dateValueHistorical: any;
  constructor(private fxOrderRatesService: FxOrderRatesService) {}

  ngOnInit(): void {
    this.availableCurrency();
    this.latestCurrency();
    this.historicalRates();
  }

  availableCurrency() {
    this.fxOrderRatesService.getAvailableCurrencies().subscribe((data) => {
      this.availableCurrencies = Object.values(data);
      this.availableCurrencies = this.availableCurrencies[1];

      //console.log(this.availableCurrencies);
    });
  }

  latestCurrency() {
    this.fxOrderRatesService.getLatestfxOrderRates().subscribe((data) => {
      //console.log(data);
      this.fxOrderData = Object.values(data);
      this.baseCurrency = this.fxOrderData[2];
      this.dateValueLatest = this.fxOrderData[3];
      //console.log(this.fxOrderData);
      this.fxOrderData = this.fxOrderData[4];
      // console.log(this.fxOrderRatesService);
    });
  }

  historicalRates() {
    this.fxOrderRatesService.getHistoricalRates().subscribe((data) => {
      //console.log(data);
      this.historicalData = Object.values(data);
      this.baseCurrency = this.historicalData[3];
      this.dateValueHistorical = this.historicalData[4];
      //console.log(this.historicalData);
      this.historicalData = this.historicalData[5];
    });
  }
}
