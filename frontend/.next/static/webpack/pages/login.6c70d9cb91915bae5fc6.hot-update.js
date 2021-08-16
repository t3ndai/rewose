"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./data/user.js":
/*!**********************!*\
  !*** ./data/user.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);





var serverUrl = "http://localhost:8000";

var createUserStore = function createUserStore() {
  var id = '';
  var name = 'guest';
  var sessionExpiry = 0;
  var error = '';

  var login = /*#__PURE__*/function () {
    var _ref = (0,_mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password) {
      var res, data;
      return _mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                res = axios__WEBPACK_IMPORTED_MODULE_2___default().post(serverUrl + '/login', {
                  email: email,
                  password: password
                });
                data = res.data;
                (0,mobx__WEBPACK_IMPORTED_MODULE_4__.runInAction)(function () {
                  id = data.userId;
                  name = data.userName;
                  sessionExpiry = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(60, 'day');
                });
              } catch (err) {
                console.log(err);
                (0,mobx__WEBPACK_IMPORTED_MODULE_4__.runInAction)(function () {
                  console.log('here');
                  error = 'failed login';
                });
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function login(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return (0,mobx__WEBPACK_IMPORTED_MODULE_4__.makeAutoObservable)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNmM3MGQ5Y2I5MTkxNWJhZTVmYzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxTQUFTLEdBQUdDLHVCQUFsQjs7QUFFQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7QUFDQSxNQUFJQyxJQUFJLEdBQUcsT0FBWDtBQUNBLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLE1BQU1DLEtBQUs7QUFBQSx1U0FBRyxpQkFBT0MsS0FBUCxFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWLGtCQUFJO0FBQ01DLGdCQUFBQSxHQUROLEdBQ1lkLGlEQUFBLENBQVdFLFNBQVMsR0FBRyxRQUF2QixFQUFpQztBQUN6Q1Usa0JBQUFBLEtBQUssRUFBTEEsS0FEeUM7QUFFekNDLGtCQUFBQSxRQUFRLEVBQVJBO0FBRnlDLGlCQUFqQyxDQURaO0FBS1FHLGdCQUFBQSxJQUxSLEdBS2lCRixHQUxqQixDQUtRRSxJQUxSO0FBTUFqQixnQkFBQUEsaURBQVcsQ0FBQyxZQUFNO0FBQ2RRLGtCQUFBQSxFQUFFLEdBQUdTLElBQUksQ0FBQ0MsTUFBVjtBQUNBVCxrQkFBQUEsSUFBSSxHQUFHUSxJQUFJLENBQUNFLFFBQVo7QUFDQVQsa0JBQUFBLGFBQWEsR0FBR1IsNENBQUssR0FBR2tCLEdBQVIsQ0FBWSxFQUFaLEVBQWdCLEtBQWhCLENBQWhCO0FBQ0gsaUJBSlUsQ0FBWDtBQUtILGVBWEQsQ0FZQSxPQUFPQyxHQUFQLEVBQVk7QUFDUkMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FyQixnQkFBQUEsaURBQVcsQ0FBQyxZQUFNO0FBQ2RzQixrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBWixrQkFBQUEsS0FBSyxHQUFHLGNBQVI7QUFDSCxpQkFIVSxDQUFYO0FBSUg7O0FBbkJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxDLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUF1QkEsU0FBT2Qsd0RBQWtCLENBQUM7QUFBRVUsSUFBQUEsRUFBRSxFQUFGQSxFQUFGO0FBQU1DLElBQUFBLElBQUksRUFBSkEsSUFBTjtBQUFZQyxJQUFBQSxhQUFhLEVBQWJBLGFBQVo7QUFBMkJDLElBQUFBLEtBQUssRUFBTEEsS0FBM0I7QUFBa0NDLElBQUFBLEtBQUssRUFBTEE7QUFBbEMsR0FBRCxDQUF6QjtBQUNILENBOUJEOztBQWlDQSxJQUFJWSxTQUFTLEdBQUdqQixlQUFlLEVBQS9COztBQUNBLElBQUksTUFBK0I7QUFDL0JrQixFQUFBQSxNQUFNLENBQUNELFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0g7O0FBRUQsK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS91c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSwgYWN0aW9uLCBydW5JbkFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmNvbnN0IHNlcnZlclVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTFxuXG5jb25zdCBjcmVhdGVVc2VyU3RvcmUgPSAoKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICBsZXQgbmFtZSA9ICdndWVzdCdcbiAgICBsZXQgc2Vzc2lvbkV4cGlyeSA9IDBcbiAgICBsZXQgZXJyb3IgPSAnJ1xuXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBheGlvcy5wb3N0KHNlcnZlclVybCArICcvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcyBcbiAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZCA9IGRhdGEudXNlcklkXG4gICAgICAgICAgICAgICAgbmFtZSA9IGRhdGEudXNlck5hbWVcbiAgICAgICAgICAgICAgICBzZXNzaW9uRXhwaXJ5ID0gZGF5anMoKS5hZGQoNjAsICdkYXknKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKVxuICAgICAgICAgICAgICAgIGVycm9yID0gJ2ZhaWxlZCBsb2dpbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBtYWtlQXV0b09ic2VydmFibGUoeyBpZCwgbmFtZSwgc2Vzc2lvbkV4cGlyeSwgZXJyb3IsIGxvZ2luIH0pXG59XG5cblxubGV0IHVzZXJTdG9yZSA9IGNyZWF0ZVVzZXJTdG9yZSgpXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cudXNlclN0b3JlID0gdXNlclN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTdG9yZSJdLCJuYW1lcyI6WyJtYWtlQXV0b09ic2VydmFibGUiLCJhY3Rpb24iLCJydW5JbkFjdGlvbiIsImF4aW9zIiwiZGF5anMiLCJzZXJ2ZXJVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVVJMIiwiY3JlYXRlVXNlclN0b3JlIiwiaWQiLCJuYW1lIiwic2Vzc2lvbkV4cGlyeSIsImVycm9yIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzIiwicG9zdCIsImRhdGEiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsImFkZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyU3RvcmUiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9