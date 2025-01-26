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
    name: 'Buy',
    options: [
      { name: 'Cars', path: '/cars' },
      { name: 'Bicycle', path: '/bicycle' },
      { name: 'Commercial Vehicles', path: '/commercial-vehicles' },
      { name: 'Leisure Vehicles', path: '/leisure-vehicles' },
      { name: 'Parts', path: '/parts' },
    ],
  },
  {
    name: 'Sell',
    path: '/sell-my-car',
    options: [
      { name: 'Cars', path: '/cars' },
      { name: 'Bicycle', path: '/bicycle' },
      { name: 'Commercial Vehicles', path: '/commercial-vehicles' },
      { name: 'Leisure Vehicles', path: '/leisure-vehicles' },
    ],
  },
  {
    name: 'Dealers Corner',
    path: '/dealers-corner',
  },
  { name: 'News & Reviews', path: '/news-reviews' },
  { name: 'Tools & Services', path: '/tools-services' },
];

export interface INavigationData {
  name: string;
  listingPath: string;
  path: string;
  index: number;
  data: INavItem[];
  icon?: string;
}

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

const navItemsBoat: INavItem[] = [
  {
    name: 'Buy Boats',
    options: [
      { name: 'New & Used boats For Sale', path: '/boats/new' },
      { name: 'Find a Dealer', path: '/boats/dealer' },
      { name: 'New boats Specials', path: '/boats/newSpecial' },
      { name: 'Used boats Specials', path: '/boats/usedSpecial' },
    ],
  },
  {
    name: 'Sell Boats',
    path: '/sell-my-boats',
  },
  { name: 'Tools & Services', path: '/tools-services' },
];

const navItemsTrucks: INavItem[] = [
  {
    name: 'Buy Trucks',
    options: [
      { name: 'New & Used Leisure For Sale', path: '/trucks/new' },
      { name: 'Find a Dealer', path: '/trucks/dealer' },
      { name: 'New Leisure Specials', path: '/trucks/newSpecial' },
      { name: 'Used Leisure Specials', path: '/trucks/usedSpecial' },
    ],
  },
  {
    name: 'Sell Trucks',
    path: '/sell-my-trucks',
  },
  { name: 'News & Reviews', path: '/news-reviews' },
  { name: 'Tools & Services', path: '/tools-services' },
];

export const navigationData: INavigationData[] = [
  {
    index: 0,
    name: 'Cars',
    icon: 'directions_car',
    listingPath: '/cars/cars-list',
    path: 'cars',
    data: navItemsCar,
  },
  {
    index: 1,
    name: 'Bikes',
    icon: 'pedal_bike',
    listingPath: '/bikes/bikes-list',
    path: 'bikes',
    data: navItemsBike,
  },
  {
    index: 1,
    name: 'Bikes',
    icon: 'two_wheeler',
    listingPath: '/bikes/bikes-list',
    path: 'bikes',
    data: navItemsBike,
  },
  {
    index: 2,
    name: 'Boats',
    icon: 'sailing',
    listingPath: '/boats/boats-list',
    path: 'boats',
    data: navItemsBoat,
  },
  {
    index: 3,
    name: 'Trucks',
    icon: 'local_shipping',
    listingPath: '/trucks/trucks-list',
    path: 'trucks',
    data: navItemsTrucks,
  },
];
