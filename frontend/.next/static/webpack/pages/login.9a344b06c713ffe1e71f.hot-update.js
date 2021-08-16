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
/* harmony import */ var _mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
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
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post(serverUrl + '/login', {
                email: email,
                password: password
              });

            case 3:
              res = _context.sent;
              data = res.data;
              (0,mobx__WEBPACK_IMPORTED_MODULE_5__.runInAction)(function () {
                id = data.userId;
                name = data.userName;
                sessionExpiry = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().add(60, 'day');
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              if (_context.t0.response) {
                if (_context.t0.response.status == 500) {
                  (0,mobx__WEBPACK_IMPORTED_MODULE_5__.runInAction)(function () {
                    console.log(error.response.data);
                    error = ((0,_mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__.default)("error"), 'server had an error, try again later');
                  });
                } else {
                  (0,mobx__WEBPACK_IMPORTED_MODULE_5__.runInAction)(function () {
                    console.log(_context.t0.response.data);
                    error = ((0,_mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__.default)("error"), 'wrong credentials');
                  });
                }
              } else if (error.request) {
                (0,mobx__WEBPACK_IMPORTED_MODULE_5__.runInAction)(function () {
                  error = ((0,_mnt_e_new_projects_rewose_new_js_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__.default)("error"), 'failed login');
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

  return (0,mobx__WEBPACK_IMPORTED_MODULE_5__.makeAutoObservable)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOWEzNDRiMDZjNzEzZmZlMWU3MWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1LLFNBQVMsR0FBR0MsdUJBQWxCOztBQUVBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQixNQUFJQyxFQUFFLEdBQUcsRUFBVDtBQUNBLE1BQUlDLElBQUksR0FBRyxPQUFYO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBRUEsTUFBTUMsS0FBSztBQUFBLHVTQUFHLGlCQUFPQyxLQUFQLEVBQWNDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVZYixpREFBQSxDQUFXRSxTQUFTLEdBQUcsUUFBdkIsRUFBaUM7QUFDL0NVLGdCQUFBQSxLQUFLLEVBQUxBLEtBRCtDO0FBRS9DQyxnQkFBQUEsUUFBUSxFQUFSQTtBQUYrQyxlQUFqQyxDQUZaOztBQUFBO0FBRUFFLGNBQUFBLEdBRkE7QUFNRUMsY0FBQUEsSUFORixHQU1XRCxHQU5YLENBTUVDLElBTkY7QUFPTmpCLGNBQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkUSxnQkFBQUEsRUFBRSxHQUFHUyxJQUFJLENBQUNDLE1BQVY7QUFDQVQsZ0JBQUFBLElBQUksR0FBR1EsSUFBSSxDQUFDRSxRQUFaO0FBQ0FULGdCQUFBQSxhQUFhLEdBQUdSLDRDQUFLLEdBQUdrQixHQUFSLENBQVksRUFBWixFQUFnQixLQUFoQixDQUFoQjtBQUNILGVBSlUsQ0FBWDtBQVBNO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWNOLGtCQUFJLFlBQUlDLFFBQVIsRUFBa0I7QUFDZCxvQkFBSSxZQUFJQSxRQUFKLENBQWFDLE1BQWIsSUFBdUIsR0FBM0IsRUFBZ0M7QUFDNUJ0QixrQkFBQUEsaURBQVcsQ0FBQyxZQUFNO0FBQ2R1QixvQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLEtBQUssQ0FBQ1UsUUFBTixDQUFlSixJQUEzQjtBQUNBTixvQkFBQUEsS0FBSyx1SkFBRyxzQ0FBSCxDQUFMO0FBQ0gsbUJBSFUsQ0FBWDtBQUlILGlCQUxELE1BS087QUFDSFgsa0JBQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkdUIsb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQUlILFFBQUosQ0FBYUosSUFBekI7QUFDQU4sb0JBQUFBLEtBQUssdUpBQUcsbUJBQUgsQ0FBTDtBQUNILG1CQUhVLENBQVg7QUFJSDtBQUNKLGVBWkQsTUFZTyxJQUFJQSxLQUFLLENBQUNjLE9BQVYsRUFBbUI7QUFDdEJ6QixnQkFBQUEsaURBQVcsQ0FBQyxZQUFNO0FBQ2RXLGtCQUFBQSxLQUFLLHVKQUFHLGNBQUgsQ0FBTDtBQUNILGlCQUZVLENBQVg7QUFHQVksZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQUlDLE9BQWhCO0FBQ0gsZUFMTSxNQUtBO0FBQ0hGLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFJRSxPQUFoQjtBQUNIOztBQWpDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFMZCxLQUFLO0FBQUE7QUFBQTtBQUFBLEtBQVg7O0FBc0NBLFNBQU9kLHdEQUFrQixDQUFDO0FBQUVVLElBQUFBLEVBQUUsRUFBRkEsRUFBRjtBQUFNQyxJQUFBQSxJQUFJLEVBQUpBLElBQU47QUFBWUMsSUFBQUEsYUFBYSxFQUFiQSxhQUFaO0FBQTJCQyxJQUFBQSxLQUFLLEVBQUxBLEtBQTNCO0FBQWtDQyxJQUFBQSxLQUFLLEVBQUxBO0FBQWxDLEdBQUQsQ0FBekI7QUFDSCxDQTdDRDs7QUFnREEsSUFBSWUsU0FBUyxHQUFHcEIsZUFBZSxFQUEvQjtBQUVBLCtEQUFlb0IsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUF1dG9PYnNlcnZhYmxlLCBhY3Rpb24sIHJ1bkluQWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuY29uc3Qgc2VydmVyVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMXG5cbmNvbnN0IGNyZWF0ZVVzZXJTdG9yZSA9ICgpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIGxldCBuYW1lID0gJ2d1ZXN0J1xuICAgIGxldCBzZXNzaW9uRXhwaXJ5ID0gMFxuICAgIGNvbnN0IGVycm9yID0gJydcblxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChzZXJ2ZXJVcmwgKyAnL2xvZ2luJywge1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNcbiAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZCA9IGRhdGEudXNlcklkXG4gICAgICAgICAgICAgICAgbmFtZSA9IGRhdGEudXNlck5hbWVcbiAgICAgICAgICAgICAgICBzZXNzaW9uRXhwaXJ5ID0gZGF5anMoKS5hZGQoNjAsICdkYXknKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICdzZXJ2ZXIgaGFkIGFuIGVycm9yLCB0cnkgYWdhaW4gbGF0ZXInXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICd3cm9uZyBjcmVkZW50aWFscydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gJ2ZhaWxlZCBsb2dpbidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXF1ZXN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VBdXRvT2JzZXJ2YWJsZSh7IGlkLCBuYW1lLCBzZXNzaW9uRXhwaXJ5LCBlcnJvciwgbG9naW4gfSlcbn1cblxuXG5sZXQgdXNlclN0b3JlID0gY3JlYXRlVXNlclN0b3JlKClcblxuZXhwb3J0IGRlZmF1bHQgdXNlclN0b3JlIl0sIm5hbWVzIjpbIm1ha2VBdXRvT2JzZXJ2YWJsZSIsImFjdGlvbiIsInJ1bkluQWN0aW9uIiwiYXhpb3MiLCJkYXlqcyIsInNlcnZlclVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VUkwiLCJjcmVhdGVVc2VyU3RvcmUiLCJpZCIsIm5hbWUiLCJzZXNzaW9uRXhwaXJ5IiwiZXJyb3IiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0IiwicmVzIiwiZGF0YSIsInVzZXJJZCIsInVzZXJOYW1lIiwiYWRkIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJ1c2VyU3RvcmUiXSwic291cmNlUm9vdCI6IiJ9