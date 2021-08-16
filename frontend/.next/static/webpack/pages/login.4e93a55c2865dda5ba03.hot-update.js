"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./data/user.js":
/*!**********************!*\
  !*** ./data/user.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var serverUrl = "http://localhost:8000";

var createUserStore = function createUserStore() {
  var id = '';
  var name = 'guest';
  var sessionExpiry = 0;
  var error = '';

  login: (function (email, password) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(serverUrl + '/login', {
      email: email,
      password: password
    }).then(function (data) {
      id = data.userId;
      name = data.userName;
      sessionExpiry = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(60, 'day');
    })["catch"](function (err) {
      console.log(err);
      error = 'failed login';
    });
  });

  return {
    id: id,
    name: name,
    sessionExpiry: sessionExpiry,
    error: error,
    login: login
  };
};

var userStore = (0,mobx__WEBPACK_IMPORTED_MODULE_2__.makeAutoObservable)(createUserStore());

if (true) {
  window.userStore = userStore;
}

/* harmony default export */ __webpack_exports__["default"] = (userStore);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNGU5M2E1NWMyODY1ZGRhNWJhMDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUcsU0FBUyxHQUFHQyx1QkFBbEI7O0FBRUEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCLE1BQUlDLEVBQUUsR0FBRyxFQUFUO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLE9BQVg7QUFDQSxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFFQUMsRUFBQUEsS0FBSyxFQUFFLFdBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFxQjtBQUN4QmIsSUFBQUEsaURBQUEsQ0FBV0UsU0FBUyxHQUFHLFFBQXZCLEVBQWlDO0FBQzdCVSxNQUFBQSxLQUFLLEVBQUxBLEtBRDZCO0FBRTdCQyxNQUFBQSxRQUFRLEVBQVJBO0FBRjZCLEtBQWpDLEVBSUlFLElBSkosQ0FJUyxVQUFBQyxJQUFJLEVBQUk7QUFDVFQsTUFBQUEsRUFBRSxHQUFHUyxJQUFJLENBQUNDLE1BQVY7QUFDQVQsTUFBQUEsSUFBSSxHQUFHUSxJQUFJLENBQUNFLFFBQVo7QUFDQVQsTUFBQUEsYUFBYSxHQUFHUiw0Q0FBSyxHQUFHa0IsR0FBUixDQUFZLEVBQVosRUFBZ0IsS0FBaEIsQ0FBaEI7QUFDSCxLQVJMLFdBU1csVUFBQUMsR0FBRyxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FWLE1BQUFBLEtBQUssR0FBRyxjQUFSO0FBQ0gsS0FaTDtBQWFILEdBZE07O0FBZ0JQLFNBQU87QUFBRUgsSUFBQUEsRUFBRSxFQUFGQSxFQUFGO0FBQU1DLElBQUFBLElBQUksRUFBSkEsSUFBTjtBQUFZQyxJQUFBQSxhQUFhLEVBQWJBLGFBQVo7QUFBMkJDLElBQUFBLEtBQUssRUFBTEEsS0FBM0I7QUFBa0NDLElBQUFBLEtBQUssRUFBTEE7QUFBbEMsR0FBUDtBQUNILENBdkJEOztBQTBCQSxJQUFNWSxTQUFTLEdBQUd4Qix3REFBa0IsQ0FBQ08sZUFBZSxFQUFoQixDQUFwQzs7QUFDQSxJQUFJLE1BQStCO0FBQy9Ca0IsRUFBQUEsTUFBTSxDQUFDRCxTQUFQLEdBQW1CQSxTQUFuQjtBQUNIOztBQUVELCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvdXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5jb25zdCBzZXJ2ZXJVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxcblxuY29uc3QgY3JlYXRlVXNlclN0b3JlID0gKCkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgbGV0IG5hbWUgPSAnZ3Vlc3QnXG4gICAgbGV0IHNlc3Npb25FeHBpcnkgPSAwXG4gICAgbGV0IGVycm9yID0gJydcblxuICAgIGxvZ2luOiAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3Qoc2VydmVyVXJsICsgJy9sb2dpbicsIHtcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfSkuXG4gICAgICAgICAgICB0aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlkID0gZGF0YS51c2VySWRcbiAgICAgICAgICAgICAgICBuYW1lID0gZGF0YS51c2VyTmFtZVxuICAgICAgICAgICAgICAgIHNlc3Npb25FeHBpcnkgPSBkYXlqcygpLmFkZCg2MCwgJ2RheScpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIGVycm9yID0gJ2ZhaWxlZCBsb2dpbidcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaWQsIG5hbWUsIHNlc3Npb25FeHBpcnksIGVycm9yLCBsb2dpbiB9XG59XG5cblxuY29uc3QgdXNlclN0b3JlID0gbWFrZUF1dG9PYnNlcnZhYmxlKGNyZWF0ZVVzZXJTdG9yZSgpKVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LnVzZXJTdG9yZSA9IHVzZXJTdG9yZVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyU3RvcmUiXSwibmFtZXMiOlsibWFrZUF1dG9PYnNlcnZhYmxlIiwiYXhpb3MiLCJkYXlqcyIsInNlcnZlclVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VUkwiLCJjcmVhdGVVc2VyU3RvcmUiLCJpZCIsIm5hbWUiLCJzZXNzaW9uRXhwaXJ5IiwiZXJyb3IiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0IiwidGhlbiIsImRhdGEiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsImFkZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyU3RvcmUiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9