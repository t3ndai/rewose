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

  var login = function login(email, password) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(serverUrl + '/login', {
      email: email,
      password: password
    }).then((0,mobx__WEBPACK_IMPORTED_MODULE_2__.action)('loginSuccess', function (data) {
      id = data.userId;
      name = data.userName;
      sessionExpiry = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(60, 'day');
    }))["catch"]((0,mobx__WEBPACK_IMPORTED_MODULE_2__.action)('loginError', function (err) {
      console.log(err);
      error = 'failed login';
    }));
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYzRmOWVmMmI0MWFjODc0NWNkZGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUksU0FBUyxHQUFHQyx1QkFBbEI7O0FBRUEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCLE1BQUlDLEVBQUUsR0FBRyxFQUFUO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLE9BQVg7QUFDQSxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDL0JiLElBQUFBLGlEQUFBLENBQVdFLFNBQVMsR0FBRyxRQUF2QixFQUFpQztBQUM3QlUsTUFBQUEsS0FBSyxFQUFMQSxLQUQ2QjtBQUU3QkMsTUFBQUEsUUFBUSxFQUFSQTtBQUY2QixLQUFqQyxFQUlJRSxJQUpKLENBSVNoQiw0Q0FBTSxDQUFDLGNBQUQsRUFBaUIsVUFBQWlCLElBQUksRUFBSTtBQUNoQ1QsTUFBQUEsRUFBRSxHQUFHUyxJQUFJLENBQUNDLE1BQVY7QUFDQVQsTUFBQUEsSUFBSSxHQUFHUSxJQUFJLENBQUNFLFFBQVo7QUFDQVQsTUFBQUEsYUFBYSxHQUFHUiw0Q0FBSyxHQUFHa0IsR0FBUixDQUFZLEVBQVosRUFBZ0IsS0FBaEIsQ0FBaEI7QUFDSCxLQUpVLENBSmYsV0FTV3BCLDRDQUFNLENBQUMsWUFBRCxFQUFlLFVBQUFxQixHQUFHLEVBQUk7QUFDL0JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FWLE1BQUFBLEtBQUssR0FBRyxjQUFSO0FBQ0gsS0FIWSxDQVRqQjtBQWFILEdBZEQ7O0FBZ0JBLFNBQU9aLHdEQUFrQixDQUFDO0FBQUVTLElBQUFBLEVBQUUsRUFBRkEsRUFBRjtBQUFNQyxJQUFBQSxJQUFJLEVBQUpBLElBQU47QUFBWUMsSUFBQUEsYUFBYSxFQUFiQSxhQUFaO0FBQTJCQyxJQUFBQSxLQUFLLEVBQUxBLEtBQTNCO0FBQWtDQyxJQUFBQSxLQUFLLEVBQUxBO0FBQWxDLEdBQUQsQ0FBekI7QUFDSCxDQXZCRDs7QUEwQkEsSUFBTVksU0FBUyxHQUFHakIsZUFBZSxFQUFqQzs7QUFDQSxJQUFJLE1BQStCO0FBQy9Ca0IsRUFBQUEsTUFBTSxDQUFDRCxTQUFQLEdBQW1CQSxTQUFuQjtBQUNIOztBQUVELCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvdXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUsIGFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmNvbnN0IHNlcnZlclVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTFxuXG5jb25zdCBjcmVhdGVVc2VyU3RvcmUgPSAoKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICBsZXQgbmFtZSA9ICdndWVzdCdcbiAgICBsZXQgc2Vzc2lvbkV4cGlyeSA9IDBcbiAgICBsZXQgZXJyb3IgPSAnJ1xuXG4gICAgY29uc3QgbG9naW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3Qoc2VydmVyVXJsICsgJy9sb2dpbicsIHtcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfSkuXG4gICAgICAgICAgICB0aGVuKGFjdGlvbignbG9naW5TdWNjZXNzJywgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWQgPSBkYXRhLnVzZXJJZFxuICAgICAgICAgICAgICAgIG5hbWUgPSBkYXRhLnVzZXJOYW1lXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkV4cGlyeSA9IGRheWpzKCkuYWRkKDYwLCAnZGF5JylcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLmNhdGNoKGFjdGlvbignbG9naW5FcnJvcicsIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIGVycm9yID0gJ2ZhaWxlZCBsb2dpbidcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlQXV0b09ic2VydmFibGUoeyBpZCwgbmFtZSwgc2Vzc2lvbkV4cGlyeSwgZXJyb3IsIGxvZ2luIH0pXG59XG5cblxuY29uc3QgdXNlclN0b3JlID0gY3JlYXRlVXNlclN0b3JlKClcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy51c2VyU3RvcmUgPSB1c2VyU3RvcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlclN0b3JlIl0sIm5hbWVzIjpbIm1ha2VBdXRvT2JzZXJ2YWJsZSIsImFjdGlvbiIsImF4aW9zIiwiZGF5anMiLCJzZXJ2ZXJVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVVJMIiwiY3JlYXRlVXNlclN0b3JlIiwiaWQiLCJuYW1lIiwic2Vzc2lvbkV4cGlyeSIsImVycm9yIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJkYXRhIiwidXNlcklkIiwidXNlck5hbWUiLCJhZGQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidXNlclN0b3JlIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==