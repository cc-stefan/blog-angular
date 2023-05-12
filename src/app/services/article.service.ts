import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Article} from "../../models/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.http.get('http://localhost:3000/articles') as Observable<Article[]>
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post('http://localhost:3000/articles', article) as Observable<Article>
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put(`http://localhost:3000/articles/${article.id}`, article) as Observable<Article>
  }

  deleteArticle(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:3000/articles/${id}`) as Observable<{}>
  }
}
