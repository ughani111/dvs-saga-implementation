import { put, takeLatest } from 'redux-saga/effects'
import { POST_FETCHED, POST_REQUESTED } from './constants'


function* fetchJobsWithinRadiusWithSelector() {
  try{
    const posts = yield fetch("http://localhost:3002").then(data=>data.json());
    yield put({type: POST_FETCHED, payload: { posts } });
  }
  catch(err){
    console.log("error", err);
  }
}

function* Sagas(){
  yield takeLatest(POST_REQUESTED, fetchJobsWithinRadiusWithSelector);
}

export default Sagas;