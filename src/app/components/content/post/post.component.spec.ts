import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Post } from 'src/app/interfaces/interfaces';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let routerSpy = { navigateByUrl: jasmine.createSpy('navigate') };

  const mockPost: Post = {
    id: 1,
    title: 'mock title',
    author: 'mock author',
    publish_date: '2022-09-29',
    slug: 'slug mock',
    description: 'mock description',
    content: 'mock content',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the url with the given post id', () => {
    component.navigateToPost();
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('post/1');
  });
});
