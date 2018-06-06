import { Store } from 'redux';

export default function array({ dispatch }) {
  return next => action => (Array.isArray(action) ? action.map(dispatch) : next(action));
}