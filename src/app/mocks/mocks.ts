import { Comment, Post } from 'src/app/interfaces/interfaces';

export const commentMocks: Comment[] = [
  {
    id: 1,
    postId: 1,
    parent_id: null,
    user: 'Amelia',
    date: '2016-02-23',
    content: 'Nulla in nulla vel nisi faucibus scelerisque. Donec quis tortor.',
  },
  {
    id: 2,
    postId: 1,
    parent_id: 2,
    user: 'Amelia',
    date: '2016-02-24',
    content: 'Cras est nunc, tempus eget risus vitae, vulputate ornare magna.',
  },
  {
    id: 3,
    postId: 3,
    parent_id: 1,
    user: 'Natashia',
    date: '2016-02-23',
    content: 'Mauris malesuada a tellus at mollis. Nam eu eros ipsum.',
  },
  {
    id: 4,
    postId: 1,
    parent_id: 1,
    user: 'Shella',
    date: '2016-02-24',
    content: 'Mauris vitae sem in nisl pharetra dapibus in nec orci.',
  },
  {
    content: 'New String',
    date: '2016-12-10',
    parent_id: null,
    postId: 3,
    user: 'Best',
    id: 5,
  },
  {
    content: 'New String',
    date: '2016-12-10',
    parent_id: null,
    postId: 3,
    user: 'Best',
    id: 6,
  },
];

export const postMocks: Post[] = [
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
