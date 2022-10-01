import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { postMocks } from 'src/app/mocks/mocks';
import { ApiService } from 'src/app/services/api.service';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentComponent],
      providers: [ApiService, HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {
    const unOrderedPostsMock = postMocks;
    const orderedPosts = [
      {
        id: 2,
        title: 'Blog post #8',
        author: 'Haywood Halfacre',
        publish_date: '2022-09-30',
        slug: 'blog-post-8',
        description:
          'Ea graece animal offendit vel, at pro rebum integre, liber sapientem est te.',
        content:
          '<p>Ea graece animal offendit vel, at pro rebum integre, liber sapientem est te.</p> <p>Dicat decore qualisque sed at, est no ferri nobis suavitate, ne mei sale illum. Ei autem fastidii ius, facer liber ocurreret his in, ne aeterno viderer nec. Cu utinam mucius menandri vel, ea qui nulla veritus perpetua. Omnis nostro mnesarchum usu ea, eu duo audire adversarium.</p>',
      },
      {
        id: 1,
        title: 'Blog post #1',
        author: 'Melissa Manges',
        publish_date: '2020-02-23',
        slug: 'blog-post-1',
        description: 'Utroque denique invenire et has.',
        content:
          '<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>',
      },
      {
        id: 3,
        title: 'Blog post #10',
        author: 'Tandy Thiem',
        publish_date: '2016-11-29',
        slug: 'blog-post-10',
        description: 'Natum integre tractatos eu duo, ut falli scriptorem qui.',
        content:
          '<p>Natum integre tractatos eu duo, ut falli scriptorem qui. Probo inermis ad nec, petentium inciderint mei in.</p> <p>Quidam inermis detraxit per ea. Vix etiam eirmod ut, sea dolor appellantur te. Te quis dicit delicata eum, in has convenire interesset.</p>',
      },
    ];
    expect(component['orderPostsByDate'](unOrderedPostsMock)).toEqual(
      orderedPosts
    );
  });
});
