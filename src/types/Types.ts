export interface INavlinks {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

export interface INews {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

export interface IOtherSection {
  curationId: string;
  title: string;
  articles: INews[];
}

export interface IHeadlines {
  id: string;
  title: string;
}

export interface IMostRead {
  id: string;
  title: string;
}
export interface ICategoryNewsProps {
  params: Promise<{
    categoryId: string;
  }>;
}
export interface INewsDetailsProps {
  params: Promise<{
    newsId: string;
  }>;
}



export interface IDescriptionBlock {
  model?: {
    blocks?: {
      model?: {
        text?: string;
      };
    }[];
  };
}

export interface INewsDescription {
  blocks?: IDescriptionBlock[];
}

export interface INewsBodyItem {
  type: "image" | "text" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
}

export interface INewsDetails {
  id: string;
  title: string;

  description: INewsDescription;

  link: string;
  firstPublished: string;
  lastPublished: string;

  byline: {
    name: string;
    role: string;
  }[];

  topics: {
    id: string;
    name: string;
  }[];

  tags: string[];

  imageUrl: string;

  body: INewsBodyItem[];

  wordCount: number;
  source: string;
  sourceUrl: string;
}

export interface INewsDetailsProps {
  params: Promise<{
    newsId: string;
  }>;
}
