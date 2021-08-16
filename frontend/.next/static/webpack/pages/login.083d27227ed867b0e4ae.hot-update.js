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
  var login = (0,mobx__WEBPACK_IMPORTED_MODULE_2__.action)(function (email, password) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(serverUrl + '/login', {
      email: email,
      password: password
    }).then((0,mobx__WEBPACK_IMPORTED_MODULE_2__.action)('loginSuccess', function (data) {
      id = data.userId;
      name = data.userName;
      sessionExpiry = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(60, 'day');
    }))["catch"](function (err) {
      console.log(err);
      (0,mobx__WEBPACK_IMPORTED_MODULE_2__.runInAction)(function () {
        error = 'failed login';
      });
    });
  });
  return (0,mobx__WEBPACK_IMPORTED_MODULE_2__.makeAutoObservable)({
    id: id,
    name: name,
    sessionExpiry: sessionExpiry,
    error: error,
    login: login
  });
};

var userStore = createUserStore();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMDgzZDI3MjI3ZWQ4NjdiMGU0YWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUssU0FBUyxHQUFHQyx1QkFBbEI7O0FBRUEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCLE1BQUlDLEVBQUUsR0FBRyxFQUFUO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLE9BQVg7QUFDQSxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLE1BQU1DLEtBQUssR0FBR2IsNENBQU0sQ0FBQyxVQUFDYyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDdENiLElBQUFBLGlEQUFBLENBQVdFLFNBQVMsR0FBRyxRQUF2QixFQUFpQztBQUM3QlUsTUFBQUEsS0FBSyxFQUFMQSxLQUQ2QjtBQUU3QkMsTUFBQUEsUUFBUSxFQUFSQTtBQUY2QixLQUFqQyxFQUlJRSxJQUpKLENBSVNqQiw0Q0FBTSxDQUFDLGNBQUQsRUFBaUIsVUFBQWtCLElBQUksRUFBSTtBQUNoQ1QsTUFBQUEsRUFBRSxHQUFHUyxJQUFJLENBQUNDLE1BQVY7QUFDQVQsTUFBQUEsSUFBSSxHQUFHUSxJQUFJLENBQUNFLFFBQVo7QUFDQVQsTUFBQUEsYUFBYSxHQUFHUiw0Q0FBSyxHQUFHa0IsR0FBUixDQUFZLEVBQVosRUFBZ0IsS0FBaEIsQ0FBaEI7QUFDSCxLQUpVLENBSmYsV0FTVyxVQUFBQyxHQUFHLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQXJCLE1BQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkVyxRQUFBQSxLQUFLLEdBQUcsY0FBUjtBQUNILE9BRlUsQ0FBWDtBQUdILEtBZEw7QUFlSCxHQWhCbUIsQ0FBcEI7QUFrQkEsU0FBT2Isd0RBQWtCLENBQUM7QUFBRVUsSUFBQUEsRUFBRSxFQUFGQSxFQUFGO0FBQU1DLElBQUFBLElBQUksRUFBSkEsSUFBTjtBQUFZQyxJQUFBQSxhQUFhLEVBQWJBLGFBQVo7QUFBMkJDLElBQUFBLEtBQUssRUFBTEEsS0FBM0I7QUFBa0NDLElBQUFBLEtBQUssRUFBTEE7QUFBbEMsR0FBRCxDQUF6QjtBQUNILENBekJEOztBQTRCQSxJQUFJWSxTQUFTLEdBQUdqQixlQUFlLEVBQS9COztBQUNBLElBQUksTUFBK0I7QUFDL0JrQixFQUFBQSxNQUFNLENBQUNELFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0g7O0FBRUQsK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS91c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSwgYWN0aW9uLCBydW5JbkFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmNvbnN0IHNlcnZlclVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTFxuXG5jb25zdCBjcmVhdGVVc2VyU3RvcmUgPSAoKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICBsZXQgbmFtZSA9ICdndWVzdCdcbiAgICBsZXQgc2Vzc2lvbkV4cGlyeSA9IDBcbiAgICBsZXQgZXJyb3IgPSAnJ1xuXG4gICAgY29uc3QgbG9naW4gPSBhY3Rpb24oKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHNlcnZlclVybCArICcvbG9naW4nLCB7XG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH0pLlxuICAgICAgICAgICAgdGhlbihhY3Rpb24oJ2xvZ2luU3VjY2VzcycsIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlkID0gZGF0YS51c2VySWRcbiAgICAgICAgICAgICAgICBuYW1lID0gZGF0YS51c2VyTmFtZVxuICAgICAgICAgICAgICAgIHNlc3Npb25FeHBpcnkgPSBkYXlqcygpLmFkZCg2MCwgJ2RheScpXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gJ2ZhaWxlZCBsb2dpbidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG1ha2VBdXRvT2JzZXJ2YWJsZSh7IGlkLCBuYW1lLCBzZXNzaW9uRXhwaXJ5LCBlcnJvciwgbG9naW4gfSlcbn1cblxuXG5sZXQgdXNlclN0b3JlID0gY3JlYXRlVXNlclN0b3JlKClcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy51c2VyU3RvcmUgPSB1c2VyU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlclN0b3JlIl0sIm5hbWVzIjpbIm1ha2VBdXRvT2JzZXJ2YWJsZSIsImFjdGlvbiIsInJ1bkluQWN0aW9uIiwiYXhpb3MiLCJkYXlqcyIsInNlcnZlclVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VUkwiLCJjcmVhdGVVc2VyU3RvcmUiLCJpZCIsIm5hbWUiLCJzZXNzaW9uRXhwaXJ5IiwiZXJyb3IiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0IiwidGhlbiIsImRhdGEiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsImFkZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyU3RvcmUiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9