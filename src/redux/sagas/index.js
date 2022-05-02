import {takeEvery, put, call} from 'redux-saga/effects'
import {GET_NEWS} from "../constants";
import {getLatestNews,getPopularNews} from "../../api";
import {setLatestNews,setPopulaeNews} from "../actions/actionCreator";

export function* handleLatestNews(){
    const {hits} = yield call(getLatestNews,'react')
    yield put(setLatestNews(hits))
}
export function* handlePopularNews(){
    const {hits} = yield call(getPopularNews)
    yield put(setPopulaeNews(hits))
}

export function* handleNews() {
    yield call(handleLatestNews)
    yield call(handlePopularNews)
}

export function* watchClickSaga() {
    yield takeEvery(GET_NEWS, handleNews)
}

export default function* rootSaga() {
    // console.log('hi kama')
    yield watchClickSaga()
}