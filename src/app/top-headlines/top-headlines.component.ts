import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { News } from './../interfaces/news';
import { HeadlinesService } from './../services/headlines.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {

  modalRef: BsModalRef;
  headlines:Array<News>;
  country:string = 'us';
  currentNews:News;

  constructor(
    private headlinesService:HeadlinesService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch() {
    this.headlinesService.getNews(this.country)
    .then(response => {
      console.log('Noticias: ', response);
      this.headlines = response.articles;
    })
    .catch(err => {
      console.error('No se pudo traer las noticias');
    });
  }

  openModal(item:News, template: TemplateRef<any>) {
    this.currentNews = item;
    this.modalRef = this.modalService.show(template);
  }

}
