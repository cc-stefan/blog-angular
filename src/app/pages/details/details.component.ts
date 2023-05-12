import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article";
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  article: Article = {
    id: 0,
    title: '',
    tag: '',
    author: '',
    date: '',
    saying: '',
    content: '',
    imgUrl: '',
  };
  articlesCount: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
  }

  loadArticlesCount(): void {
    this.articleService.getArticles().subscribe((articles: Article[]): void => {
      this.articlesCount = articles.length;
    });
  }

  loadArticle(id: number): void {
    this.articleService.getArticle(id).subscribe((article: Article): void => {
      this.article = article;
    });
  }

  subscribeArticleId(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.loadArticle(id);
    });
  }

  onPreviousArticle(): void {
    if (this.article.id > 1) {
      this.router.navigate([`/articles/${this.article.id - 1}`])
        .catch(error => {
          console.error('Navigation to previous article failed:', error);
        });
    }
  }

  onNextArticle(): void {
    if (this.article.id < this.articlesCount) {
      this.router.navigate([`/articles/${this.article.id + 1}`])
        .catch(error => {
          console.error('Navigation to next article failed:', error);
        });
    }
  }

  ngOnInit(): void {
    this.loadArticlesCount();
    this.subscribeArticleId();
  }
}
