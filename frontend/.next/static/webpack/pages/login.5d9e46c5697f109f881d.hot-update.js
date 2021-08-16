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
(0,mobx__WEBPACK_IMPORTED_MODULE_4__.autorun)(function () {
  console.log('error', userStore.error);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNWQ5ZTQ2YzU2OTdmMTA5Zjg4MWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxTQUFTLEdBQUdDLHVCQUFsQjs7QUFFQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7QUFDQSxNQUFJQyxJQUFJLEdBQUcsT0FBWDtBQUNBLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLE1BQU1DLEtBQUs7QUFBQSx1U0FBRyxpQkFBT0MsS0FBUCxFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFWWIsaURBQUEsQ0FBV0UsU0FBUyxHQUFHLFFBQXZCLEVBQWlDO0FBQy9DVSxnQkFBQUEsS0FBSyxFQUFMQSxLQUQrQztBQUUvQ0MsZ0JBQUFBLFFBQVEsRUFBUkE7QUFGK0MsZUFBakMsQ0FGWjs7QUFBQTtBQUVBRSxjQUFBQSxHQUZBO0FBTUVDLGNBQUFBLElBTkYsR0FNV0QsR0FOWCxDQU1FQyxJQU5GO0FBT05sQixjQUFBQSxpREFBVyxDQUFDLFlBQU07QUFDZFMsZ0JBQUFBLEVBQUUsR0FBR1MsSUFBSSxDQUFDQyxNQUFWO0FBQ0FULGdCQUFBQSxJQUFJLEdBQUdRLElBQUksQ0FBQ0UsUUFBWjtBQUNBVCxnQkFBQUEsYUFBYSxHQUFHUiw0Q0FBSyxHQUFHa0IsR0FBUixDQUFZLEVBQVosRUFBZ0IsS0FBaEIsQ0FBaEI7QUFDSCxlQUpVLENBQVg7QUFQTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFjTixrQkFBSSxZQUFJQyxRQUFSLEVBQWtCO0FBQ2Qsb0JBQUksWUFBSUEsUUFBSixDQUFhQyxNQUFiLElBQXVCLEdBQTNCLEVBQWdDO0FBQzVCdkIsa0JBQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkd0Isb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFLLENBQUNVLFFBQU4sQ0FBZUosSUFBM0I7QUFDQU4sb0JBQUFBLEtBQUssR0FBRyxzQ0FBUjtBQUNILG1CQUhVLENBQVg7QUFJSCxpQkFMRCxNQUtPO0FBQ0haLGtCQUFBQSxpREFBVyxDQUFDLFlBQU07QUFDZHdCLG9CQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFJSCxRQUFKLENBQWFKLElBQXpCO0FBQ0FOLG9CQUFBQSxLQUFLLEdBQUcsbUJBQVI7QUFDSCxtQkFIVSxDQUFYO0FBSUg7QUFDSixlQVpELE1BWU8sSUFBSUEsS0FBSyxDQUFDYyxPQUFWLEVBQW1CO0FBQ3RCMUIsZ0JBQUFBLGlEQUFXLENBQUMsWUFBTTtBQUNkWSxrQkFBQUEsS0FBSyxHQUFHLGNBQVI7QUFDSCxpQkFGVSxDQUFYO0FBR0FZLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFJQyxPQUFoQjtBQUNILGVBTE0sTUFLQTtBQUNIRixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBSUUsT0FBaEI7QUFDSDs7QUFqQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTGQsS0FBSztBQUFBO0FBQUE7QUFBQSxLQUFYOztBQXNDQSxTQUFPZCx3REFBa0IsQ0FBQztBQUFFVSxJQUFBQSxFQUFFLEVBQUZBLEVBQUY7QUFBTUMsSUFBQUEsSUFBSSxFQUFKQSxJQUFOO0FBQVlDLElBQUFBLGFBQWEsRUFBYkEsYUFBWjtBQUEyQkMsSUFBQUEsS0FBSyxFQUFMQSxLQUEzQjtBQUFrQ0MsSUFBQUEsS0FBSyxFQUFMQTtBQUFsQyxHQUFELENBQXpCO0FBQ0gsQ0E3Q0Q7O0FBZ0RBLElBQU1lLFNBQVMsR0FBR3BCLGVBQWUsRUFBakM7QUFFQVAsNkNBQU8sQ0FBQyxZQUFNO0FBQ1Z1QixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRyxTQUFTLENBQUNoQixLQUEvQjtBQUNILENBRk0sQ0FBUDs7QUFLQSxJQUFJLE1BQStCO0FBQy9CaUIsRUFBQUEsTUFBTSxDQUFDRCxTQUFQLEdBQW1CQSxTQUFuQjtBQUNIOztBQUVELCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvdXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUsIHJ1bkluQWN0aW9uLCBhdXRvcnVuIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuY29uc3Qgc2VydmVyVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMXG5cbmNvbnN0IGNyZWF0ZVVzZXJTdG9yZSA9ICgpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIGxldCBuYW1lID0gJ2d1ZXN0J1xuICAgIGxldCBzZXNzaW9uRXhwaXJ5ID0gMFxuICAgIGxldCBlcnJvciA9ICcnXG5cbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3Qoc2VydmVyVXJsICsgJy9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzXG4gICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWQgPSBkYXRhLnVzZXJJZFxuICAgICAgICAgICAgICAgIG5hbWUgPSBkYXRhLnVzZXJOYW1lXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkV4cGlyeSA9IGRheWpzKCkuYWRkKDYwLCAnZGF5JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSAnc2VydmVyIGhhZCBhbiBlcnJvciwgdHJ5IGFnYWluIGxhdGVyJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSAnd3JvbmcgY3JlZGVudGlhbHMnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICdmYWlsZWQgbG9naW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVxdWVzdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBtYWtlQXV0b09ic2VydmFibGUoeyBpZCwgbmFtZSwgc2Vzc2lvbkV4cGlyeSwgZXJyb3IsIGxvZ2luIH0pXG59XG5cblxuY29uc3QgdXNlclN0b3JlID0gY3JlYXRlVXNlclN0b3JlKClcblxuYXV0b3J1bigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgdXNlclN0b3JlLmVycm9yKVxufSlcblxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cudXNlclN0b3JlID0gdXNlclN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTdG9yZSJdLCJuYW1lcyI6WyJtYWtlQXV0b09ic2VydmFibGUiLCJydW5JbkFjdGlvbiIsImF1dG9ydW4iLCJheGlvcyIsImRheWpzIiwic2VydmVyVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTCIsImNyZWF0ZVVzZXJTdG9yZSIsImlkIiwibmFtZSIsInNlc3Npb25FeHBpcnkiLCJlcnJvciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInBvc3QiLCJyZXMiLCJkYXRhIiwidXNlcklkIiwidXNlck5hbWUiLCJhZGQiLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwibWVzc2FnZSIsInVzZXJTdG9yZSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=