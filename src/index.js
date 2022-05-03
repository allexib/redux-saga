import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import {Route, Routes} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Home from './pages/home/home'
import LatestNews from './pages/latest-news/latest-news'
import PopularNews from './pages/popular-news/popular-news'
import store from './redux/store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Routes>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/latest-news" exact>
                            <LatestNews />
                        </Route>
                        <Route path="/popular-news" exact>
                            <PopularNews />
                        </Route>
                    </Routes>
                </App>
            </Router>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
