function getData2(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${dataId}`);
      resolve('Success');
    }, 4000);
  });
}

getData2(1)
  .then((res) => {
    console.log(res);
    return getData2(2); // returning getData2(2), to handle it through next then()
  })
  .then((res) => {
    console.log(res);
    return getData2(3);
  })
  .then((res) => {
    console.log(res);
  });
