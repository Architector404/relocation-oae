import './main.scss'
import { switchTheme } from './src/js/theme-switcher.js';

const app = document.getElementById('app');
const switcher = document.getElementById('switcher');

switcher.addEventListener(
  'change',
  (event) => switchTheme(event.target, app)
);
