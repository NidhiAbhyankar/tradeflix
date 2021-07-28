import { Component, OnInit } from '@angular/core';

import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  newsData!: Array<any>;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNewsData().subscribe((data) => {
      this.newsData = Object.values(data);
      this.newsData = this.newsData[2];

      // console.log(this.newsData);
    });
  }
}
