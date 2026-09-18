module.exports = [
"[project]/Sonthillu/src/components/home/HeroSearch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSearch",
    ()=>HeroSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/types/search.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$property$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/types/property.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function HeroSearch() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('BUY');
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [propertyType, setPropertyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [bedrooms, setBedrooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [maxBudget, setMaxBudget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [aiQuery, setAiQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAiLoading, setIsAiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSearch = (e)=>{
        e.preventDefault();
        const params = new URLSearchParams();
        if (location.trim()) params.set('location', location.trim());
        if (propertyType) params.set('propertyType', propertyType);
        if (bedrooms) params.set('bedrooms', bedrooms);
        if (maxBudget) params.set('maxBudget', maxBudget);
        router.push(`/properties?${params.toString()}`);
    };
    const handleAiSearch = async (e)=>{
        e.preventDefault();
        if (!aiQuery.trim()) return;
        setIsAiLoading(true);
        try {
            // Was pointed at the retiring Sonthillu-Backend BFF's own /api/search/parse
            // (and via a non-NEXT_PUBLIC_ env var that was never exposed to the
            // browser to begin with) — now calls apps/api's WebsiteAccount search
            // parser directly, same endpoint actions/ai-search.ts uses.
            const backendUrl = process.env.NEXT_PUBLIC_CRM_API_BASE_URL || 'http://localhost:3000/api/v1';
            const apiKey = process.env.NEXT_PUBLIC_CRM_API_KEY || '';
            const res = await fetch(`${backendUrl}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/search/parse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey
                },
                body: JSON.stringify({
                    query: aiQuery.trim()
                })
            });
            const parsed = await res.json();
            if (!res.ok) {
                throw new Error(parsed.error || 'Failed to parse AI query');
            }
            const params = new URLSearchParams();
            if (parsed.location) params.set('location', parsed.location);
            if (parsed.propertyType) params.set('propertyType', parsed.propertyType);
            if (parsed.bedrooms) params.set('bedrooms', parsed.bedrooms);
            if (parsed.maxBudget) params.set('maxBudget', parsed.maxBudget.toString());
            if (parsed.minBudget) params.set('minBudget', parsed.minBudget.toString());
            if (parsed.possessionStatus) params.set('possessionStatus', parsed.possessionStatus);
            if (parsed.location) setLocation(parsed.location);
            if (parsed.propertyType) setPropertyType(parsed.propertyType);
            if (parsed.bedrooms) setBedrooms(parsed.bedrooms);
            if (parsed.maxBudget) setMaxBudget(parsed.maxBudget.toString());
            router.push(`/properties?${params.toString()}`);
        } catch (error) {
            console.error(error);
            alert(`AI Search Error: ${error.message}`);
        } finally{
            setIsAiLoading(false);
        }
    };
    const tabs = [
        {
            key: 'BUY',
            label: 'Buy Property',
            icon: '🏠'
        },
        {
            key: 'AI',
            label: 'AI Search',
            icon: '✨'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex justify-center gap-2",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode(tab.key),
                        className: `flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${mode === tab.key ? tab.key === 'AI' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg' : 'bg-brand-gold text-brand-navy shadow-gold' : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: tab.icon
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            tab.label
                        ]
                    }, tab.key, true, {
                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl bg-white shadow-2xl overflow-hidden border border-brand-gold/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 bg-gradient-to-r from-brand-gold via-brand-gold-soft to-brand-gold"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 sm:p-3",
                        children: mode === 'BUY' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSearch,
                            className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 text-brand-navy/50",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search location, area or landmark...",
                                            value: location,
                                            onChange: (e)=>setLocation(e.target.value),
                                            className: "w-full rounded-xl border-transparent bg-cream py-3 pl-10 pr-3 text-text-primary placeholder:text-text-muted focus:bg-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all sm:rounded-lg sm:bg-transparent sm:border-r sm:border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full sm:w-40 sm:border-r sm:border-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: propertyType,
                                        onChange: (e)=>setPropertyType(e.target.value),
                                        className: "w-full appearance-none bg-transparent py-3 pl-3 pr-8 text-text-primary focus:outline-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Property Type"
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROPERTY_TYPE_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: opt.value,
                                                    children: opt.label
                                                }, opt.value, false, {
                                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full sm:w-28 sm:border-r sm:border-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: bedrooms,
                                        onChange: (e)=>setBedrooms(e.target.value),
                                        className: "w-full appearance-none bg-transparent py-3 pl-3 pr-8 text-text-primary focus:outline-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "BHK"
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$property$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BHK_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: opt.value,
                                                    children: opt.label
                                                }, opt.value, false, {
                                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full sm:w-36",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: maxBudget,
                                        onChange: (e)=>setMaxBudget(e.target.value),
                                        className: "w-full appearance-none bg-transparent py-3 pl-3 pr-8 text-text-primary focus:outline-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Budget"
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$types$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUDGET_PRESETS"].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: preset.max || '',
                                                    children: preset.label
                                                }, preset.label, false, {
                                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "w-full sm:w-auto bg-brand-gold text-brand-navy font-bold hover:bg-brand-gold-dark border-0 px-6 py-3 rounded-xl shadow-gold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "mr-2 h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        "Search"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAiSearch,
                            className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "✨"
                                            }, void 0, false, {
                                                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: 'e.g. "3 BHK in Gachibowli under 2 Crores near school"',
                                            value: aiQuery,
                                            onChange: (e)=>setAiQuery(e.target.value),
                                            disabled: isAiLoading,
                                            className: "w-full rounded-xl border-transparent bg-cream py-3 pl-10 pr-3 text-text-primary placeholder:text-text-muted focus:bg-white focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all sm:rounded-lg sm:bg-transparent sm:border-r sm:border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isAiLoading,
                                    className: "w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold border-0 px-6 py-3 rounded-xl",
                                    children: isAiLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "mr-2 h-4 w-4 animate-spin",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        className: "opacity-25",
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        stroke: "currentColor",
                                                        strokeWidth: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        className: "opacity-75",
                                                        fill: "currentColor",
                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this),
                                            "Thinking..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                        lineNumber: 224,
                                        columnNumber: 19
                                    }, this) : '✨ AI Search'
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/home/HeroSearch.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
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

//# sourceMappingURL=Sonthillu_src_1lyser6._.js.map