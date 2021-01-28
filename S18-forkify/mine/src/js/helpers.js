// 287
import { TIMEOUT_SEC } from './helpers.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    // this will return a promise: the fetch is the timeout dont finish or the timeout promise(error)
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    // convert the data to json
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    console.log('res', res);
    console.log('data', data);

    return data;
  } catch (err) {
    //   rethrowing the error to be handle in the caller
    throw err;
  }
};
