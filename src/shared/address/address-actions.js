import {ADDRESS} from '../common/site-url';
import {jsonCall} from '../common/actions';

export function fetchAddressId(data) {
  return jsonCall(data, 'FETCH_ADDRESS', ADDRESS.GET_ADDRESS);
}

export function fetchAddressExecutionsId(data) {
  return jsonCall(data, 'FETCH_ADDRESS_EXECUTIONS', ADDRESS.GET_EXECUTIONS);
}

export function fetchAddressTransfersId(data) {
  return jsonCall(data, 'FETCH_ADDRESS_TRANSFERS', ADDRESS.GET_TRANSFERS);
}

export function fetchAddressVotersId(data) {
  return jsonCall(data, 'FETCH_ADDRESS_VOTERS', ADDRESS.GET_VOTERS);
}

export function fetchAddressSettleDepositsId(data) {
  return jsonCall(data, 'FETCH_ADDRESS_SETTLE_DEPOSITS', ADDRESS.GET_SETTLE_DEPOSITS);
}

export function fetchAddressCreateDepositsId(data) {
  return jsonCall(data, 'FETCH_ADDRESS_CREATE_DEPOSITS', ADDRESS.GET_CREATE_DEPOSITS);
}

