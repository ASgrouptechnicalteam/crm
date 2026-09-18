module.exports = [
"[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyCardActions",
    ()=>PropertyCardActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$CustomerActivityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function PropertyCardActions({ propertyId, propertyTitle, surface = 'property_card' }) {
    const { isShortlisted, toggleShortlist, isCompared, addCompare, compare, compareLimit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$CustomerActivityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCustomerActivity"])();
    const shortlisted = isShortlisted(propertyId);
    const compared = isCompared(propertyId);
    const handleCompare = ()=>{
        if (compared) return;
        addCompare(propertyId, surface);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 border-t border-border px-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>toggleShortlist(propertyId, surface),
                "aria-pressed": shortlisted,
                "aria-label": shortlisted ? `Remove ${propertyTitle} from shortlist` : `Add ${propertyTitle} to shortlist`,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors', shortlisted ? 'bg-brand-gold/15 text-brand-gold-dark' : 'bg-surface-muted text-text-secondary hover:bg-border'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: shortlisted ? 'currentColor' : 'none',
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    shortlisted ? 'Shortlisted' : 'Shortlist'
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleCompare,
                disabled: compared,
                "aria-pressed": compared,
                "aria-label": compared ? `${propertyTitle} already added to compare` : `Add ${propertyTitle} to compare`,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors', compared ? 'bg-brand-navy text-white' : 'bg-surface-muted text-text-secondary hover:bg-border'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    compared ? 'Compared' : 'Compare'
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            compared && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-auto text-xs text-text-muted",
                children: [
                    compare.length,
                    "/",
                    compareLimit
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecommendationsSection",
    ()=>RecommendationsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$PropertyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/search/PropertyCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$recommendations$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/recommendations/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$recommendations$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/recommendations/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/analytics/activity.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function RecommendationsSection({ groups, surface }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        for (const group of groups){
            for (const item of group.items){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$recommendations$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackRecommendationEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$recommendations$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRecommendationEvent"])('recommendation_impression', {
                    propertyId: item.property.id,
                    groupType: group.type,
                    rankWithinGroup: item.rankWithinGroup,
                    surface
                }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackClientActivity"])({
                    eventName: 'recommendation_impression',
                    propertyId: item.property.id,
                    metadata: {
                        groupType: group.type,
                        rankWithinGroup: item.rankWithinGroup,
                        surface
                    }
                });
            }
        }
    // Fire once per rendered result.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        groups
    ]);
    if (!groups || groups.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: groups.map((group)=>{
            const labels = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$recommendations$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GROUP_LABELS"][group.type];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": `rec-${group.type}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: `rec-${group.type}`,
                        className: "text-xl font-semibold text-brand-navy",
                        style: {
                            fontFamily: 'var(--font-family-display)'
                        },
                        children: labels.title
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 mb-4 text-sm text-text-secondary",
                        children: labels.description
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                        children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$PropertyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                        property: item.property,
                                        variant: "recommendation",
                                        onRecommendationClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$recommendations$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackRecommendationEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$recommendations$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRecommendationEvent"])('recommendation_click', {
                                                propertyId: item.property.id,
                                                groupType: group.type,
                                                rankWithinGroup: item.rankWithinGroup,
                                                surface
                                            }));
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackClientActivity"])({
                                                eventName: 'recommendation_click',
                                                propertyId: item.property.id,
                                                metadata: {
                                                    groupType: group.type,
                                                    rankWithinGroup: item.rankWithinGroup,
                                                    surface
                                                }
                                            });
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this),
                                    item.reasons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs font-medium text-brand-navy line-clamp-2",
                                        children: item.reasons[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx",
                                        lineNumber: 92,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, item.property.id, true, {
                                fileName: "[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                ]
            }, group.type, true, {
                fileName: "[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/search/PropertiesPageClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertiesPageClient",
    ()=>PropertiesPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SearchResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/search/SearchResults.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$ResultStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/search/ResultStates.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/dto.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function PropertiesPageInner() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchParamsToQuery"])(searchParams);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SearchResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchResults"], {
        initialQuery: query
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/search/PropertiesPageClient.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function PropertiesPageClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$ResultStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertyGridSkeleton"], {}, void 0, false, {
            fileName: "[project]/Sonthillu/src/components/search/PropertiesPageClient.tsx",
            lineNumber: 17,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PropertiesPageInner, {}, void 0, false, {
            fileName: "[project]/Sonthillu/src/components/search/PropertiesPageClient.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/search/PropertiesPageClient.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/search/PropertyCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyCard",
    ()=>PropertyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/ui/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$PropertyCardActions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/customer/PropertyCardActions.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function PropertyCard({ property, variant = 'default', onRecommendationClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-200 hover:shadow-lg ${variant === 'recommendation' ? 'ring-1 ring-brand-navy/10' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/properties/${property.id}`,
                className: "block",
                onClick: variant === 'recommendation' ? onRecommendationClick : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[4/3] overflow-hidden bg-border",
                        children: [
                            property.primaryImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: property.primaryImage,
                                alt: property.title,
                                fill: true,
                                className: "object-cover transition-transform duration-300 group-hover:scale-105",
                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-12 w-12 text-text-muted",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-3 top-3 flex flex-col gap-1.5",
                                children: [
                                    variant === 'recommendation' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "navy",
                                        className: "bg-brand-gold text-brand-navy",
                                        children: "Recommended"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "navy",
                                        children: [
                                            property.propertyType === 'APARTMENT' && 'Apartment',
                                            property.propertyType === 'VILLA' && 'Villa',
                                            property.propertyType === 'INDEPENDENT_HOUSE' && 'Independent House'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    property.listingType === 'RESALE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "gold",
                                        children: "Resale"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            property.possessionStatus === 'READY_TO_MOVE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-3 top-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "success",
                                    children: "Ready to Move"
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-1 text-xl font-bold text-brand-navy",
                                children: property.priceFormatted
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-1 text-base font-semibold text-text-primary line-clamp-1 group-hover:text-brand-navy transition-colors",
                                children: property.title
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 flex items-center gap-1 text-sm text-text-secondary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4 shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-clamp-1",
                                        children: property.location
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3 border-t border-border pt-3 text-xs text-text-secondary",
                                children: [
                                    property.bedrooms != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-3.5 w-3.5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this),
                                            property.bedrooms,
                                            " BHK"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    property.bathrooms != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-3.5 w-3.5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            property.bathrooms,
                                            " Bath"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-3.5 w-3.5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                                }, void 0, false, {
                                                    fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            property.areaFormatted
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    property.facing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-3.5 w-3.5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                                }, void 0, false, {
                                                    fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            property.facing
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$customer$2f$PropertyCardActions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertyCardActions"], {
                propertyId: property.id,
                propertyTitle: property.title
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/PropertyCard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/search/ResultStates.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyGridEmpty",
    ()=>PropertyGridEmpty,
    "PropertyGridError",
    ()=>PropertyGridError,
    "PropertyGridSkeleton",
    ()=>PropertyGridSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
/**
 * Skeleton card for loading state.
 */ function PropertyCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        hover: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-[4/3] animate-pulse bg-border"
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-1/3 animate-pulse rounded bg-border"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-5 w-3/4 animate-pulse rounded bg-border"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-1/2 animate-pulse rounded bg-border"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 pt-2 border-t border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-16 animate-pulse rounded bg-border"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-16 animate-pulse rounded bg-border"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-20 animate-pulse rounded bg-border"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function PropertyGridSkeleton({ count = 6 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        children: Array.from({
            length: count
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PropertyCardSkeleton, {}, i, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function PropertyGridEmpty({ query, onClearFilters, isGlobalEmpty = false }) {
    if (isGlobalEmpty) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-8 w-8 text-brand-navy",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-text-primary",
                    children: "No active properties available"
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 max-w-md mx-auto text-text-secondary",
                    children: "We currently don't have any active property listings matching our published inventory. Please check back later or contact our sales team for upcoming opportunities."
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-8 w-8 text-brand-navy",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-text-primary",
                children: "No exact matches found"
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-md mx-auto text-text-secondary",
                children: "We couldn't find properties matching all of your current preferences. Try widening your budget, location, property type, or BHK criteria."
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-center gap-3",
                children: onClearFilters ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClearFilters,
                    className: "rounded-lg bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark",
                    children: "Clear all filters"
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/properties",
                    className: "rounded-lg bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark",
                    children: "View All Properties"
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
function PropertyGridError({ message, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-error/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-8 w-8 text-error",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-text-primary",
                children: message === 'CRM_UNAVAILABLE' ? 'System Temporarily Unavailable' : 'Something went wrong'
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-md mx-auto text-text-secondary",
                children: message === 'CRM_UNAVAILABLE' ? 'We are currently unable to reach the property inventory system. Please try again in a few moments.' : message || 'We encountered an error while fetching properties. Please try again.'
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onRetry,
                    className: "rounded-lg border-2 border-brand-navy px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white",
                    children: "Try Again"
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/ResultStates.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/search/SearchFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileFilterBar",
    ()=>MobileFilterBar,
    "SearchFiltersPanel",
    ()=>SearchFiltersPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/types/search.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$property$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/types/property.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/dto.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function SearchFiltersPanel({ filters, onFiltersChange, onApply, onReset, resultCount }) {
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const updateFilter = (key, value)=>{
        onFiltersChange({
            ...filters,
            [key]: value
        });
    };
    const hasActiveFilters = filters.location || filters.propertyType || filters.listingType !== 'ANY' || filters.minBudget || filters.maxBudget || filters.possessionStatus !== 'ANY';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-border px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold text-text-primary",
                                children: "Filters"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onReset,
                                className: "text-xs text-brand-navy hover:underline",
                                children: "Clear all"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    resultCount !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-text-muted",
                        children: [
                            resultCount,
                            " ",
                            resultCount === 1 ? 'property' : 'properties'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "filter-location",
                                className: "mb-2 block text-sm font-medium text-text-primary",
                                children: "Location"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "filter-location",
                                type: "text",
                                placeholder: "e.g. Miyapur, Hyderabad",
                                value: filters.location,
                                onChange: (e)=>updateFilter('location', e.target.value),
                                className: "w-full rounded-lg border border-border bg-neutral-50 px-3 py-2.5 text-sm text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "filter-property-type",
                                className: "mb-2 block text-sm font-medium text-text-primary",
                                children: "Property Type"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "filter-property-type",
                                value: filters.propertyType,
                                onChange: (e)=>updateFilter('propertyType', e.target.value),
                                className: "w-full appearance-none rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-text-primary focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "All Types"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROPERTY_TYPE_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: opt.value,
                                            children: opt.label
                                        }, opt.value, false, {
                                            fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "filter-bedrooms",
                                className: "mb-2 block text-sm font-medium text-text-primary",
                                children: "BHK"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "filter-bedrooms",
                                value: filters.bedrooms,
                                onChange: (e)=>updateFilter('bedrooms', e.target.value),
                                className: "w-full appearance-none rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-text-primary focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$property$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BHK_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: opt.value,
                                            children: opt.label
                                        }, opt.value, false, {
                                            fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-sm font-medium text-text-primary",
                                children: "Listing Type"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LISTING_TYPE_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>updateFilter('listingType', opt.value),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors', filters.listingType === opt.value ? 'border-brand-navy bg-brand-navy text-white' : 'border-border bg-white text-text-secondary hover:border-brand-navy/50'),
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-sm font-medium text-text-primary",
                                children: "Budget"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Min (e.g., 50L)",
                                        value: filters.minBudget,
                                        onChange: (e)=>updateFilter('minBudget', e.target.value),
                                        className: "flex-1 rounded-lg border border-border px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy/20"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center text-text-muted",
                                        children: "–"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Max (e.g., 1Cr)",
                                        value: filters.maxBudget,
                                        onChange: (e)=>updateFilter('maxBudget', e.target.value),
                                        className: "flex-1 rounded-lg border border-border px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy/20"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex flex-wrap gap-1.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUDGET_PRESETS"].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            onFiltersChange({
                                                ...filters,
                                                minBudget: preset.min ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(preset.min).replace('₹', '') : '',
                                                maxBudget: preset.max ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(preset.max).replace('₹', '') : ''
                                            });
                                        },
                                        className: "rounded-full border border-border bg-surface-muted px-2.5 py-1 text-xs text-text-secondary transition-colors hover:border-brand-navy/50 hover:text-brand-navy",
                                        children: preset.label
                                    }, preset.label, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-sm font-medium text-text-primary",
                                children: "Availability"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    'ANY',
                                    'READY_TO_MOVE',
                                    'UNDER_CONSTRUCTION'
                                ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>updateFilter('possessionStatus', status),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors', filters.possessionStatus === status ? 'border-brand-navy bg-brand-navy text-white' : 'border-border bg-white text-text-secondary hover:border-brand-navy/50'),
                                        children: [
                                            status === 'ANY' && 'Any',
                                            status === 'READY_TO_MOVE' && 'Ready',
                                            status === 'UNDER_CONSTRUCTION' && 'Under Construction'
                                        ]
                                    }, status, true, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: onApply,
                        className: "w-full",
                        size: "lg",
                        children: "Apply Filters"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function MobileFilterBar({ resultCount, onOpenFilters, onOpenSort, sortBy }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 border-b border-border bg-white px-4 py-3 lg:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onOpenFilters,
                className: "flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-brand-navy/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    "Filters"
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onOpenSort,
                className: "flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-brand-navy/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13-6L16.5 19m0 0L12 14.5m4.5 4.5V7.5"
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    "Sort"
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            resultCount !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-text-muted",
                children: resultCount
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
                lineNumber: 269,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/SearchFilters.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/search/SearchResults.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchResults",
    ()=>SearchResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$PropertyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/search/PropertyCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SearchFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/search/SearchFilters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SortDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/search/SortDropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$ResultStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/search/ResultStates.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$recommendations$2f$RecommendationsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/recommendations/RecommendationsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/dto.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/analytics/activity.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$searchClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/searchClient.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function SearchResults({ initialQuery }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Navigation transition state
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    // Local interactive state
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryToFilters"])(initialQuery));
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialQuery.sortBy || 'relevance');
    const [activeQuery, setActiveQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    // Search results (now fetched client-side, not passed down from a server parent)
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [recommendations, setRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGlobalEmpty, setIsGlobalEmpty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Mobile UI state
    const [isFiltersOpen, setIsFiltersOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSortOpen, setIsSortOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Re-sync when the URL-driven query changes (e.g. browser back/forward)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setFilters((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryToFilters"])(initialQuery));
        setSortBy(initialQuery.sortBy || 'relevance');
        setActiveQuery(initialQuery);
    }, [
        initialQuery
    ]);
    // Fetch results whenever the active query changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        setIsLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$searchClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["executeSearch"])(activeQuery).then((result)=>{
            if (cancelled) return;
            setProperties(result.properties);
            setTotal(result.total);
            setRecommendations(result.recommendations);
            setError(result.error);
            setIsGlobalEmpty(result.isGlobalEmpty);
            setIsLoading(false);
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        activeQuery
    ]);
    // Update the URL (for shareable/bookmarkable state) and re-run the search
    const updateUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newQuery)=>{
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryToSearchParams"])(newQuery);
        const searchString = params.toString();
        startTransition(()=>{
            router.push(`/properties${searchString ? `?${searchString}` : ''}`, {
                scroll: false
            });
        });
        setActiveQuery(newQuery);
    }, [
        router
    ]);
    // Apply filters
    const handleApplyFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const newQuery = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filtersToQuery"])(filters),
            sortBy,
            page: 1,
            limit: 12
        };
        updateUrl(newQuery);
        setIsFiltersOpen(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackClientActivity"])({
            eventName: 'search_submitted',
            searchContext: newQuery
        });
    }, [
        filters,
        sortBy,
        updateUrl
    ]);
    // Reset filters
    const handleResetFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const newQuery = {
            sortBy: 'relevance',
            page: 1,
            limit: 12
        };
        updateUrl(newQuery);
    }, [
        updateUrl
    ]);
    // Sort change
    const handleSortChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newSort)=>{
        setSortBy(newSort);
        const newQuery = {
            ...activeQuery,
            sortBy: newSort,
            page: 1
        };
        updateUrl(newQuery);
    }, [
        activeQuery,
        updateUrl
    ]);
    // Build active filter count
    const activeFilterCount = [
        filters.location,
        filters.propertyType,
        filters.listingType !== 'ANY' ? filters.listingType : null,
        filters.minBudget,
        filters.maxBudget,
        filters.possessionStatus !== 'ANY' ? filters.possessionStatus : null
    ].filter(Boolean).length;
    const showSkeleton = isLoading || isPending;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[60vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SearchFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileFilterBar"], {
                resultCount: properties.length,
                onOpenFilters: ()=>setIsFiltersOpen(true),
                onOpenSort: ()=>setIsSortOpen(true),
                sortBy: sortBy
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "hidden w-72 shrink-0 lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SearchFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchFiltersPanel"], {
                                filters: filters,
                                onFiltersChange: setFilters,
                                onApply: handleApplyFilters,
                                onReset: handleResetFilters,
                                resultCount: properties.length
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 hidden items-center justify-between lg:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-semibold text-text-primary",
                                                children: activeQuery.location ? `Properties in ${activeQuery.location}` : 'All Properties'
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm text-text-secondary",
                                                children: [
                                                    total,
                                                    " ",
                                                    total === 1 ? 'property' : 'properties',
                                                    " found",
                                                    activeQuery.propertyType && ` · ${activeQuery.propertyType}`,
                                                    activeQuery.listingType && activeQuery.listingType !== 'ANY' && ` · ${activeQuery.listingType}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SortDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortDropdown"], {
                                        value: sortBy,
                                        onChange: handleSortChange
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$ResultStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertyGridError"], {
                                message: error,
                                onRetry: ()=>setActiveQuery({
                                        ...activeQuery
                                    })
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this) : showSkeleton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$ResultStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertyGridSkeleton"], {}, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this) : properties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$ResultStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertyGridEmpty"], {
                                query: activeQuery,
                                onClearFilters: handleResetFilters,
                                isGlobalEmpty: isGlobalEmpty
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                                children: properties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$PropertyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                        property: property
                                    }, property.id, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            !showSkeleton && !error && properties.length > 0 && properties.length === (activeQuery.limit || 12) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-text-muted",
                                    children: "More properties may be available. Pagination will be implemented in a future update."
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this),
                            !showSkeleton && !error && recommendations && recommendations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: properties.length === 0 ? 'mt-4' : 'mt-12 pt-12 border-t border-border',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$recommendations$2f$RecommendationsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecommendationsSection"], {
                                    groups: recommendations,
                                    surface: "search"
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            isFiltersOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-text-primary/50",
                        onClick: ()=>setIsFiltersOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-0 left-0 w-full max-w-sm overflow-y-auto bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-border px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-text-primary",
                                        children: "Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsFiltersOpen(false),
                                        className: "rounded-lg p-1 text-text-muted hover:bg-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SearchFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchFiltersPanel"], {
                                    filters: filters,
                                    onFiltersChange: setFilters,
                                    onApply: handleApplyFilters,
                                    onReset: handleResetFilters,
                                    resultCount: properties.length
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$search$2f$SortDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileSortSheet"], {
                isOpen: isSortOpen,
                onClose: ()=>setIsSortOpen(false),
                value: sortBy,
                onChange: handleSortChange
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/SearchResults.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/search/SortDropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileSortSheet",
    ()=>MobileSortSheet,
    "SortDropdown",
    ()=>SortDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/types/search.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SortDropdown({ value, onChange, className }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_OPTIONS"].find((opt)=>opt.value === value)?.label || 'Sort';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-brand-navy/50",
                "aria-haspopup": "listbox",
                "aria-expanded": isOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13-6L16.5 19m0 0L12 14.5m4.5 4.5V7.5"
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    selectedLabel,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-4 w-4 transition-transform', isOpen && 'rotate-180'),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-border bg-white shadow-lg",
                role: "listbox",
                "aria-label": "Sort options",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_OPTIONS"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "option",
                        "aria-selected": value === option.value,
                        onClick: ()=>{
                            onChange(option.value);
                            setIsOpen(false);
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors', value === option.value ? 'bg-brand-navy/5 text-brand-navy font-medium' : 'text-text-primary hover:bg-surface-muted'),
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function MobileSortSheet({ isOpen, onClose, value, onChange }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.body.style.overflow = 'unset';
        };
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 lg:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-text-primary/50",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 rounded-t-2xl bg-white p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text-primary",
                                children: "Sort by"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "rounded-lg p-1 text-text-muted hover:bg-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_OPTIONS"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onChange(option.value);
                                    onClose();
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center rounded-lg px-4 py-3 text-left text-sm transition-colors', value === option.value ? 'bg-brand-navy/10 text-brand-navy font-medium' : 'text-text-primary hover:bg-surface-muted'),
                                children: [
                                    value === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "mr-3 h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M5 13l4 4L19 7"
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    option.label
                                ]
                            }, option.value, true, {
                                fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/search/SortDropdown.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/ui/Badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
const variantStyles = {
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    error: 'bg-error/10 text-error',
    info: 'bg-info/10 text-info',
    navy: 'bg-brand-navy/10 text-brand-navy',
    gold: 'bg-brand-gold/10 text-brand-gold',
    default: 'bg-border text-text-secondary'
};
function Badge({ children, variant = 'default', className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', variantStyles[variant], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/ui/Badge.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/ui/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardBody",
    ()=>CardBody,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardImage",
    ()=>CardImage,
    "CardMedia",
    ()=>CardMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ children, className, hover = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden rounded-xl bg-white shadow-md', hover && 'transition-all duration-200 hover:shadow-lg', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/ui/Card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function CardImage({ src, alt, className, aspectRatio = 'video' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden bg-border', aspectRatio === 'video' ? 'aspect-[4/3]' : 'aspect-square', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        }, void 0, false, {
            fileName: "[project]/Sonthillu/src/components/ui/Card.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/ui/Card.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
const CardMedia = CardImage;
function CardBody({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-4 sm:p-5', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/ui/Card.tsx",
        lineNumber: 56,
        columnNumber: 10
    }, this);
}
function CardHeader({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-b border-border px-4 py-3 sm:px-5', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/ui/Card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-t border-border px-4 py-3 sm:px-5', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/ui/Card.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/lib/analytics/anonId.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrCreateAnonId",
    ()=>getOrCreateAnonId
]);
const ANON_ID_STORAGE_KEY = 'sonthillu_anon_id';
function getOrCreateAnonId() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/Sonthillu/src/lib/recommendations/analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RECOMMENDATION_EVENT_NAME",
    ()=>RECOMMENDATION_EVENT_NAME,
    "buildRecommendationEvent",
    ()=>buildRecommendationEvent,
    "readRecentlyViewedIds",
    ()=>readRecentlyViewedIds,
    "recordRecentlyViewed",
    ()=>recordRecentlyViewed,
    "trackRecommendationEvent",
    ()=>trackRecommendationEvent
]);
const RECOMMENDATION_EVENT_NAME = 'sonthillu:recommendation';
const RECENTLY_VIEWED_KEY = 'sonthillu:recentlyViewed';
const DEFAULT_RECENTLY_VIEWED_LIMIT = 8;
function buildRecommendationEvent(eventType, input) {
    return {
        ...input,
        eventType,
        timestamp: new Date().toISOString()
    };
}
function trackRecommendationEvent(payload) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function readRecentlyViewedIds(max = DEFAULT_RECENTLY_VIEWED_LIMIT) {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function recordRecentlyViewed(propertyId, max = DEFAULT_RECENTLY_VIEWED_LIMIT) {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const ids = undefined;
}
}),
"[project]/Sonthillu/src/lib/recommendations/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GROUP_LABELS",
    ()=>GROUP_LABELS,
    "GROUP_ORDER",
    ()=>GROUP_ORDER,
    "MAX_ITEMS_PER_GROUP",
    ()=>MAX_ITEMS_PER_GROUP,
    "MAX_NO_RESULT_ITEMS",
    ()=>MAX_NO_RESULT_ITEMS,
    "VALID_ALTERNATIVE_TYPES",
    ()=>VALID_ALTERNATIVE_TYPES
]);
const MAX_ITEMS_PER_GROUP = 4;
const MAX_NO_RESULT_ITEMS = 4;
const VALID_ALTERNATIVE_TYPES = {
    APARTMENT: [],
    VILLA: [
        'INDEPENDENT_HOUSE'
    ],
    INDEPENDENT_HOUSE: [
        'VILLA'
    ]
};
const GROUP_ORDER = [
    'SIMILAR',
    'CLOSE_MATCH',
    'ABOVE_BUDGET',
    'ALTERNATIVE_TYPE',
    'NEARBY',
    'RECENTLY_VIEWED',
    'POPULAR',
    'NO_RESULT_RECOVERY'
];
const GROUP_LABELS = {
    SIMILAR: {
        title: 'Similar properties in your preferred location',
        description: 'Properties matching your primary criteria with only minor differences.'
    },
    CLOSE_MATCH: {
        title: 'Close matches',
        description: 'Strong matches that differ on one or two secondary criteria.'
    },
    ABOVE_BUDGET: {
        title: 'Properties slightly above your budget',
        description: 'These meet your other criteria but exceed your stated budget.'
    },
    ALTERNATIVE_TYPE: {
        title: 'Alternative property types you may consider',
        description: 'A different property type that still meets your other requirements.'
    },
    NEARBY: {
        title: 'Nearby properties in the same city',
        description: 'In your city or locality, with slightly different specifics.'
    },
    RECENTLY_VIEWED: {
        title: 'Recently viewed',
        description: 'Properties you looked at earlier in this session.'
    },
    POPULAR: {
        title: 'Popular with other buyers',
        description: 'Frequently viewed and shortlisted properties in our portfolio.'
    },
    NO_RESULT_RECOVERY: {
        title: 'Here are some properties you may be interested in',
        description: "While we didn't find exact matches, these alternatives might catch your eye."
    }
};
}),
"[project]/Sonthillu/src/lib/searchClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeSearch",
    ()=>executeSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$anonId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/analytics/anonId.ts [app-ssr] (ecmascript)");
;
;
const TOKEN_STORAGE_KEY = 'sonthillu_website_token';
function getStoredToken() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function getCrmUrl() {
    return ("TURBOPACK compile-time value", "https://crm-backend-1gyt.onrender.com/api/v1") || 'http://localhost:3000/api/v1';
}
function getCrmApiKey() {
    return ("TURBOPACK compile-time value", "sk_pro_llu_0d78fcb987f772be80338ddc0649b69e") || '';
}
async function executeSearch(query, anonIdOverride) {
    const params = new URLSearchParams();
    if (query.location) params.set('location', query.location);
    if (query.propertyType) params.set('propertyType', query.propertyType);
    if (query.listingType && query.listingType !== 'ANY') params.set('listingType', query.listingType);
    if (query.minBudget !== undefined) params.set('minBudget', String(query.minBudget));
    if (query.maxBudget !== undefined) params.set('maxBudget', String(query.maxBudget));
    if (query.possessionStatus && query.possessionStatus !== 'ANY') params.set('possessionStatus', query.possessionStatus);
    if (query.bedrooms !== undefined) params.set('bedrooms', String(query.bedrooms));
    if (query.sortBy) params.set('sortBy', query.sortBy);
    const anonId = anonIdOverride ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$anonId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateAnonId"])();
    if (anonId) params.set('anonId', anonId);
    const token = getStoredToken();
    const url = `${getCrmUrl()}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/search?${params.toString()}`;
    try {
        const response = await fetch(url, {
            headers: {
                'x-api-key': getCrmApiKey(),
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            },
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error(`Search API failed with status: ${response.status}`);
        }
        const data = await response.json();
        const page = query.page && query.page > 0 ? query.page : 1;
        const limit = query.limit && query.limit > 0 ? query.limit : 12;
        const start = (page - 1) * limit;
        const paged = data.properties.slice(start, start + limit);
        return {
            ...data,
            properties: paged,
            total: data.properties.length
        };
    } catch (error) {
        console.error('Frontend executeSearch failed:', error);
        return {
            properties: [],
            total: 0,
            recommendations: [],
            error: 'Failed to fetch search results.',
            isGlobalEmpty: false
        };
    }
}
}),
"[project]/Sonthillu/src/types/property.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BHK_OPTIONS",
    ()=>BHK_OPTIONS,
    "FACING_OPTIONS",
    ()=>FACING_OPTIONS,
    "POSSESSION_STATUS_OPTIONS",
    ()=>POSSESSION_STATUS_OPTIONS,
    "PROPERTY_CATEGORIES",
    ()=>PROPERTY_CATEGORIES
]);
const PROPERTY_CATEGORIES = [
    {
        value: 'APARTMENT',
        label: 'Apartment / Flat'
    },
    {
        value: 'VILLA',
        label: 'Villa'
    },
    {
        value: 'INDEPENDENT_HOUSE',
        label: 'Independent House'
    },
    {
        value: 'INDEPENDENT_FLOOR',
        label: 'Independent Floor'
    },
    {
        value: 'DUPLEX',
        label: 'Duplex'
    },
    {
        value: 'PENTHOUSE',
        label: 'Penthouse'
    },
    {
        value: 'STUDIO',
        label: 'Studio Apartment'
    }
];
const BHK_OPTIONS = [
    {
        value: 1,
        label: '1 BHK'
    },
    {
        value: 2,
        label: '2 BHK'
    },
    {
        value: 3,
        label: '3 BHK'
    },
    {
        value: 4,
        label: '4 BHK'
    },
    {
        value: 5,
        label: '5+ BHK'
    }
];
const FACING_OPTIONS = [
    {
        value: 'EAST',
        label: 'East'
    },
    {
        value: 'WEST',
        label: 'West'
    },
    {
        value: 'NORTH',
        label: 'North'
    },
    {
        value: 'SOUTH',
        label: 'South'
    },
    {
        value: 'NORTH_EAST',
        label: 'North East'
    },
    {
        value: 'SOUTH_EAST',
        label: 'South East'
    },
    {
        value: 'NORTH_WEST',
        label: 'North West'
    },
    {
        value: 'SOUTH_WEST',
        label: 'South West'
    }
];
const POSSESSION_STATUS_OPTIONS = [
    {
        value: 'READY_TO_MOVE',
        label: 'Ready to Move'
    },
    {
        value: 'UNDER_CONSTRUCTION',
        label: 'Under Construction'
    }
];
}),
"[project]/Sonthillu/src/types/search.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sonthillu Property Search Model
 *
 * This model represents the canonical search state for Normal Search.
 * It is designed to be:
 * - URL-serializable (shareable search states)
 * - Extensible for future AI Search integration
 * - Extensible for future Match & Ranking Engine
 * - Safe for browser use (no CRM internals)
 */ __turbopack_context__.s([
    "BUDGET_PRESETS",
    ()=>BUDGET_PRESETS,
    "DEFAULT_FILTERS",
    ()=>DEFAULT_FILTERS,
    "DEFAULT_SEARCH_QUERY",
    ()=>DEFAULT_SEARCH_QUERY,
    "LISTING_TYPE_OPTIONS",
    ()=>LISTING_TYPE_OPTIONS,
    "PROPERTY_TYPE_OPTIONS",
    ()=>PROPERTY_TYPE_OPTIONS,
    "SORT_OPTIONS",
    ()=>SORT_OPTIONS
]);
const BUDGET_PRESETS = [
    {
        label: 'Under ₹50 Lakh',
        max: 5000000
    },
    {
        label: '₹50 L – ₹75 L',
        min: 5000000,
        max: 7500000
    },
    {
        label: '₹75 L – ₹1 Cr',
        min: 7500000,
        max: 10000000
    },
    {
        label: '₹1 Cr – ₹1.5 Cr',
        min: 10000000,
        max: 15000000
    },
    {
        label: '₹1.5 Cr – ₹2 Cr',
        min: 15000000,
        max: 20000000
    },
    {
        label: 'Above ₹2 Cr',
        min: 20000000
    }
];
const PROPERTY_TYPE_OPTIONS = [
    {
        value: 'APARTMENT',
        label: 'Apartment / Flat'
    },
    {
        value: 'VILLA',
        label: 'Villa'
    },
    {
        value: 'INDEPENDENT_HOUSE',
        label: 'Independent House'
    }
];
const LISTING_TYPE_OPTIONS = [
    {
        value: 'ANY',
        label: 'Any'
    },
    {
        value: 'NEW',
        label: 'New'
    },
    {
        value: 'RESALE',
        label: 'Resale'
    }
];
const SORT_OPTIONS = [
    {
        value: 'relevance',
        label: 'Relevance'
    },
    {
        value: 'newest',
        label: 'Newest First'
    },
    {
        value: 'price_low',
        label: 'Price: Low to High'
    },
    {
        value: 'price_high',
        label: 'Price: High to Low'
    }
];
const DEFAULT_SEARCH_QUERY = {
    sortBy: 'relevance',
    page: 1,
    limit: 12
};
const DEFAULT_FILTERS = {
    location: '',
    propertyType: '',
    listingType: 'ANY',
    minBudget: '',
    maxBudget: '',
    possessionStatus: 'ANY',
    bedrooms: ''
};
}),
];

//# sourceMappingURL=Sonthillu_src_0z-vlfj._.js.map