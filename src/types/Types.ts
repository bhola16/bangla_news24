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
