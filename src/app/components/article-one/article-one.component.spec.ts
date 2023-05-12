import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOneComponent } from './article-one.component';

describe('ArticleOneComponent', () => {
  let component: ArticleOneComponent;
  let fixture: ComponentFixture<ArticleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleOneComponent]
    });
    fixture = TestBed.createComponent(ArticleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
