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


 //const serverUrl = process.env.NEXT_PUBLIC_URL
//console.log(serverUrl)

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
        err = 'failed login';
      });
    }
  });
};

var userStore = createUserStore();
window.userStore = userStore;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYTk2MzViYjU2OTg1Y2Q1NjcyZGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7O0FBRUEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU1ILHdEQUFrQixDQUFDO0FBQzdDSSxJQUFBQSxFQUFFLEVBQUUsRUFEeUM7QUFFN0NDLElBQUFBLElBQUksRUFBRSxPQUZ1QztBQUc3Q0MsSUFBQUEsYUFBYSxFQUFFLENBSDhCO0FBSTdDQyxJQUFBQSxLQUFLLEVBQUUsRUFKc0M7QUFNN0NDLElBQUFBLEtBQUssRUFBRSxlQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDeEJULE1BQUFBLGlEQUFBLENBQVdXLFNBQVMsR0FBRyxRQUF2QixFQUFpQztBQUM3QkgsUUFBQUEsS0FBSyxFQUFMQSxLQUQ2QjtBQUU3QkMsUUFBQUEsUUFBUSxFQUFSQTtBQUY2QixPQUFqQyxFQUlJRyxJQUpKLENBSVMsVUFBQUMsSUFBSSxFQUFJO0FBQ1RWLFFBQUFBLEVBQUUsR0FBR1UsSUFBSSxDQUFDQyxNQUFWO0FBQ0FWLFFBQUFBLElBQUksR0FBR1MsSUFBSSxDQUFDRSxRQUFaO0FBQ0FWLFFBQUFBLGFBQWEsR0FBR0osNENBQUssR0FBR2UsR0FBUixDQUFZLEVBQVosRUFBZ0IsS0FBaEIsQ0FBaEI7QUFDSCxPQVJMLFdBU1csVUFBQUMsR0FBRyxFQUFJO0FBQ1ZDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FBLFFBQUFBLEdBQUcsR0FBRyxjQUFOO0FBQ0gsT0FaTDtBQWFIO0FBcEI0QyxHQUFELENBQXhCO0FBQUEsQ0FBeEI7O0FBd0JBLElBQU1HLFNBQVMsR0FBR2xCLGVBQWUsRUFBakM7QUFDQW1CLE1BQU0sQ0FBQ0QsU0FBUCxHQUFtQkEsU0FBbkI7QUFFQSwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUF1dG9PYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuLy9jb25zdCBzZXJ2ZXJVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxcbi8vY29uc29sZS5sb2coc2VydmVyVXJsKVxuXG5jb25zdCBjcmVhdGVVc2VyU3RvcmUgPSAoKSA9PiBtYWtlQXV0b09ic2VydmFibGUoe1xuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnZ3Vlc3QnLFxuICAgIHNlc3Npb25FeHBpcnk6IDAsXG4gICAgZXJyb3I6ICcnLFxuXG4gICAgbG9naW46IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdChzZXJ2ZXJVcmwgKyAnL2xvZ2luJywge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KS5cbiAgICAgICAgICAgIHRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWQgPSBkYXRhLnVzZXJJZFxuICAgICAgICAgICAgICAgIG5hbWUgPSBkYXRhLnVzZXJOYW1lXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkV4cGlyeSA9IGRheWpzKCkuYWRkKDYwLCAnZGF5JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgZXJyID0gJ2ZhaWxlZCBsb2dpbidcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxuXG5jb25zdCB1c2VyU3RvcmUgPSBjcmVhdGVVc2VyU3RvcmUoKVxud2luZG93LnVzZXJTdG9yZSA9IHVzZXJTdG9yZVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyU3RvcmUiXSwibmFtZXMiOlsibWFrZUF1dG9PYnNlcnZhYmxlIiwiYXhpb3MiLCJkYXlqcyIsImNyZWF0ZVVzZXJTdG9yZSIsImlkIiwibmFtZSIsInNlc3Npb25FeHBpcnkiLCJlcnJvciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInBvc3QiLCJzZXJ2ZXJVcmwiLCJ0aGVuIiwiZGF0YSIsInVzZXJJZCIsInVzZXJOYW1lIiwiYWRkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZXJTdG9yZSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=