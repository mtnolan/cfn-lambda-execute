const response = require('cfn-response');

exports.handler = (event, context) => {
  try {
    // eslint-disable-next-line no-console
    console.log('Event', JSON.stringify(event));
    response.send(event, context, response.SUCCESS, {});
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.log('Error', ex);
    response.send(event, context, response.FAILED, {});
  }
};
