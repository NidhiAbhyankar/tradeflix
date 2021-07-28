import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-charts',
  template: `<ejs-chart
    id="chart-container"
    [primaryXAxis]="primaryXAxis"
    [primaryYAxis]="primaryYAxis"
    [legendSettings]="legendSettings"
    [title]="title"
  >
    <e-series-collection>
      <e-series
        [dataSource]="chartData"
        type="Line"
        xName="month"
        yName="sales"
        name="Sales"
      ></e-series>
    </e-series-collection>
  </ejs-chart>`, //'./charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  public primaryXAxis: Object;
  public chartData: Object[];
  public primaryYAxis: Object;
  public legendSettings!: Object;
  public title!: string;
  constructor() {
    this.legendSettings = {
      visible: true,
    };
    this.chartData = [
      { month: 'Jan', sales: 35 },
      { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 },
      { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 },
      { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 },
      { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 },
      { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 },
      { month: 'Dec', sales: 32 },
    ];
    this.primaryXAxis = {
      valueType: 'Category',
    };
    this.primaryYAxis = {
      labelFormat: '${value}K',
    };
    this.title = 'Sales Analysis';
  }

  ngOnInit(): void {}
}
