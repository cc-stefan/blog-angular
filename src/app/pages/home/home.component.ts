import {Component, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../../models/article";
import {DOCUMENT} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private getArticlesSubscription: Subscription = new Subscription();
  private addArticleSubscription: Subscription = new Subscription();
  private updateArticleSubscription: Subscription = new Subscription();
  private deleteArticleSubscription: Subscription = new Subscription();
  articles: Article[] = [];
  page: number = 1;
  pageSize: number = 3;
  totalArticles: number = 0;
  showModal: boolean = false;
  tempArticle: Article = {
    id: 0,
    title: '',
    tag: '',
    author: '',
    date: '',
    saying: '',
    content: '',
    imgUrl: '',
  };

  constructor(private articleService: ArticleService, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.getArticlesSubscription = this.articleService.getArticles().subscribe((data: Article[]): void => {
      let sortedArticles: Article[] = data.sort((a: Article, b: Article) => b.id - a.id);
      let slicedSortedArticles: Article[] = sortedArticles
        .slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
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

  openModal(): void {
    this.showModal = true;
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  closeModal(): void {
    this.showModal = false;
    this.renderer.setStyle(this.document.body, 'overflow', 'auto');
    this.tempArticle = {
      id: 0,
      title: '',
      tag: '',
      author: '',
      date: '',
      saying: '',
      content: '',
      imgUrl: '',
    };
  }

  openEditArticleModal(article: Article): void {
    this.tempArticle = {...article};
    this.openModal();
  }

  onAddArticle(article: Article): void {
    this.addArticleSubscription = this.articleService.addArticle(article).subscribe((): void => {
      this.loadArticles();
      this.closeModal();
    });
  }

  onUpdateArticle(article: Article): void {
    this.updateArticleSubscription = this.articleService.updateArticle(article).subscribe((): void => {
      this.loadArticles();
      this.closeModal();
    });
  }

  onDeleteArticle(id: number): void {
    this.deleteArticleSubscription = this.articleService.deleteArticle(id).subscribe((): void => {
      this.loadArticles();
    });
  }

  ngOnDestroy(): void {
    if (this.getArticlesSubscription) {
      this.getArticlesSubscription.unsubscribe();
    }

    if (this.addArticleSubscription) {
      this.addArticleSubscription.unsubscribe();
    }

    if (this.updateArticleSubscription) {
      this.updateArticleSubscription.unsubscribe();
    }

    if (this.deleteArticleSubscription) {
      this.deleteArticleSubscription.unsubscribe();
    }
  }
}
