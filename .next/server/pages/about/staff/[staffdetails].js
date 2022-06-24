"use strict";
(() => {
var exports = {};
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 3482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2103);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




// This function gets called at build time
async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch("https://dummyjson.com/users");
    const posts = await res.json();
    // Get the paths we want to pre-render based on posts
    const paths = posts.users.map((userData)=>({
            params: {
                staffdetails: userData.id.toString()
            }
        })
    );
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps(context) {
    const id = context.params.staffdetails;
    // Fetch data from external API
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await res.json();
    // Pass data to the page via props
    return {
        props: {
            data
        },
        revalidate: 10
    };
}
const StaffDetails = ({ data  })=>{
    var ref, ref1, ref2;
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "back-button",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    size: "sm",
                    css: {
                        ml: 250
                    },
                    onClick: ()=>route.push(`/about/staff`)
                    ,
                    children: "back"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "myblog_data",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                        gap: 2,
                        justify: "flex-start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            xs: 6,
                            sm: 3,
                            className: "item-details",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
                                isPressable: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
                                        css: {
                                            p: 0
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card.Image, {
                                            src: data === null || data === void 0 ? void 0 : data.image,
                                            objectFit: "cover",
                                            width: "100%",
                                            height: 500,
                                            alt: data === null || data === void 0 ? void 0 : data.username,
                                            className: "item-details-image"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card.Footer, {
                                        css: {
                                            justifyItems: "flex-start"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                            wrap: "wrap",
                                            justify: "space-between",
                                            align: "center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    b: true,
                                                    children: [
                                                        data === null || data === void 0 ? void 0 : data.firstName,
                                                        " ",
                                                        data === null || data === void 0 ? void 0 : data.lastName
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    css: {
                                                        color: "$accents7",
                                                        fontWeight: "$semibold",
                                                        fontSize: "$sm"
                                                    },
                                                    children: `Department: ${data === null || data === void 0 ? void 0 : (ref = data.company) === null || ref === void 0 ? void 0 : ref.department}`
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-details",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                h3: true,
                                color: "black",
                                css: {
                                    m: 20
                                },
                                children: [
                                    "Name: ",
                                    data === null || data === void 0 ? void 0 : data.firstName,
                                    " ",
                                    data === null || data === void 0 ? void 0 : data.lastName
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                h3: true,
                                color: "black",
                                css: {
                                    m: 20
                                },
                                children: [
                                    "age: ",
                                    data === null || data === void 0 ? void 0 : data.age
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                h3: true,
                                color: "black",
                                css: {
                                    m: 20
                                },
                                children: [
                                    "Company: ",
                                    data === null || data === void 0 ? void 0 : (ref1 = data.company) === null || ref1 === void 0 ? void 0 : ref1.title
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                h3: true,
                                color: "black",
                                css: {
                                    m: 20
                                },
                                children: [
                                    "Department: ",
                                    data === null || data === void 0 ? void 0 : (ref2 = data.company) === null || ref2 === void 0 ? void 0 : ref2.department
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                h3: true,
                                color: "black",
                                css: {
                                    m: 20
                                },
                                children: [
                                    "Gender: ",
                                    data === null || data === void 0 ? void 0 : data.gender
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                h3: true,
                                color: "black",
                                css: {
                                    m: 20
                                },
                                children: [
                                    "Phone: ",
                                    data === null || data === void 0 ? void 0 : data.phone
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                color: "gradient",
                                size: "sm",
                                onClick: ()=>{
                                    return route.push(`/about/staff/${data === null || data === void 0 ? void 0 : data.id}/${data === null || data === void 0 ? void 0 : data.id}`);
                                },
                                children: [
                                    "Post",
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaffDetails);


/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,103], () => (__webpack_exec__(3482)));
module.exports = __webpack_exports__;

})();