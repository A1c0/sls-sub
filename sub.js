const R = require('ramda');

const sub = ({...args}) => R.pipe(
  R.values,
  R.tap(console.log),
  R.reduceRight(R.subtract, 0)
)(args);

const subHandler = async  msg => ({
  status: 200,
  body: JSON.stringify(sub(JSON.parse(msg.body)))
});

module.exports = {
  subHandler
};