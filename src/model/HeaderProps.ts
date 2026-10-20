export type PageType = 'home' | 'projects' | 'skills' | 'news' | 'about';

export interface HeaderProps {
  readonly pageType: PageType;
}
