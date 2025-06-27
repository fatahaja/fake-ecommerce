import { SelectedSortType } from '@/app/context/app-context';
import { IProduct } from '@/components/products/product-list';

export const categories = [
  'Books',
  'Clothing',
  'Electronics',
  'Gamming',
  'Virtual',
];

export const applySort = (sortValue: SelectedSortType, items: IProduct[]) => {
  if (!items.length || !sortValue) return items;

  let res = [...items];

  switch (sortValue) {
    case 'lowestPriceFirst':
      res = res.sort((a, b) => a.price - b.price);
      break;
    case 'highestPriceFirst':
      res = res.sort((a, b) => b.price - a.price);
      break;
    case 'ascending':
      res = res.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'descending':
      res = res.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  return res;
};
