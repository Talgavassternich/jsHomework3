const promise = new Promise(resolve => resolve());
promise
    .then(() => { throw 'Error' })
    .then(() => { /* Your code here  */ })
    .catch(e => { throw 'Error' })
    .then(() => { console.log('This should not be printed') })
    .catch(e => { console.log('All ok')});