/* type 1 
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('async task is done');
    // resolve();
    // reject();
  }, 2000);
});

promise1
  .then(() => {
    console.log('promise is resolved');
  })
  .catch(() => {
    console.log('promise is rejected');
  }); */

/* type 2

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('asyn task is done');
    resolve();
  }, 3000);
})
  .then(() => {
    console.log('promise is resolved');
  })
  .catch(() => {
    console.log('promise is rejected');
  }); */

/*   type 3

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'karan', age: 20 });
  });
});

promise3
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log('promise is rejected');
  }); */

/*   type 4

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (error) {
      reject('ERROR : Promise rejected');
    } else {
      resolve({ username: 'karan', profession: 'developer' });
    }
  }, 4000);
});

promise4
  .then((user) => {
    console.log('data recieved from promise', user);
    return user.profession;
  })
  .then((profession) => {
    console.log(`Profession data is ${profession}`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Promise was either resolved or rejected');
  });*/

/*   type 5

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ language: 'javascript', difficulty: 'decent' });
    } else {
      reject('ERROR : Client Side Error');
    }
  }, 5000);
});

const consumePromiveFive = async () => {
  try {
    const response = await promiseFive;
    console.log(`The language is ${response.language}`);
  } catch (error) {
    console.log(error);
  }
};

consumePromiveFive(); */

/* type 6 using async await (fetching a data from url | dealing with promise )

const getUsersData = async () => {
  try {
    const response = await fetch('apiUrl');
    const data = await response.json();
    data.map((currentItem) => console.log(currentItem.name));
  } catch (error) {
    console.log('Error: ', error);
  }
};

getUsersData(); */

// type 6 using .then and .catch (fetching a data from url | dealing with promise )

// fetch('apiUrl')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.map((currentItem) => {
//       console.log('currentItem name is : ', currentItem.name);
//     });
//   })
//   .catch((err) => {
//     console.log('Error : ', err);
//   });

/* A promise is badically an object in javascrip that represents an eventual completion (or failure) of an asynchronous task and its resulting value

A promise has three states:
a) pending -> neither fulfilled or rejected
b) fulfilled -> meaning that the operation was succesfully completed
c) rejected -> meaning that the operation failed
*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 is resolved');
    resolve();
  }, 2000);
});

promise1.then(() => {
  console.log('First async task is done');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('promise 2 is resolved');
    // resolve();
    reject(new Error('Promise 2 was not resolved'));
  }, 3000);
})
  .then(() => {
    console.log('Second async task is done');
  })
  .catch((err) => {
    console.log('The request was not fulfilled', err);
  });
