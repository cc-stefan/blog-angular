import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../../models/article";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  page: number = 1;
  pageSize: number = 3;
  totalArticles: number = 0;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      let sortedArticles: Article[] = data.sort((a: Article, b: Article) => b.id - a.id);
      let slicedSortedArticles: Article[] = sortedArticles.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
      this.totalArticles = data.length;
      this.articles = slicedSortedArticles;
    });
  }

  nextPage(): void {
    if ((this.page * this.pageSize) < this.totalArticles) {
      this.page++;
      this.loadArticles();
    }
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadArticles();
    }
  }
}
