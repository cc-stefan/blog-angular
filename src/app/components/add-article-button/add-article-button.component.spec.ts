import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleButtonComponent } from './add-article-button.component';

describe('AddArticleButtonComponent', () => {
  let component: AddArticleButtonComponent;
  let fixture: ComponentFixture<AddArticleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddArticleButtonComponent]
    });
    fixture = TestBed.createComponent(AddArticleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
