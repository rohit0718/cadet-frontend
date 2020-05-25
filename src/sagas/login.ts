import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import * as actionTypes from '../actions/actionTypes';
import { computeEndpointUrl } from '../utils/login';
import { showWarningMessage } from '../utils/notification';

export default function* loginSaga(): SagaIterator {
  yield takeEvery(actionTypes.LOGIN, updateLoginHref);
}

function* updateLoginHref({ payload: providerId }: ReturnType<typeof actions.login>) {
  const epUrl = computeEndpointUrl(providerId);
  if (!epUrl) {
    return call(showWarningMessage, 'Could not log in; invalid provider name provided.');
  }
  window.location.href = epUrl;
  return undefined;
}
