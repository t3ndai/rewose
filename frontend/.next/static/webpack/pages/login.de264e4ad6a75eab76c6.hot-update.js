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
  return (0,mobx__WEBPACK_IMPORTED_MODULE_2__.makeAutoObservable)({
    id: '',
    name: 'guest',
    sessionExpiry: 0,
    error: '',
    login: function login(email, password) {
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZGUyNjRlNGFkNmE3NWVhYjc2YzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUcsU0FBUyxHQUFHQyx1QkFBbEI7O0FBRUEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU1QLHdEQUFrQixDQUFDO0FBQzdDUSxJQUFBQSxFQUFFLEVBQUUsRUFEeUM7QUFFN0NDLElBQUFBLElBQUksRUFBRSxPQUZ1QztBQUc3Q0MsSUFBQUEsYUFBYSxFQUFFLENBSDhCO0FBSTdDQyxJQUFBQSxLQUFLLEVBQUUsRUFKc0M7QUFNN0NDLElBQUFBLEtBQUssRUFBRSxlQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDeEJiLE1BQUFBLGlEQUFBLENBQVdFLFNBQVMsR0FBRyxRQUF2QixFQUFpQztBQUM3QlUsUUFBQUEsS0FBSyxFQUFMQSxLQUQ2QjtBQUU3QkMsUUFBQUEsUUFBUSxFQUFSQTtBQUY2QixPQUFqQyxFQUlJRSxJQUpKLENBSVMsVUFBQUMsSUFBSSxFQUFJO0FBQ1RULFFBQUFBLEVBQUUsR0FBR1MsSUFBSSxDQUFDQyxNQUFWO0FBQ0FULFFBQUFBLElBQUksR0FBR1EsSUFBSSxDQUFDRSxRQUFaO0FBQ0FULFFBQUFBLGFBQWEsR0FBR1IsNENBQUssR0FBR2tCLEdBQVIsQ0FBWSxFQUFaLEVBQWdCLEtBQWhCLENBQWhCO0FBQ0gsT0FSTCxXQVNXLFVBQUFDLEdBQUcsRUFBSTtBQUNWQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBVixRQUFBQSxLQUFLLEdBQUcsY0FBUjtBQUNILE9BWkw7QUFhSDtBQXBCNEMsR0FBRCxDQUF4QjtBQUFBLENBQXhCOztBQXdCQSxJQUFNYSxTQUFTLEdBQUdqQixlQUFlLEVBQWpDOztBQUNBLElBQUksTUFBK0I7QUFDL0JrQixFQUFBQSxNQUFNLENBQUNELFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0g7O0FBRUQsK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS91c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmNvbnN0IHNlcnZlclVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTFxuXG5jb25zdCBjcmVhdGVVc2VyU3RvcmUgPSAoKSA9PiBtYWtlQXV0b09ic2VydmFibGUoe1xuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnZ3Vlc3QnLFxuICAgIHNlc3Npb25FeHBpcnk6IDAsXG4gICAgZXJyb3I6ICcnLFxuXG4gICAgbG9naW46IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdChzZXJ2ZXJVcmwgKyAnL2xvZ2luJywge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KS5cbiAgICAgICAgICAgIHRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWQgPSBkYXRhLnVzZXJJZFxuICAgICAgICAgICAgICAgIG5hbWUgPSBkYXRhLnVzZXJOYW1lXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkV4cGlyeSA9IGRheWpzKCkuYWRkKDYwLCAnZGF5JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgZXJyb3IgPSAnZmFpbGVkIGxvZ2luJ1xuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5cbmNvbnN0IHVzZXJTdG9yZSA9IGNyZWF0ZVVzZXJTdG9yZSgpXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cudXNlclN0b3JlID0gdXNlclN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTdG9yZSJdLCJuYW1lcyI6WyJtYWtlQXV0b09ic2VydmFibGUiLCJheGlvcyIsImRheWpzIiwic2VydmVyVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTCIsImNyZWF0ZVVzZXJTdG9yZSIsImlkIiwibmFtZSIsInNlc3Npb25FeHBpcnkiLCJlcnJvciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInBvc3QiLCJ0aGVuIiwiZGF0YSIsInVzZXJJZCIsInVzZXJOYW1lIiwiYWRkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZXJTdG9yZSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=