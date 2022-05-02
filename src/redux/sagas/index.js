import {takeEvery} from 'redux-saga/effects'
import {INCREASE_COUNT, DECREASE_COUNT} from "../constants";

export function* workerSaga() {

}

export function* watchClickSaga() {
    yield takeEvery(INCREASE_COUNT, () => console.log('request 1'))

    /*yield take(DECREASE_COUNT)
    console.log('request 2')*/
}

export default function* rootSaga() {
    // console.log('hi kama')
    yield watchClickSaga()
}