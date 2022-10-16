const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  let result = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn',
    'autumn', 'autumn', 'winter']
    function err(message) {
      this.message = message;
      //this.name = 'Invalid date!';
   }
   
   if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

    if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
      throw new Error('Invalid date!');
    }

    return result[date.getMonth()];

  }



module.exports = {
  getSeason
};
