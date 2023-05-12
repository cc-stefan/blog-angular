import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {MenuComponent} from './components/menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {FooterComponent} from './components/footer/footer.component';
import {AddArticleButtonComponent} from './components/add-article-button/add-article-button.component';
import {ModalComponent} from './components/modal/modal.component';
import {ArticleComponent} from './components/article/article.component';
import {FormsModule} from "@angular/forms";
import { ArticleOneComponent } from './components/article-one/article-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MenuComponent,
    FooterComponent,
    AddArticleButtonComponent,
    ModalComponent,
    ArticleComponent,
    ArticleOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
