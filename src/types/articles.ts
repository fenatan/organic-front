export type ArticleInput = {
  title: string;
  description?: string;
  content?: string;
  slug?: string;
  category?: number;
  image?: number;
  author?: number;
  attachments?: Array<Attachment>;
  tags?: Array<string>;
  tutorials?: Array<Tutorial>;
  cases?: Array<Case>;
  embeddeds?: Array<Embedded>;
  published_at?: Date;
  created_by?: Date;
  updated_by?: Date;
};

export type Attachment = {
  title: string;
  file?: number;
};

export type Tutorial = {
  title?: string;
  videoUrl?: string;
  description?: string;
};

export type Case = {
  title?: string;
  description?: string;
  url?: string;
  image?: number;
};

export type Embedded = {
  title?: string;
  urlEmbedded?: string;
};
