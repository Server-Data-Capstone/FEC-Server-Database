//k6 run /Users/ericlee/HackReactor/Reviews-Backend/server/load_k6/k6_local.js
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  discardResponseBodies: true,
  // stages: [
  //   {duration: '1s', target: 1000},
  //   {duration: '28s', target: 1000},
  //   {duration: '1s', target: 0}
  // ]
  vus: 10,
  duration: '30s',
  // httpDebug: 'full',
  // throw: true,

  // scenarios: {
  //   constant_request_rate: {
  //     executor: 'constant-arrival-rate',
  //     // executor: 'constant-vus',
  //     rate: 1000,
  //     timeUnit: '1s',
  //     // vus: 200,
  //     duration: '30s',
  //     preAllocatedVUs: 500,
  //     maxVUs: 1100
  //   }
  // }

  // set thresholds later
};

export default function () {
  getReviews()
  // getMeta()
  // putHelpful()
  // putReport()

  // const new_id = Math.floor((Math.random() * 100000) + 900000);
  // const res = http.get(`http://localhost:3000/reviews?product_id=${new_id}`, {
  //   tags: {name: 'GetReviewsID'},
  // });
  // check(res, {
  //   'status was 200': (r) => r.status == 200
  // });
  // sleep(1)
}

//API endpoints

const getReviews = () => {
  const new_id = Math.floor((Math.random() * 100000) + 900000);
  let res = http.get(`http://localhost:3000/reviews?product_id=${new_id}`, {
    tags: {name: 'GetReviewsID'},
  });
  check(res, {
    // 'data is coming back': (r) => r.body.length > 2000
    'status was 200': (r) => {
      return r.status == 200
    }

  });
  // console.log('this is res body', res.body)
  sleep(1)
};
const getMeta = () => {
  const new_id = Math.floor((Math.random() * 100000) + 900000);
  let res = http.get(`http://localhost:3000/reviews?product_id=${new_id}`, {
    tags: {name: 'getMetaID'},
  });
  check(res, {
    'status was 200': (r) => r.status == 200
  });
  sleep(1)
};
const putHelpful = () => {
  const new_id = Math.floor((Math.random() * 100000) + 5674952);
  let res = http.put(`http://localhost:3000/reviews/${new_id}/helpful`, {
    tags: {name: 'putHelpful'},
  });
  check(res, {
    'status was 200': (r) => r.status == 200
  });
  sleep(1)
};
const putReport = () => {
  const new_id = Math.floor((Math.random() * 100000) + 5674952);
  let res = http.put(`http://localhost:3000/reviews/${new_id}/report`, {
    tags: {name: 'putReport'},
  });
  check(res, {
    'status was 200': (r) => r.status == 200
  });
  sleep(1)
};