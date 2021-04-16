const cfnResponse = require('cfn-response-async');

exports.handler = async (event, context) => {
  try {
    console.log('Event', JSON.stringify(event));

    switch (event.RequestType) {
      case 'Create':
        return await create(event, context);
      case 'Update':
        return await update(event, context);
      case 'Delete':
        return await del(event, context);
      default:
        return {};
    }
  } catch (ex) {
    console.log('Error', ex);
    await cfnResponse.send(event, context, cfnResponse.FAILED, {});
    return {};
  }
};

const create = async (event, context) => {
  await cfnResponse.send(event, context, cfnResponse.SUCCESS, {});
};

const update = async (event, context) => {
  await cfnResponse.send(event, context, cfnResponse.SUCCESS, {});
};

const del = async (event, context) => {
  await cfnResponse.send(event, context, cfnResponse.SUCCESS, {});
};
