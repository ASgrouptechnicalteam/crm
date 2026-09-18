module.exports = [
"[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/Sonthillu/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$analytics$2f$PageTracker$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/analytics/PageTracker.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$CustomerActivityProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const metadata = {
    title: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].title,
        template: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].name}`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].description,
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].url),
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].url,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].name,
        title: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].description,
        images: [
            {
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].ogImage,
                width: 1200,
                height: 630,
                alt: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].name
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].description,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONFIG"].ogImage
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        sizes: "any"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/app/layout.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "apple-touch-icon",
                        href: "/apple-touch-icon.png"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/app/layout.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/app/layout.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/app/layout.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "min-h-screen bg-surface-muted antialiased",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#main-content",
                        className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2",
                        children: "Skip to main content"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/app/layout.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-screen flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$analytics$2f$PageTracker$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageTracker"], {}, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/app/layout.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/app/layout.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WebsiteAccountProvider"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$CustomerActivityProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CustomerActivityProvider"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                        id: "main-content",
                                        className: "flex-1 pt-16 md:pt-18",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/app/layout.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/app/layout.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/app/layout.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/app/layout.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/app/layout.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/app/layout.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/Sonthillu/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Sonthillu/src/components/analytics/PageTracker.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTracker",
    ()=>PageTracker
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PageTracker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PageTracker() from the server but PageTracker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/components/analytics/PageTracker.tsx", "PageTracker");
}),
"[project]/Sonthillu/src/components/analytics/PageTracker.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTracker",
    ()=>PageTracker
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PageTracker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PageTracker() from the server but PageTracker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/components/analytics/PageTracker.tsx <module evaluation>", "PageTracker");
}),
"[project]/Sonthillu/src/components/analytics/PageTracker.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$analytics$2f$PageTracker$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/analytics/PageTracker.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$analytics$2f$PageTracker$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/analytics/PageTracker.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$analytics$2f$PageTracker$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerActivityProvider",
    ()=>CustomerActivityProvider,
    "useCustomerActivity",
    ()=>useCustomerActivity
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CustomerActivityProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CustomerActivityProvider() from the server but CustomerActivityProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx", "CustomerActivityProvider");
const useCustomerActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useCustomerActivity() from the server but useCustomerActivity is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx", "useCustomerActivity");
}),
"[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerActivityProvider",
    ()=>CustomerActivityProvider,
    "useCustomerActivity",
    ()=>useCustomerActivity
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CustomerActivityProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CustomerActivityProvider() from the server but CustomerActivityProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx <module evaluation>", "CustomerActivityProvider");
const useCustomerActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useCustomerActivity() from the server but useCustomerActivity is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx <module evaluation>", "useCustomerActivity");
}),
"[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$CustomerActivityProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$CustomerActivityProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$CustomerActivityProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebsiteAccountProvider",
    ()=>WebsiteAccountProvider,
    "fetchWebsiteAccountFromStorage",
    ()=>fetchWebsiteAccountFromStorage,
    "useWebsiteAccount",
    ()=>useWebsiteAccount
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const WebsiteAccountProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WebsiteAccountProvider() from the server but WebsiteAccountProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx", "WebsiteAccountProvider");
const fetchWebsiteAccountFromStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call fetchWebsiteAccountFromStorage() from the server but fetchWebsiteAccountFromStorage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx", "fetchWebsiteAccountFromStorage");
const useWebsiteAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useWebsiteAccount() from the server but useWebsiteAccount is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx", "useWebsiteAccount");
}),
"[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebsiteAccountProvider",
    ()=>WebsiteAccountProvider,
    "fetchWebsiteAccountFromStorage",
    ()=>fetchWebsiteAccountFromStorage,
    "useWebsiteAccount",
    ()=>useWebsiteAccount
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const WebsiteAccountProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WebsiteAccountProvider() from the server but WebsiteAccountProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx <module evaluation>", "WebsiteAccountProvider");
const fetchWebsiteAccountFromStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call fetchWebsiteAccountFromStorage() from the server but fetchWebsiteAccountFromStorage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx <module evaluation>", "fetchWebsiteAccountFromStorage");
const useWebsiteAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useWebsiteAccount() from the server but useWebsiteAccount is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx <module evaluation>", "useWebsiteAccount");
}),
"[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Sonthillu/src/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "CRM_CONFIG",
    ()=>CRM_CONFIG,
    "NAVIGATION",
    ()=>NAVIGATION,
    "SITE_CONFIG",
    ()=>SITE_CONFIG
]);
const BRAND = {
    name: 'Sonthillu Constructions',
    shortName: 'Sonthillu',
    tagline: 'Building Your Dream Home',
    brandKey: 'SONTHILLU',
    domain: 'sonthilluconstructions.com',
    email: 'info@sonthilluconstructions.com',
    phone: '+91 77801 67743',
    address: 'Hyderabad, Telangana, India',
    reraNumber: 'RERA No. TPRERA/UC/2024/XXXXX (representative)',
    yearsOfExperience: 5,
    propertiesFacilitated: 500,
    satisfiedCustomers: 1200,
    citiesCovered: [
        'Hyderabad'
    ]
};
const CRM_CONFIG = {
    brandParameter: 'sonthillu',
    apiVersion: 'v1'
};
const SITE_CONFIG = {
    title: 'Sonthillu Constructions',
    description: 'Sonthillu Constructions - Premium residential properties in Hyderabad. Find apartments, villas, and independent houses.',
    url: ("TURBOPACK compile-time value", "https://sonthilluconstructions.com") || 'https://sonthilluconstructions.com',
    ogImage: '/og-image.png'
};
const NAVIGATION = {
    main: [
        {
            label: 'Properties',
            href: '/properties'
        },
        {
            label: 'Projects',
            href: '/projects'
        },
        {
            label: 'Sell Property',
            href: '/sell-property'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Contact',
            href: '/contact'
        }
    ],
    footer: {
        properties: [
            {
                label: 'Apartments',
                href: '/properties?propertyType=APARTMENT'
            },
            {
                label: 'Villas',
                href: '/properties?propertyType=VILLA'
            },
            {
                label: 'Independent Houses',
                href: '/properties?propertyType=INDEPENDENT_HOUSE'
            },
            {
                label: 'Ready to Move',
                href: '/properties?possessionStatus=READY_TO_MOVE'
            }
        ],
        company: [
            {
                label: 'About Us',
                href: '/about'
            },
            {
                label: 'Blog',
                href: '/blog'
            },
            {
                label: 'Contact',
                href: '/contact'
            },
            {
                label: 'FAQs',
                href: '/#faq-section'
            }
        ],
        legal: []
    }
};
}),
];

//# sourceMappingURL=Sonthillu_0_nxt17._.js.map