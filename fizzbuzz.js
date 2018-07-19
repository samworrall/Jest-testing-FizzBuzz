const fizzbuzz = (num) => {
  if(num % 15 === 0) {
    return 'fizzbuzz'
  } else if(num === 3) {
    return 'fizz'
  } else if(num === 5) {
    return 'buzz'
  }
}

module.exports = fizzbuzz
