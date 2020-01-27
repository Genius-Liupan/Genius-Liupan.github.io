import Cookies from 'universal-cookie';

import config from '@/config';

const { COOKIE } = config;

const TEN_YEAR = 7 * 24 * 60 * 60 * 1000;

const defaultConfig = {
  path: '/',
  maxAge: TEN_YEAR
};

const cookies = new Cookies();

export function save(value, name = COOKIE, cookiePath = defaultConfig) {
  return cookies.set(name, value, cookiePath);
}

export function get(name = COOKIE, cookiePath) {
  return cookies.get(name, cookiePath);
}

