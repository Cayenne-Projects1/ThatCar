import { Theme } from './symbols';

export const lightTheme: Theme = {
  name: 'light',
  properties: {
    '--background': '#f6f7f9',
    '--yellow': '#ffc451',
    '--yellow-light': '#ffd584',
    '--gray-black': '#151515',
    '--white-text': '#fff',
    '--black-text': '#444444',
    '--black': '#000000',
    '--white': '#fff',
  },
};

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--background': '#000',
    '--yellow': '#ffc451',
    '--yellow-light': '#ffd584',
    '--gray-black': '#151515',
    '--white-text': '#fff',
    '--black-text': '#444444',
    '--black': '#000000',
    '--white': '#fff',
  },
};
