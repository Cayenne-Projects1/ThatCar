export interface IOptions {
  name: string;
  path: string;
}

export interface INavItem {
  name: string;
  path?: string;
  options?: IOptions[];
}

const navItemsCar: INavItem[] = [
  {
    name: 'Buy Car',
    options: [
      { name: 'New & Used Cars For Sale', path: '/car/new' },
      { name: 'Find a Dealer', path: '/car/dealer' },
      { name: 'New Car Specials', path: '/car/newSpecial' },
      { name: 'Used Car Specials', path: '/car/usedSpecial' },
      { name: 'Car Research', path: '/car/research' },
      { name: 'Parts', path: '/car/parts' },
    ],
  },
  {
    name: 'Sell Car',
    path: '/sell-my-car',
  },
  {
    name: 'Value my Car',
    path: '/value-car',
  },
  { name: 'News & Reviews', path: '/news-reviews' },
  { name: 'Tools & Services', path: '/tools-services' },
];

const navItemsBike: INavItem[] = [
  {
    name: 'Buy Bike',
    options: [
      { name: 'New & Used Bikes For Sale', path: '/bike/new' },
      { name: 'Find a Dealer', path: '/bike/dealer' },
      { name: 'New Bike Specials', path: '/bike/newSpecial' },
      { name: 'Used Bike Specials', path: '/bike/usedSpecial' },
      { name: 'Bike Research', path: '/bike/research' },
      { name: 'Parts', path: '/bike/parts' },
    ],
  },
  {
    name: 'Sell Bike',
    path: '/sell-my-bike',
  },
  {
    name: 'Value my Bike',
    path: '/value-bike',
  },
  { name: 'News & Reviews', path: '/bike/news-reviews' },
  { name: 'Tools & Services', path: '/bike/tools-services' },
];

const navItemsLeisure: INavItem[] = [
  {
    name: 'Buy Leisure',
    options: [
      { name: 'New & Used Leisure For Sale', path: '/Leisure/new' },
      { name: 'Find a Dealer', path: '/Leisure/dealer' },
      { name: 'New Leisure Specials', path: '/Leisure/newSpecial' },
      { name: 'Used Leisure Specials', path: '/Leisure/usedSpecial' },
    ],
  },
  {
    name: 'Sell Leisure',
    path: '/sell-my-Leisure',
  },
  { name: 'Tools & Services', path: '/tools-services' },
];

const navItemsCommercial: INavItem[] = [
  {
    name: 'Commercials',
    options: [
      { name: 'New & Used Leisure For Sale', path: '/Commercials/new' },
      { name: 'Find a Dealer', path: '/Commercials/dealer' },
      { name: 'New Leisure Specials', path: '/Commercials/newSpecial' },
      { name: 'Used Leisure Specials', path: '/Commercials/usedSpecial' },
    ],
  },
  {
    name: 'Sell Commercials',
    path: '/sell-my-Commercials',
  },
  { name: 'News & Reviews', path: '/news-reviews' },
  { name: 'Tools & Services', path: '/tools-services' },
];

export const navigationData = [
  navItemsCar,
  navItemsBike,
  navItemsLeisure,
  navItemsCommercial,
];
