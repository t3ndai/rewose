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




var _this = undefined;




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
                    console.log(error.response);
                    _this.error = 'wrong credentials';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYWU2NGYwYTg5MDAwNDBkN2UxYTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1LLFNBQVMsR0FBR0MsdUJBQWxCOztBQUVBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQixNQUFJQyxFQUFFLEdBQUcsRUFBVDtBQUNBLE1BQUlDLElBQUksR0FBRyxPQUFYO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBRUEsTUFBTUMsS0FBSztBQUFBLHVTQUFHLGlCQUFPQyxLQUFQLEVBQWNDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVZYixpREFBQSxDQUFXRSxTQUFTLEdBQUcsUUFBdkIsRUFBaUM7QUFDL0NVLGdCQUFBQSxLQUFLLEVBQUxBLEtBRCtDO0FBRS9DQyxnQkFBQUEsUUFBUSxFQUFSQTtBQUYrQyxlQUFqQyxDQUZaOztBQUFBO0FBRUFFLGNBQUFBLEdBRkE7QUFNRUMsY0FBQUEsSUFORixHQU1XRCxHQU5YLENBTUVDLElBTkY7QUFPTmpCLGNBQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkUSxnQkFBQUEsRUFBRSxHQUFHUyxJQUFJLENBQUNDLE1BQVY7QUFDQVQsZ0JBQUFBLElBQUksR0FBR1EsSUFBSSxDQUFDRSxRQUFaO0FBQ0FULGdCQUFBQSxhQUFhLEdBQUdSLDRDQUFLLEdBQUdrQixHQUFSLENBQVksRUFBWixFQUFnQixLQUFoQixDQUFoQjtBQUNILGVBSlUsQ0FBWDtBQVBNO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWNOLGtCQUFJLFlBQUlDLFFBQVIsRUFBa0I7QUFDZCxvQkFBSSxZQUFJQSxRQUFKLENBQWFDLE1BQWIsSUFBdUIsR0FBM0IsRUFBZ0M7QUFDNUJ0QixrQkFBQUEsaURBQVcsQ0FBQyxZQUFNO0FBQ2R1QixvQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLEtBQUssQ0FBQ1UsUUFBTixDQUFlSixJQUEzQjtBQUNBTixvQkFBQUEsS0FBSyx1SkFBRyxzQ0FBSCxDQUFMO0FBQ0gsbUJBSFUsQ0FBWDtBQUlILGlCQUxELE1BS087QUFDSFgsa0JBQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkdUIsb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFLLENBQUNVLFFBQWxCO0FBQ0EseUJBQUksQ0FBQ1YsS0FBTCxHQUFhLG1CQUFiO0FBQ0gsbUJBSFUsQ0FBWDtBQUlIO0FBQ0osZUFaRCxNQVlPLElBQUlBLEtBQUssQ0FBQ2MsT0FBVixFQUFtQjtBQUN0QnpCLGdCQUFBQSxpREFBVyxDQUFDLFlBQU07QUFDZFcsa0JBQUFBLEtBQUssdUpBQUcsY0FBSCxDQUFMO0FBQ0gsaUJBRlUsQ0FBWDtBQUdBWSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBSUMsT0FBaEI7QUFDSCxlQUxNLE1BS0E7QUFDSEYsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQUlFLE9BQWhCO0FBQ0g7O0FBakNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxkLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFzQ0EsU0FBT2Qsd0RBQWtCLENBQUM7QUFBRVUsSUFBQUEsRUFBRSxFQUFGQSxFQUFGO0FBQU1DLElBQUFBLElBQUksRUFBSkEsSUFBTjtBQUFZQyxJQUFBQSxhQUFhLEVBQWJBLGFBQVo7QUFBMkJDLElBQUFBLEtBQUssRUFBTEEsS0FBM0I7QUFBa0NDLElBQUFBLEtBQUssRUFBTEE7QUFBbEMsR0FBRCxDQUF6QjtBQUNILENBN0NEOztBQWdEQSxJQUFJZSxTQUFTLEdBQUdwQixlQUFlLEVBQS9CO0FBRUEsK0RBQWVvQixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvdXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUsIGFjdGlvbiwgcnVuSW5BY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5jb25zdCBzZXJ2ZXJVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxcblxuY29uc3QgY3JlYXRlVXNlclN0b3JlID0gKCkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgbGV0IG5hbWUgPSAnZ3Vlc3QnXG4gICAgbGV0IHNlc3Npb25FeHBpcnkgPSAwXG4gICAgY29uc3QgZXJyb3IgPSAnJ1xuXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHNlcnZlclVybCArICcvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc1xuICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlkID0gZGF0YS51c2VySWRcbiAgICAgICAgICAgICAgICBuYW1lID0gZGF0YS51c2VyTmFtZVxuICAgICAgICAgICAgICAgIHNlc3Npb25FeHBpcnkgPSBkYXlqcygpLmFkZCg2MCwgJ2RheScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLnN0YXR1cyA9PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gJ3NlcnZlciBoYWQgYW4gZXJyb3IsIHRyeSBhZ2FpbiBsYXRlcidcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnd3JvbmcgY3JlZGVudGlhbHMnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICdmYWlsZWQgbG9naW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVxdWVzdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBtYWtlQXV0b09ic2VydmFibGUoeyBpZCwgbmFtZSwgc2Vzc2lvbkV4cGlyeSwgZXJyb3IsIGxvZ2luIH0pXG59XG5cblxubGV0IHVzZXJTdG9yZSA9IGNyZWF0ZVVzZXJTdG9yZSgpXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTdG9yZSJdLCJuYW1lcyI6WyJtYWtlQXV0b09ic2VydmFibGUiLCJhY3Rpb24iLCJydW5JbkFjdGlvbiIsImF4aW9zIiwiZGF5anMiLCJzZXJ2ZXJVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVVJMIiwiY3JlYXRlVXNlclN0b3JlIiwiaWQiLCJuYW1lIiwic2Vzc2lvbkV4cGlyeSIsImVycm9yIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInJlcyIsImRhdGEiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsImFkZCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXNzYWdlIiwidXNlclN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==