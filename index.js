
const _ = require('lodash');

module.exports = {
  str2arr: (iString) => {
    if(typeof iString !== 'string') {
      throw Error('Input to this function must be String');
    }
    return _.split(iString, ' ');
  },
  trim: (iString) => {
    if(typeof iString !== 'string') {
      throw Error('Input to this function must be String');
    }
    return _.trim(iString);
  }
}