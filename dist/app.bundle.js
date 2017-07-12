webpackJsonp([0],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_hot_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_App_index_tsx__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_index_ts__ = __webpack_require__(271);







const renderApp = (Component) => {
    __WEBPACK_IMPORTED_MODULE_0_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], { store: __WEBPACK_IMPORTED_MODULE_6__store_index_ts__["a" /* default */] },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["BrowserRouter"], null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_hot_loader__["AppContainer"], null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Component, null)))), document.getElementById('DE-react-root'));
};
renderApp(__WEBPACK_IMPORTED_MODULE_5__containers_App_index_tsx__["a" /* default */]);
if (false) {
    module.hot.accept('./containers/App/index.tsx', () => renderApp(App));
}


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);


const App = () => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("main", null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "1231232")));
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ 270:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export injectAsyncReducers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_rootReducer_ts__ = __webpack_require__(272);




const middleware = process.env.NODE_ENV === 'production' ?
    [__WEBPACK_IMPORTED_MODULE_0_redux_thunk___default.a] :
    [__WEBPACK_IMPORTED_MODULE_0_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_1_redux_logger___default.a];
const store = __WEBPACK_IMPORTED_MODULE_2_redux__["createStore"](__WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"](__WEBPACK_IMPORTED_MODULE_3__reducers_rootReducer_ts__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_2_redux__["compose"](__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"](...middleware)));
/* harmony default export */ __webpack_exports__["a"] = (store);
store.asyncReducers = {};
function replaceReducers(defaultReducers) {
    const merged = Object.assign({}, defaultReducers, store.asyncReducers);
    const combined = __WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"](merged);
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
    replaceReducers(__WEBPACK_IMPORTED_MODULE_3__reducers_rootReducer_ts__["a" /* default */]);
}
if (false) {
    module.hot.accept('../reducers/rootReducer', () => {
        const nextReducer = require('../reducers/rootReducer').default;
        replaceReducers(nextReducer);
    });
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    nothing: () => ({}),
});


/***/ })

},[268]);
//# sourceMappingURL=app.bundle.js.map