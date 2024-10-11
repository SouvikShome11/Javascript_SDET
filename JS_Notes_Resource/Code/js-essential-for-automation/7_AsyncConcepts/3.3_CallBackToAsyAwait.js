function getData2(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${dataId}`);
      resolve('Success');
    }, 4000);
  });
}

/**
 * * To call a function in async-await way we need to create  function wich is async
 */

async function getAllData() {
  await getData2(1);
  await getData2(2);
  await getData2(3);
  await getData2(4);
  await getData2(5);
}

//getAllData(); // To avoid a extrac function calling we can use IIFE -> find the IIFE format below

/**
 * @IIFE -> To avoid unwanted memory allocation we can use IIFE, where that function will be called and wont be reused
 */

(async function () {
  await getData2(1);
  await getData2(2);
  await getData2(3);
  await getData2(4);
  await getData2(5);
})();
