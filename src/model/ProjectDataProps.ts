export interface ProjectItem {
  readonly id: number;
  readonly title: string;
  readonly text: string;
  readonly url: string;
  readonly footerClass: string;
  readonly footerLanguage: string;
}

export interface ProjectDataProps {
  readonly projectContent: readonly ProjectItem[];
}
