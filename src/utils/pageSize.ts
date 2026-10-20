import PageSize from './enums';

export type LayoutSize = 'mobile' | 'tablet' | 'desktop';

export function getLayoutSize(): LayoutSize {
  const width = window.innerWidth;
  if (width <= PageSize.SMALL) return 'mobile';
  if (width < PageSize.LARGE) return 'tablet';
  return 'desktop';
}
