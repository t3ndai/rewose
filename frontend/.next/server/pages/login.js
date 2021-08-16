"use strict";
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/loginForm.js":
/*!*********************************!*\
  !*** ./components/loginForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/mnt/e/new_projects/rewose_new/js/frontend/components/loginForm.js";


const LoginFormSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email('Invalid email').required('Required'),
  password: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(8, 'password should be 8 characters or more').required('Required')
});

function LoginForm({
  page
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: page && page
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: LoginFormSchema,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
          id: "email",
          name: "email",
          placeholder: "you@mail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
          name: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "password",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
          id: "password",
          type: "password",
          name: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
          name: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: page && page
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ "./data/user.js":
/*!**********************!*\
  !*** ./data/user.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



const serverUrl = "http://localhost:8000";

const createUserStore = () => {
  let id = '';
  let name = 'guest';
  let sessionExpiry = 0;
  let error = '';

  const login = async (email, password) => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(serverUrl + '/login', {
        email,
        password
      });
      const {
        data
      } = res;
      (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
        id = data.userId;
        name = data.userName;
        sessionExpiry = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(60, 'day');
      });
    } catch (err) {
      if (err.response) {
        if (err.response.status == 500) {
          (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
            console.log(error.response.data);
            error = 'server had an error, try again later';
          });
        } else {
          (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
            console.log(err.response.data);
            error = 'wrong credentials';
          });
        }
      } else if (error.request) {
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
          error = 'failed login';
        });
        console.log(err.request);
      } else {
        console.log(err.message);
      }
    }
  };

  return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)({
    id,
    name,
    sessionExpiry,
    error,
    login
  });
};

let userStore = createUserStore();

if (false) {}

(0,mobx__WEBPACK_IMPORTED_MODULE_0__.autorun)(() => {
  console.log('error', userStore.error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userStore);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loginForm */ "./components/loginForm.js");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/user */ "./data/user.js");

var _jsxFileName = "/mnt/e/new_projects/rewose_new/js/frontend/pages/login.js";



function Login({
  page
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loginForm__WEBPACK_IMPORTED_MODULE_1__.default, {
    page: "Login"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQStCLEVBRWxDOztBQUVEUCw2Q0FBTyxDQUFDLE1BQU07QUFDVnNCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJHLFNBQVMsQ0FBQ2YsS0FBL0I7QUFDSCxDQUZNLENBQVA7QUFJQSxpRUFBZWUsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7QUFFQSxTQUFTRSxLQUFULENBQWU7QUFBRS9CLEVBQUFBO0FBQUYsQ0FBZixFQUF5QjtBQUNyQixzQkFBTyw4REFBQywwREFBRDtBQUFXLFFBQUksRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7QUFHRCxpRUFBZStCLEtBQWY7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvbG9naW5Gb3JtLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vZGF0YS91c2VyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiZGF5anNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJ5dXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xuXG5jb25zdCBMb2dpbkZvcm1TY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoJ0ludmFsaWQgZW1haWwnKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLm1pbig4LCAncGFzc3dvcmQgc2hvdWxkIGJlIDggY2hhcmFjdGVycyBvciBtb3JlJykucmVxdWlyZWQoJ1JlcXVpcmVkJylcbn0pXG5cbmZ1bmN0aW9uIExvZ2luRm9ybSh7IHBhZ2UgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3BhZ2UgJiYgcGFnZX08L2gxPlxuICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e0xvZ2luRm9ybVNjaGVtYX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cInlvdUBtYWlsLmNvbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT0nZW1haWwnIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9J3Bhc3N3b3JkJyAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPntwYWdlICYmIHBhZ2V9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm0iLCJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUsIHJ1bkluQWN0aW9uLCBhdXRvcnVuIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuY29uc3Qgc2VydmVyVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMXG5cbmNvbnN0IGNyZWF0ZVVzZXJTdG9yZSA9ICgpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIGxldCBuYW1lID0gJ2d1ZXN0J1xuICAgIGxldCBzZXNzaW9uRXhwaXJ5ID0gMFxuICAgIGxldCBlcnJvciA9ICcnXG5cbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3Qoc2VydmVyVXJsICsgJy9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzXG4gICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWQgPSBkYXRhLnVzZXJJZFxuICAgICAgICAgICAgICAgIG5hbWUgPSBkYXRhLnVzZXJOYW1lXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkV4cGlyeSA9IGRheWpzKCkuYWRkKDYwLCAnZGF5JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSAnc2VydmVyIGhhZCBhbiBlcnJvciwgdHJ5IGFnYWluIGxhdGVyJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSAnd3JvbmcgY3JlZGVudGlhbHMnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9ICdmYWlsZWQgbG9naW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVxdWVzdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBtYWtlQXV0b09ic2VydmFibGUoeyBpZCwgbmFtZSwgc2Vzc2lvbkV4cGlyeSwgZXJyb3IsIGxvZ2luIH0pXG59XG5cblxubGV0IHVzZXJTdG9yZSA9IGNyZWF0ZVVzZXJTdG9yZSgpXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy51c2VyU3RvcmUgPSB1c2VyU3RvcmVcbn1cblxuYXV0b3J1bigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgdXNlclN0b3JlLmVycm9yKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgdXNlclN0b3JlIiwiaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dpbkZvcm1cIjtcbmltcG9ydCB1c2VyU3RvcmUgZnJvbSBcIi4uL2RhdGEvdXNlclwiO1xuXG5mdW5jdGlvbiBMb2dpbih7IHBhZ2UgfSkge1xuICAgIHJldHVybiA8TG9naW5Gb3JtIHBhZ2U9XCJMb2dpblwiIC8+XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJuYW1lcyI6WyJGb3JtaWsiLCJGaWVsZCIsIkZvcm0iLCJFcnJvck1lc3NhZ2UiLCJ5dXAiLCJMb2dpbkZvcm1TY2hlbWEiLCJvYmplY3QiLCJzaGFwZSIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1pbiIsIkxvZ2luRm9ybSIsInBhZ2UiLCJtYWtlQXV0b09ic2VydmFibGUiLCJydW5JbkFjdGlvbiIsImF1dG9ydW4iLCJheGlvcyIsImRheWpzIiwic2VydmVyVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTCIsImNyZWF0ZVVzZXJTdG9yZSIsImlkIiwibmFtZSIsInNlc3Npb25FeHBpcnkiLCJlcnJvciIsImxvZ2luIiwicmVzIiwicG9zdCIsImRhdGEiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsImFkZCIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXNzYWdlIiwidXNlclN0b3JlIiwid2luZG93IiwiTG9naW4iXSwic291cmNlUm9vdCI6IiJ9