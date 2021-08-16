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
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post(serverUrl + '/login', {
                email: email,
                password: password
              });

            case 3:
              res = _context.sent;
              data = res.data;
              (0,mobx__WEBPACK_IMPORTED_MODULE_4__.runInAction)(function () {
                id = data.userId;
                name = data.userName;
                sessionExpiry = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(60, 'day');
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              if (_context.t0.response) {
                if (_context.t0.response.status == 500) {
                  (0,mobx__WEBPACK_IMPORTED_MODULE_4__.runInAction)(function () {
                    console.log(error.response.data);
                    error = 'server had an error, try again later';
                  });
                } else {
                  (0,mobx__WEBPACK_IMPORTED_MODULE_4__.runInAction)(function () {
                    console.log(_context.t0.response.data);
                    error = 'wrong credentials';
                  });
                }
              } else if (error.request) {
                (0,mobx__WEBPACK_IMPORTED_MODULE_4__.runInAction)(function () {
                  error = 'failed login';
                });
                console.log(_context.t0.request);
              } else {
                console.log(_context.t0.message);
              }

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
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

(0,mobx__WEBPACK_IMPORTED_MODULE_4__.autorun)(function () {
  console.log('error', userStore.error);
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMTIyNTg4ZGI1MGM2OGVhYjgyMmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxTQUFTLEdBQUdDLHVCQUFsQjs7QUFFQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7QUFDQSxNQUFJQyxJQUFJLEdBQUcsT0FBWDtBQUNBLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLE1BQU1DLEtBQUs7QUFBQSx1U0FBRyxpQkFBT0MsS0FBUCxFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFWWIsaURBQUEsQ0FBV0UsU0FBUyxHQUFHLFFBQXZCLEVBQWlDO0FBQy9DVSxnQkFBQUEsS0FBSyxFQUFMQSxLQUQrQztBQUUvQ0MsZ0JBQUFBLFFBQVEsRUFBUkE7QUFGK0MsZUFBakMsQ0FGWjs7QUFBQTtBQUVBRSxjQUFBQSxHQUZBO0FBTUVDLGNBQUFBLElBTkYsR0FNV0QsR0FOWCxDQU1FQyxJQU5GO0FBT05sQixjQUFBQSxpREFBVyxDQUFDLFlBQU07QUFDZFMsZ0JBQUFBLEVBQUUsR0FBR1MsSUFBSSxDQUFDQyxNQUFWO0FBQ0FULGdCQUFBQSxJQUFJLEdBQUdRLElBQUksQ0FBQ0UsUUFBWjtBQUNBVCxnQkFBQUEsYUFBYSxHQUFHUiw0Q0FBSyxHQUFHa0IsR0FBUixDQUFZLEVBQVosRUFBZ0IsS0FBaEIsQ0FBaEI7QUFDSCxlQUpVLENBQVg7QUFQTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFjTixrQkFBSSxZQUFJQyxRQUFSLEVBQWtCO0FBQ2Qsb0JBQUksWUFBSUEsUUFBSixDQUFhQyxNQUFiLElBQXVCLEdBQTNCLEVBQWdDO0FBQzVCdkIsa0JBQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkd0Isb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFLLENBQUNVLFFBQU4sQ0FBZUosSUFBM0I7QUFDQU4sb0JBQUFBLEtBQUssR0FBRyxzQ0FBUjtBQUNILG1CQUhVLENBQVg7QUFJSCxpQkFMRCxNQUtPO0FBQ0haLGtCQUFBQSxpREFBVyxDQUFDLFlBQU07QUFDZHdCLG9CQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFJSCxRQUFKLENBQWFKLElBQXpCO0FBQ0FOLG9CQUFBQSxLQUFLLEdBQUcsbUJBQVI7QUFDSCxtQkFIVSxDQUFYO0FBSUg7QUFDSixlQVpELE1BWU8sSUFBSUEsS0FBSyxDQUFDYyxPQUFWLEVBQW1CO0FBQ3RCMUIsZ0JBQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkWSxrQkFBQUEsS0FBSyxHQUFHLGNBQVI7QUFDSCxpQkFGVSxDQUFYO0FBR0FZLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFJQyxPQUFoQjtBQUNILGVBTE0sTUFLQTtBQUNIRixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBSUUsT0FBaEI7QUFDSDs7QUFqQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTGQsS0FBSztBQUFBO0FBQUE7QUFBQSxLQUFYOztBQXNDQSxTQUFPZCx3REFBa0IsQ0FBQztBQUFFVSxJQUFBQSxFQUFFLEVBQUZBLEVBQUY7QUFBTUMsSUFBQUEsSUFBSSxFQUFKQSxJQUFOO0FBQVlDLElBQUFBLGFBQWEsRUFBYkEsYUFBWjtBQUEyQkMsSUFBQUEsS0FBSyxFQUFMQSxLQUEzQjtBQUFrQ0MsSUFBQUEsS0FBSyxFQUFMQTtBQUFsQyxHQUFELENBQXpCO0FBQ0gsQ0E3Q0Q7O0FBZ0RBLElBQUllLFNBQVMsR0FBR3BCLGVBQWUsRUFBL0I7O0FBRUEsSUFBSSxNQUErQjtBQUMvQnFCLEVBQUFBLE1BQU0sQ0FBQ0QsU0FBUCxHQUFtQkEsU0FBbkI7QUFDSDs7QUFFRDNCLDZDQUFPLENBQUMsWUFBTTtBQUNWdUIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkcsU0FBUyxDQUFDaEIsS0FBL0I7QUFDSCxDQUZNLENBQVA7QUFJQSwrREFBZWdCLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS91c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24sIGF1dG9ydW4gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5jb25zdCBzZXJ2ZXJVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxcblxuY29uc3QgY3JlYXRlVXNlclN0b3JlID0gKCkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgbGV0IG5hbWUgPSAnZ3Vlc3QnXG4gICAgbGV0IHNlc3Npb25FeHBpcnkgPSAwXG4gICAgbGV0IGVycm9yID0gJydcblxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChzZXJ2ZXJVcmwgKyAnL2xvZ2luJywge1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNcbiAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZCA9IGRhdGEudXNlcklkXG4gICAgICAgICAgICAgICAgbmFtZSA9IGRhdGEudXNlck5hbWVcbiAgICAgICAgICAgICAgICBzZXNzaW9uRXhwaXJ5ID0gZGF5anMoKS5hZGQoNjAsICdkYXknKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICdzZXJ2ZXIgaGFkIGFuIGVycm9yLCB0cnkgYWdhaW4gbGF0ZXInXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICd3cm9uZyBjcmVkZW50aWFscydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gJ2ZhaWxlZCBsb2dpbidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXF1ZXN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VBdXRvT2JzZXJ2YWJsZSh7IGlkLCBuYW1lLCBzZXNzaW9uRXhwaXJ5LCBlcnJvciwgbG9naW4gfSlcbn1cblxuXG5sZXQgdXNlclN0b3JlID0gY3JlYXRlVXNlclN0b3JlKClcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LnVzZXJTdG9yZSA9IHVzZXJTdG9yZVxufVxuXG5hdXRvcnVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCB1c2VyU3RvcmUuZXJyb3IpXG59KVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyU3RvcmUiXSwibmFtZXMiOlsibWFrZUF1dG9PYnNlcnZhYmxlIiwicnVuSW5BY3Rpb24iLCJhdXRvcnVuIiwiYXhpb3MiLCJkYXlqcyIsInNlcnZlclVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VUkwiLCJjcmVhdGVVc2VyU3RvcmUiLCJpZCIsIm5hbWUiLCJzZXNzaW9uRXhwaXJ5IiwiZXJyb3IiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0IiwicmVzIiwiZGF0YSIsInVzZXJJZCIsInVzZXJOYW1lIiwiYWRkIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJ1c2VyU3RvcmUiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9