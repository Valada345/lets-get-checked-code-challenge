export interface Post {
  id: number;
  title: string;
  author: string;
  publish_date: string;
  slug: string;
  description: string;
  content: string;
}

export interface Comment {
  id: number;
  postId: number;
  date: string;
  user: string;
  content: string;
  parent_id: number | null;
}

export interface ActiveComment {
  id: number;
  type: ActiveCommentTypeEnum;
}

export enum ActiveCommentTypeEnum {
  replying = 'replying',
  editing = 'editing',
}
