import {takeEvery, put, call, fork,all} from 'redux-saga/effects'
import {GET_LATEST_NEWS,GET_POPULAR_NEWS, SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR} from "../constants";
import {getLatestNews, getPopularNews} from "../../api";
import {setLatestNews, setPopularNews} from "../actions/actionCreator";

export function* handleLatestNews() {
    try {
        const {hits} = yield call(getLatestNews)
        yield put(setLatestNews(hits))
    } catch (e) {
        yield put({type: SET_LATEST_NEWS_ERROR, payload: 'error fetching latest news'})
    }
}

export function* handlePopularNews() {
    try {
        const {hits} = yield call(getPopularNews)
        yield put(setPopularNews(hits))
    } catch (e) {
        yield put({type: SET_POPULAR_NEWS_ERROR, payload: 'error fetching popular news'})
    }
}

export function* watchPopularSaga() {
    yield takeEvery(GET_POPULAR_NEWS,handlePopularNews)
}
export function* watchLatestSaga() {
    yield takeEvery(GET_LATEST_NEWS,handleLatestNews)
}

export default function* rootSaga() {
    // console.log('hi kama')
    yield all([
        fork(watchPopularSaga),
        fork(watchLatestSaga),
    ])
}