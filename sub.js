const sub = ({a, b, c}) => a + b + c;

const subHandler = async  msg => ({
  status: 200,
  body: JSON.stringify(sub(JSON.parse(msg.body)))
});

module.exports = {
  subHandler
};