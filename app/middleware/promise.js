import _ from 'lodash';

const isPromise = val => val && _.isFunction(val.then) && _.isFunction(val.catch);

export default function({ dispatch }) {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action);
    }

    const { payload, type, meta, successMessage } = action;
    const dispatchStage = (status, dispatchPayload) =>
      dispatch({
        status,
        type,
        meta,
        payload: dispatchPayload,
        error: status === 'Failed',
        successMessage: successMessage,
      });

    if (_.isUndefined(action.status)) {
      dispatchStage('Pending', {});
    }
    return payload
      .then(result => dispatchStage('Successful', result))
      .catch(err => dispatchStage('Failed', err));
  };
}