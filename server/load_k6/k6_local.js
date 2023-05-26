//k6 run /Users/ericlee/HackReactor/Reviews-Backend/server/load_k6/k6_local.js
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
  const res = http.get('http://localhost:3000/reviews?product_id=1000011');

  check(res, {
    'status was 200': (r) => r.status == 200
  });

}