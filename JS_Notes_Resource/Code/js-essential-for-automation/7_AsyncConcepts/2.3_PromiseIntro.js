// @ Promise Creation
function getData(dataId) {
  return new Promise((resolve, reject) => {
    console.log('I am promise');

    if (dataId > 0) {
      console.log(`Data: ${dataId}`);
      resolve('Data returned :)');
    } else reject('No Data');
  });
}

//@ Using Promise
getData(2)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
