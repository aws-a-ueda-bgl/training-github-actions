function fizzbuzz(n) {
  if(n % 15 === 0){
    return 'FizzBuzz'
  }
  if(n % 4 === 0){
    return 'Fizz'
  }
  if(n % 5 === 0){
    return 'Buzz'
  }
  return String(n)
}
module.exports = fizzbuzz
 
