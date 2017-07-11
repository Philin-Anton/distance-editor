webpackJsonp([0],{

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __webpack_require__(76);
const React = __webpack_require__(6);
const react_redux_1 = __webpack_require__(101);
const react_router_dom_1 = __webpack_require__(115);
const react_hot_loader_1 = __webpack_require__(113);
const index_tsx_1 = __webpack_require__(286);
const index_ts_1 = __webpack_require__(288);
const renderApp = (Component) => {
    react_dom_1.render(React.createElement(react_redux_1.Provider, { store: index_ts_1.default },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_hot_loader_1.AppContainer, null,
                React.createElement(Component, null)))), document.getElementById('DE-react-root'));
};
renderApp(index_tsx_1.default);
if (false) {
    module.hot.accept('./containers/App/index.tsx', () => renderApp(index_tsx_1.default));
}


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(6);
__webpack_require__(287);
const App = () => (React.createElement("main", null,
    React.createElement("div", null, "asdsdas")));
exports.default = App;


/***/ }),

/***/ 287:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(59);
const logger = __webpack_require__(112);
const thunk = __webpack_require__(111);
const rootReducer_ts_1 = __webpack_require__(289);
const middleware = [thunk, logger];
const store = redux_1.createStore(redux_1.combineReducers(rootReducer_ts_1.default), redux_1.compose(redux_1.applyMiddleware(middleware)));
exports.default = store;
store.asyncReducers = {};
function replaceReducers(defaultReducers) {
    const merged = Object.assign({}, defaultReducers, store.asyncReducers);
    const combined = redux_1.combineReducers(merged);
    store.replaceReducer(combined);
}
function injectAsyncReducers(asyncReducers) {
    const injectReducers = Object.keys(asyncReducers).reduce((all, item) => {
        if (store.asyncReducers[item]) {
            delete all[item];
        }
        return all;
    }, asyncReducers);
    store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers);
    replaceReducers(rootReducer_ts_1.default);
}
exports.injectAsyncReducers = injectAsyncReducers;
if (false) {
    module.hot.accept('../reducers/rootReducer', () => {
        const nextReducer = require('../reducers/rootReducer').default;
        replaceReducers(nextReducer);
    });
}


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    nothing: () => ({}),
};


/***/ })

},[285]);
//# sourceMappingURL=app.bundle.js.map