module.exports.interval = () => {
  setInterval(() => {
    console.log('Starting notes.js')
  }, 3000);
};


module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';
};

// Add function
// Make new function called add(a, b);
// Call add funtion from app.js
module.exports.add = (a = 0, b = 0) => {
  if ( typeof(a || b) !== 'number' ) {
    return 'not a number';
  } else {
    return a + b;
  }
};
