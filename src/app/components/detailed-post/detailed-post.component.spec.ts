import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { commentMocks } from 'src/app/mocks/mocks';
import { ApiService } from 'src/app/services/api.service';

import { DetailedPostComponent } from './detailed-post.component';

describe('DetailedPostComponent', () => {
  let component: DetailedPostComponent;
  let fixture: ComponentFixture<DetailedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedPostComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedPostComponent);
    component = fixture.componentInstance;
    component.comments = commentMocks;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all the replies for a given comment', () => {
    expect(
      component.getReplies({
        id: 1,
      }).length
    ).toBe(2);

    expect(
      component.getReplies({
        id: 3,
      }).length
    ).toBe(0);
  });

  it('should return the root comments', () => {
    expect(component.getRootComments().length).toBe(3);
  });
});
