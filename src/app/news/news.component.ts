import { Component, OnInit } from '@angular/core';
import { NewsService } from './../services/news.service';
import { News } from '../interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:News[] = [];
  search:string;
  page:number = 1;

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    
  }

  doSearch() {
    if(this.search) {
      this.newsService.getNews(this.search, this.page)
      .then(response => {
        console.log('Noticias: ', response);
        this.news = response.articles;
      })
      .catch(err => {
        console.error('No se pudo traer las noticias');
      });
    }
  }

  goPrev() {
    this.page--;
    this.doSearch();
  }

  goNext() {
    this.page++;
    this.doSearch();
  }

}
