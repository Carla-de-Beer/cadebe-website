export interface NewsItem {
  readonly id: number;
  readonly title: string;
  readonly subTitle: string;
  readonly text: string;
  readonly url: string;
}

export interface NewsDataProps {
  readonly newsContent: readonly NewsItem[];
}
