import {
  FETCH_DATA
} from './types';

import generateData from './../libs/generateData';


export function actionFetchData() {
  const payload = generateData({
    count: 400,
    end: new Date(2017, 0, 26),
    start: new Date(2017, 0, 15),
  });

  return {
    type: FETCH_DATA,
    payload,
  };
}
