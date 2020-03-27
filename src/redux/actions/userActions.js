import * as types from '../types';
import axios from 'axios';
import {api} from '../../utils/utils';

export const inpAction = e => dispatch => {
  // return async dispatch => {
  // const data = await await //  fetch(`${api + e}`)).json();
  axios.get(`${api + e}`).then(res => {
    dispatch({type: types.USERNAME, payload: res.data.login});
    dispatch({type: types.NAME, payload: res.data.name});
    dispatch({type: types.FOLLOWERS, payload: res.data.followers});
    dispatch({type: types.FOLLOWING, payload: res.data.following});
    dispatch({type: types.IMAGE, payload: res.data.avatar_url});
    console.log('login Action', res.data);
    console.log('user', e);
    console.log('user', res.data.avatar_url);
  });
  // .then(response => response.text()) // Convert to text instead of res.json()
  // .then(text => {
  //   if (Platform.OS === 'android') {
  //     text = text.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, ''); // If android , I've removed unwanted chars.
  //   }
  //   return text;
  // })
  // .then(response => JSON.parse(response));

  // axios.get(`${api}Shawn147`).then(res => res.data.json());
  // dispatch({type: types.INPUT_VAL, payload: data.login});
  // };
};

// export function ChangeUserName() {
//   return dispatch => {
//     return axios
//       .get(`${api}Shawn147`)
//       .then(res => dispatch(UpdateUserName(res.data.login)));
//   };
// }
