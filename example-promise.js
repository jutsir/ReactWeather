/*function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
};

getTempCallback('Philadelphia', (err, temp) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('success');
      resolve(79);
    }, 2000)
    setTimeout(() => {
      console.log('error');
      reject('City not found');
    }, 1000)
  });
}

getTempPromise('Philadelphia').then((temp) => {
  console.log('promise success', temp);
}, (err) => {
  console.log('promise error', err);
});*/


// Challenge Area

function addPromice(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number' ) {
      resolve(a + b);
    } else {
      reject('One or both parameters is not a number');
    }
  })
}


addPromice(6, 2).then((result) => {
  console.log('Sum is', result);
}, (error) => {
  console.log('Error:', error);
});


addPromice('6', 2).then((result) => {
  console.log('Sum is', result);
}, (error) => {
  console.log('Error:', error);
});