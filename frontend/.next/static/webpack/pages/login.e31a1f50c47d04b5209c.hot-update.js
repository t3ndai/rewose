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



var _this = undefined;




var serverUrl = "http://localhost:8000";

var createUserStore = function createUserStore() {
  var id = '';
  var name = 'guest';
  var sessionExpiry = 0;
  error = '';

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
                    console.log(error.response.data);
                    _this.error = 'wrong credentials';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZTMxYTFmNTBjNDdkMDRiNTIwOWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxTQUFTLEdBQUdDLHVCQUFsQjs7QUFFQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7QUFDQSxNQUFJQyxJQUFJLEdBQUcsT0FBWDtBQUNBLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBQyxFQUFBQSxLQUFLLEdBQUcsRUFBUjs7QUFFQSxNQUFNQyxLQUFLO0FBQUEsdVNBQUcsaUJBQU9DLEtBQVAsRUFBY0MsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVliLGlEQUFBLENBQVdFLFNBQVMsR0FBRyxRQUF2QixFQUFpQztBQUMvQ1UsZ0JBQUFBLEtBQUssRUFBTEEsS0FEK0M7QUFFL0NDLGdCQUFBQSxRQUFRLEVBQVJBO0FBRitDLGVBQWpDLENBRlo7O0FBQUE7QUFFQUUsY0FBQUEsR0FGQTtBQU1FQyxjQUFBQSxJQU5GLEdBTVdELEdBTlgsQ0FNRUMsSUFORjtBQU9OakIsY0FBQUEsaURBQVcsQ0FBQyxZQUFNO0FBQ2RRLGdCQUFBQSxFQUFFLEdBQUdTLElBQUksQ0FBQ0MsTUFBVjtBQUNBVCxnQkFBQUEsSUFBSSxHQUFHUSxJQUFJLENBQUNFLFFBQVo7QUFDQVQsZ0JBQUFBLGFBQWEsR0FBR1IsNENBQUssR0FBR2tCLEdBQVIsQ0FBWSxFQUFaLEVBQWdCLEtBQWhCLENBQWhCO0FBQ0gsZUFKVSxDQUFYO0FBUE07QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBY04sa0JBQUksWUFBSUMsUUFBUixFQUFrQjtBQUNkLG9CQUFJLFlBQUlBLFFBQUosQ0FBYUMsTUFBYixJQUF1QixHQUEzQixFQUFnQztBQUM1QnRCLGtCQUFBQSxpREFBVyxDQUFDLFlBQU07QUFDZHVCLG9CQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsS0FBSyxDQUFDVSxRQUFOLENBQWVKLElBQTNCO0FBQ0FOLG9CQUFBQSxLQUFLLEdBQUcsc0NBQVI7QUFDSCxtQkFIVSxDQUFYO0FBSUgsaUJBTEQsTUFLTztBQUNIWCxrQkFBQUEsaURBQVcsQ0FBQyxZQUFNO0FBQ2R1QixvQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLEtBQUssQ0FBQ1UsUUFBTixDQUFlSixJQUEzQjtBQUNBLHlCQUFJLENBQUNOLEtBQUwsR0FBYSxtQkFBYjtBQUNILG1CQUhVLENBQVg7QUFJSDtBQUNKLGVBWkQsTUFZTyxJQUFJQSxLQUFLLENBQUNjLE9BQVYsRUFBbUI7QUFDdEJ6QixnQkFBQUEsaURBQVcsQ0FBQyxZQUFNO0FBQ2RXLGtCQUFBQSxLQUFLLEdBQUcsY0FBUjtBQUNILGlCQUZVLENBQVg7QUFHQVksZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQUlDLE9BQWhCO0FBQ0gsZUFMTSxNQUtBO0FBQ0hGLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFJRSxPQUFoQjtBQUNIOztBQWpDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFMZCxLQUFLO0FBQUE7QUFBQTtBQUFBLEtBQVg7O0FBc0NBLFNBQU9kLHdEQUFrQixDQUFDO0FBQUVVLElBQUFBLEVBQUUsRUFBRkEsRUFBRjtBQUFNQyxJQUFBQSxJQUFJLEVBQUpBLElBQU47QUFBWUMsSUFBQUEsYUFBYSxFQUFiQSxhQUFaO0FBQTJCQyxJQUFBQSxLQUFLLEVBQUxBLEtBQTNCO0FBQWtDQyxJQUFBQSxLQUFLLEVBQUxBO0FBQWxDLEdBQUQsQ0FBekI7QUFDSCxDQTdDRDs7QUFnREEsSUFBSWUsU0FBUyxHQUFHcEIsZUFBZSxFQUEvQjtBQUVBLCtEQUFlb0IsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUF1dG9PYnNlcnZhYmxlLCBhY3Rpb24sIHJ1bkluQWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuY29uc3Qgc2VydmVyVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMXG5cbmNvbnN0IGNyZWF0ZVVzZXJTdG9yZSA9ICgpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIGxldCBuYW1lID0gJ2d1ZXN0J1xuICAgIGxldCBzZXNzaW9uRXhwaXJ5ID0gMFxuICAgIGVycm9yID0gJydcblxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChzZXJ2ZXJVcmwgKyAnL2xvZ2luJywge1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNcbiAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZCA9IGRhdGEudXNlcklkXG4gICAgICAgICAgICAgICAgbmFtZSA9IGRhdGEudXNlck5hbWVcbiAgICAgICAgICAgICAgICBzZXNzaW9uRXhwaXJ5ID0gZGF5anMoKS5hZGQoNjAsICdkYXknKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICdzZXJ2ZXIgaGFkIGFuIGVycm9yLCB0cnkgYWdhaW4gbGF0ZXInXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnd3JvbmcgY3JlZGVudGlhbHMnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICdmYWlsZWQgbG9naW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVxdWVzdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBtYWtlQXV0b09ic2VydmFibGUoeyBpZCwgbmFtZSwgc2Vzc2lvbkV4cGlyeSwgZXJyb3IsIGxvZ2luIH0pXG59XG5cblxubGV0IHVzZXJTdG9yZSA9IGNyZWF0ZVVzZXJTdG9yZSgpXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTdG9yZSJdLCJuYW1lcyI6WyJtYWtlQXV0b09ic2VydmFibGUiLCJhY3Rpb24iLCJydW5JbkFjdGlvbiIsImF4aW9zIiwiZGF5anMiLCJzZXJ2ZXJVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVVJMIiwiY3JlYXRlVXNlclN0b3JlIiwiaWQiLCJuYW1lIiwic2Vzc2lvbkV4cGlyeSIsImVycm9yIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInJlcyIsImRhdGEiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsImFkZCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXNzYWdlIiwidXNlclN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==