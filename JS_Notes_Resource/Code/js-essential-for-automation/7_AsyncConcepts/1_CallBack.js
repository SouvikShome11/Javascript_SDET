function getData1(dataId) {
  setTimeout(() => {
    console.log(`Data ${dataId}`);
  }, 4000);
}

/**
 *  *when we call the function, it will run in async way,
 *  *all 3 getData1 will be called sequencially and won't wait for first call to be completed
 *  *so we will see all 3 output after 2 sec delay in one shot
 */
//getData1(1), getData1(2), getData1(3);

//*************************************************************************************************** */

function getData2(dataId, getNextData) {
  setTimeout(() => {
    console.log(`Data ${dataId}`);
    if (getNextData) {
      getNextData();
    }
  }, 4000);
}

/**
 *  *When we implemnet callback, the 2nd call will wait the the 1st call id completed
 */

getData2(1, () => {
  getData2(2, () => {
    getData2(3);
  });
});

//* This is wrong format of using callback, the inner most function will be called first, and behave async
getData2(1, getData2(2, getData2(3)));
