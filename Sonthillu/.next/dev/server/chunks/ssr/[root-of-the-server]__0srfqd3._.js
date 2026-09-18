module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/Sonthillu/src/app/actions/customer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCompareAction",
    ()=>addToCompareAction,
    "addToShortlistAction",
    ()=>addToShortlistAction,
    "clearCompareAction",
    ()=>clearCompareAction,
    "mergeGuestActivityAction",
    ()=>mergeGuestActivityAction,
    "removeFromCompareAction",
    ()=>removeFromCompareAction,
    "removeFromShortlistAction",
    ()=>removeFromShortlistAction,
    "replaceCompareAction",
    ()=>replaceCompareAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/types.ts [app-ssr] (ecmascript)");
;
;
;
// Was a set of Server Actions built on requireCustomer()/Sonthillu's own
// local Customer database — incompatible with `output: 'export'`, and a
// different (retiring) account system from WebsiteAccount besides. Now
// calls the CRM's WebsiteAccount shortlist/compare endpoints directly with
// the Bearer token from lib/auth/useWebsiteAccount.tsx's localStorage. Only
// used from CustomerActivityProvider when `mode === 'customer'` (a
// logged-in website account) — guest mode never reaches these.
const TOKEN_STORAGE_KEY = 'sonthillu_website_token';
function getStoredToken() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function savedItemUrl(kind) {
    const baseUrl = ("TURBOPACK compile-time value", "https://crm-backend-1gyt.onrender.com/api/v1") || 'http://localhost:3000/api/v1';
    return `${baseUrl}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/account/${kind}`;
}
function authHeaders() {
    const token = getStoredToken();
    const apiKey = ("TURBOPACK compile-time value", "sk_pro_llu_0d78fcb987f772be80338ddc0649b69e") || '';
    return {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
        ...token ? {
            Authorization: `Bearer ${token}`
        } : {}
    };
}
function assertId(propertyId) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"])(propertyId)) {
        throw new Error('Invalid property id');
    }
}
async function addSavedItem(kind, propertyId) {
    await fetch(savedItemUrl(kind), {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify({
            property_id: propertyId
        }),
        cache: 'no-store'
    });
}
async function removeSavedItem(kind, propertyId) {
    await fetch(savedItemUrl(kind), {
        method: 'DELETE',
        headers: authHeaders(),
        body: JSON.stringify({
            property_id: propertyId
        }),
        cache: 'no-store'
    });
}
async function addToShortlistAction(propertyId) {
    assertId(propertyId);
    await addSavedItem('shortlist', propertyId);
    return 'added';
}
async function removeFromShortlistAction(propertyId) {
    assertId(propertyId);
    await removeSavedItem('shortlist', propertyId);
    return true;
}
async function addToCompareAction(propertyId) {
    assertId(propertyId);
    await addSavedItem('compare', propertyId);
    return 'added';
}
async function removeFromCompareAction(propertyId) {
    assertId(propertyId);
    await removeSavedItem('compare', propertyId);
    return true;
}
async function replaceCompareAction(_index, propertyId) {
    assertId(propertyId);
    await addSavedItem('compare', propertyId);
    return true;
}
async function clearCompareAction() {
    try {
        const res = await fetch(savedItemUrl('compare'), {
            headers: authHeaders(),
            cache: 'no-store'
        });
        if (!res.ok) return;
        const { items } = await res.json();
        await Promise.all(items.map((item)=>removeSavedItem('compare', item.property_id)));
    } catch  {
    // Best-effort — local state is cleared regardless by the caller.
    }
}
async function mergeGuestActivityAction(guestShortlist, guestCompare) {
    const shortlistIds = guestShortlist.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"]);
    const compareIds = guestCompare.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"]).slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"]);
    await Promise.all([
        ...shortlistIds.map((id)=>addSavedItem('shortlist', id)),
        ...compareIds.map((id)=>addSavedItem('compare', id))
    ]);
}
}),
"[project]/Sonthillu/src/components/analytics/PageTracker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTracker",
    ()=>PageTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/analytics/activity.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function PageTracker() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only track generic page_view if it's not a more specific event we track elsewhere.
        // E.g., property detail view fires 'property_view'. We track that specifically.
        if (pathname.startsWith('/properties/')) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackClientActivity"])({
            eventName: 'page_view',
            page: pathname
        });
    }, [
        pathname,
        searchParams
    ]);
    return null;
}
}),
"[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerActivityProvider",
    ()=>CustomerActivityProvider,
    "useCustomerActivity",
    ()=>useCustomerActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/guest.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/activity.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/app/actions/customer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const CustomerActivityContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function getStorage() {
    return ("TURBOPACK compile-time truthy", 1) ? null : "TURBOPACK unreachable";
}
function CustomerActivityProvider({ children }) {
    const { isAuthenticated, isLoading: isAccountLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebsiteAccount"])();
    const [shortlist, setShortlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [compare, setCompare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('guest');
    // Initialise from guest localStorage.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storage = getStorage();
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    // Switch mode once the WebsiteAccount context resolves whether a token
    // (and thus a logged-in account) exists.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAccountLoading) return;
        setMode(isAuthenticated ? 'customer' : 'guest');
    }, [
        isAccountLoading,
        isAuthenticated
    ]);
    // Merge guest localStorage into customer account when mode switches to customer.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode !== 'customer') return;
        const storage = getStorage();
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const guestShortlist = undefined;
        const guestCompare = undefined;
    }, [
        mode
    ]);
    const isShortlisted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((propertyId)=>shortlist.includes(propertyId), [
        shortlist
    ]);
    const isCompared = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((propertyId)=>compare.includes(propertyId), [
        compare
    ]);
    const addToShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((propertyId, surface)=>{
        const storage = getStorage();
        if (mode === 'customer') {
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToShortlistAction"])(propertyId);
            setShortlist((prev)=>prev.includes(propertyId) ? prev : [
                    propertyId,
                    ...prev
                ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('shortlist_add', {
                propertyId,
                surface
            }));
            return;
        }
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const ids = undefined;
    }, [
        mode
    ]);
    const removeFromShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((propertyId, surface)=>{
        const storage = getStorage();
        if (mode === 'customer') {
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeFromShortlistAction"])(propertyId);
            setShortlist((prev)=>prev.filter((id)=>id !== propertyId));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('shortlist_remove', {
                propertyId,
                surface
            }));
            return;
        }
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const ids = undefined;
    }, [
        mode
    ]);
    const toggleShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((propertyId, surface)=>{
        if (shortlist.includes(propertyId)) {
            removeFromShortlist(propertyId, surface);
        } else {
            addToShortlist(propertyId, surface);
        }
    }, [
        shortlist,
        addToShortlist,
        removeFromShortlist
    ]);
    const addCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((propertyId, surface)=>{
        const storage = getStorage();
        if (mode === 'customer') {
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToCompareAction"])(propertyId);
            setCompare((prev)=>prev.includes(propertyId) || prev.length >= __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"] ? prev : [
                    ...prev,
                    propertyId
                ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('compare_add', {
                propertyId,
                surface
            }));
            return 'added';
        }
        if ("TURBOPACK compile-time truthy", 1) return 'limit_reached';
        //TURBOPACK unreachable
        ;
        const ids = undefined, status = undefined;
    }, [
        mode
    ]);
    const removeCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((propertyId, surface)=>{
        const storage = getStorage();
        if (mode === 'customer') {
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeFromCompareAction"])(propertyId);
            setCompare((prev)=>prev.filter((id)=>id !== propertyId));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('compare_remove', {
                propertyId,
                surface
            }));
            return;
        }
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const ids = undefined;
    }, [
        mode
    ]);
    const replaceCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index, propertyId)=>{
        const storage = getStorage();
        if (mode === 'customer') {
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceCompareAction"])(index, propertyId);
            setCompare((prev)=>{
                const removed = prev.filter((_, i)=>i !== index);
                const deduped = removed.filter((id)=>id !== propertyId);
                const next = [
                    ...deduped.slice(0, index),
                    propertyId,
                    ...deduped.slice(index)
                ].slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"]);
                return next;
            });
            return;
        }
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const ids = undefined;
    }, [
        mode
    ]);
    const clearCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const storage = getStorage();
        if (mode === 'customer') {
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCompareAction"])();
            setCompare([]);
            return;
        }
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, [
        mode
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            shortlist,
            compare,
            compareLimit: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"],
            mode,
            isShortlisted,
            isCompared,
            addToShortlist,
            removeFromShortlist,
            toggleShortlist,
            addCompare,
            removeCompare,
            replaceCompare,
            clearCompare
        }), [
        shortlist,
        compare,
        mode,
        isShortlisted,
        isCompared,
        addToShortlist,
        removeFromShortlist,
        toggleShortlist,
        addCompare,
        removeCompare,
        replaceCompare,
        clearCompare
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerActivityContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
function useCustomerActivity() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CustomerActivityContext);
    if (!context) {
        throw new Error('useCustomerActivity must be used within CustomerActivityProvider');
    }
    return context;
}
}),
"[project]/Sonthillu/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const allNavItems = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAVIGATION"].main
];
function Header() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white/97 shadow-nav backdrop-blur-sm border-b border-brand-gold/20' : 'bg-white border-b border-cream-dark'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-16 items-center justify-between md:h-18",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/brand/sonthillu-logo.jpeg",
                                        alt: "Sonthillu Constructions",
                                        className: "h-11 w-auto transition-transform duration-200 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex flex-col leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-bold text-brand-navy tracking-wide",
                                            style: {
                                                fontFamily: 'var(--font-family-display)'
                                            },
                                            children: "Sonthillu"
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold uppercase tracking-widest text-brand-gold",
                                            children: "Constructions"
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center gap-7 md:flex",
                            "aria-label": "Main navigation",
                            children: allNavItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "relative text-sm font-medium text-text-secondary transition-colors hover:text-brand-navy group py-1",
                                    children: [
                                        item.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 left-0 h-0.5 w-0 bg-brand-gold transition-all duration-200 group-hover:w-full rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-3 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "text-text-secondary hover:text-brand-navy hover:bg-cream",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/properties",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "bg-brand-gold text-brand-navy font-semibold hover:bg-brand-gold-dark hover:text-white shadow-gold border-0 px-5",
                                        children: "Find Homes"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            className: "rounded-lg p-2 text-brand-navy hover:bg-cream md:hidden transition-colors",
                            "aria-label": isMobileMenuOpen ? 'Close menu' : 'Open menu',
                            "aria-expanded": isMobileMenuOpen,
                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-6 w-6",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-6 w-6",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-brand-gold/20 bg-white md:hidden shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-page py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-col gap-1",
                            children: allNavItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "rounded-lg px-3 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-cream hover:text-brand-navy",
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-col gap-3 border-t border-border pt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "w-full text-text-secondary hover:text-brand-navy",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/properties",
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "w-full bg-brand-gold text-brand-navy font-semibold hover:bg-brand-gold-dark border-0",
                                        children: "Find Your Dream Home"
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/layout/Header.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/Sonthillu/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const variantStyles = {
    primary: 'bg-brand-navy text-white hover:bg-brand-navy-dark focus:ring-brand-navy',
    secondary: 'border-2 border-brand-navy bg-transparent text-brand-navy hover:bg-brand-navy hover:text-white focus:ring-brand-navy',
    gold: 'bg-brand-gold text-white hover:bg-brand-gold-dark focus:ring-brand-gold',
    ghost: 'bg-transparent text-text-primary hover:bg-border focus:ring-border',
    danger: 'bg-error text-white hover:bg-red-700 focus:ring-error'
};
const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = 'primary', size = 'md', loading = false, icon, iconPosition = 'left', className, disabled, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200', 'focus:outline-none focus:ring-2 focus:ring-offset-2', 'disabled:cursor-not-allowed disabled:opacity-50', variantStyles[variant], sizeStyles[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "mr-2 h-4 w-4 animate-spin",
                xmlns: "http://www.w3.org/2000/svg",
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
                        fileName: "[project]/Sonthillu/src/components/ui/Button.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/ui/Button.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/ui/Button.tsx",
                lineNumber: 60,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-2",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/ui/Button.tsx",
                lineNumber: 81,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            !loading && icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-2",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/ui/Button.tsx",
                lineNumber: 83,
                columnNumber: 58
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/ui/Button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
}),
"[project]/Sonthillu/src/lib/analytics/activity.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// NOTE: This is a client-only module (browser). The server action is lazy-loaded
// to avoid pulling prisma / next/headers into the Vitest module graph during unit tests.
// Dynamic require works because this file is only ever executed in the browser runtime.
/**
 * Normalized event types required for P6.
 */ __turbopack_context__.s([
    "trackClientActivity",
    ()=>trackClientActivity
]);
// Simple debouncer for high-frequency events (like page views or repeated interactions)
const eventCache = new Map();
const DEBOUNCE_MS = 5000;
function getEventFingerprint(payload) {
    return `${payload.eventName}-${payload.propertyId || ''}-${payload.page || ''}`;
}
function trackClientActivity(payload) {
    // 1. Throttle logic for certain events
    const fingerprint = getEventFingerprint(payload);
    const now = Date.now();
    const lastTime = eventCache.get(fingerprint) || 0;
    const isDebouncedEvent = [
        'page_view',
        'property_view'
    ].includes(payload.eventName);
    if (isDebouncedEvent && now - lastTime < DEBOUNCE_MS) {
        // Ignore duplicate event within the debounce window
        return;
    }
    // Record time for throttling
    eventCache.set(fingerprint, now);
    // 2. Fire and Forget via dynamic import (avoids pulling next/headers into Vitest graph)
    __turbopack_context__.A("[project]/Sonthillu/src/app/actions/analytics.ts [app-ssr] (ecmascript, async loader)").then(({ trackActivityEventAction })=>{
        trackActivityEventAction({
            eventName: payload.eventName,
            page: payload.page || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined),
            propertyId: payload.propertyId,
            projectId: payload.projectId,
            searchContext: payload.searchContext,
            metadata: payload.metadata
        });
    }).catch(()=>{
    // Ignore network failures for tracking
    });
}
}),
"[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebsiteAccountProvider",
    ()=>WebsiteAccountProvider,
    "fetchWebsiteAccountFromStorage",
    ()=>fetchWebsiteAccountFromStorage,
    "useWebsiteAccount",
    ()=>useWebsiteAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const TOKEN_STORAGE_KEY = 'sonthillu_website_token';
const WebsiteAccountContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function getCrmUrl() {
    return ("TURBOPACK compile-time value", "https://crm-backend-1gyt.onrender.com/api/v1") || 'http://localhost:3000/api/v1';
}
function getCrmApiKey() {
    return ("TURBOPACK compile-time value", "sk_pro_llu_0d78fcb987f772be80338ddc0649b69e") || '';
}
function accountUrl(path) {
    return `${getCrmUrl()}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/account${path}`;
}
function readStoredToken() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function writeStoredToken(token) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function parseErrorMessage(res, fallback) {
    try {
        const data = await res.json();
        return data?.error || fallback;
    } catch  {
        return fallback;
    }
}
function WebsiteAccountProvider({ children }) {
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchMe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (currentToken)=>{
        try {
            const res = await fetch(accountUrl('/me'), {
                headers: {
                    'x-api-key': getCrmApiKey(),
                    Authorization: `Bearer ${currentToken}`
                },
                cache: 'no-store'
            });
            if (!res.ok) return null;
            const data = await res.json();
            return data.account;
        } catch  {
            return null;
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = readStoredToken();
        if (!stored) {
            setIsLoading(false);
            return;
        }
        setToken(stored);
        fetchMe(stored).then((resolved)=>{
            if (resolved) {
                setAccount(resolved);
            } else {
                // Token expired/invalid — drop it rather than keep retrying.
                writeStoredToken(null);
                setToken(null);
            }
            setIsLoading(false);
        });
    }, [
        fetchMe
    ]);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, password)=>{
        try {
            const res = await fetch(accountUrl('/login'), {
                method: 'POST',
                headers: {
                    'x-api-key': getCrmApiKey(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                }),
                cache: 'no-store'
            });
            if (!res.ok) {
                return {
                    error: await parseErrorMessage(res, 'Invalid email or password')
                };
            }
            const data = await res.json();
            writeStoredToken(data.token);
            setToken(data.token);
            setAccount(data.account);
            return {};
        } catch  {
            return {
                error: 'We could not reach our team right now. Please try again shortly.'
            };
        }
    }, []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        try {
            const res = await fetch(accountUrl('/register'), {
                method: 'POST',
                headers: {
                    'x-api-key': getCrmApiKey(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                cache: 'no-store'
            });
            if (!res.ok) {
                return {
                    error: await parseErrorMessage(res, 'Registration failed')
                };
            }
            const body = await res.json();
            writeStoredToken(body.token);
            setToken(body.token);
            setAccount(body.account);
            return {};
        } catch  {
            return {
                error: 'We could not reach our team right now. Please try again shortly.'
            };
        }
    }, []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        writeStoredToken(null);
        setToken(null);
        setAccount(null);
    }, []);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const current = readStoredToken();
        if (!current) {
            setAccount(null);
            return;
        }
        const resolved = await fetchMe(current);
        setAccount(resolved);
    }, [
        fetchMe
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            account,
            token,
            isLoading,
            isAuthenticated: account !== null,
            login,
            register,
            logout,
            refresh
        }), [
        account,
        token,
        isLoading,
        login,
        register,
        logout,
        refresh
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WebsiteAccountContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx",
        lineNumber: 202,
        columnNumber: 10
    }, this);
}
async function fetchWebsiteAccountFromStorage() {
    const token = readStoredToken();
    if (!token) return null;
    try {
        const res = await fetch(accountUrl('/me'), {
            headers: {
                'x-api-key': getCrmApiKey(),
                Authorization: `Bearer ${token}`
            },
            cache: 'no-store'
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.account;
    } catch  {
        return null;
    }
}
function useWebsiteAccount() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WebsiteAccountContext);
    if (!context) {
        throw new Error('useWebsiteAccount must be used within WebsiteAccountProvider');
    }
    return context;
}
}),
"[project]/Sonthillu/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Sonthillu/src/lib/customer/activity.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Typed analytics event contract for customer shortlist/compare activity.
 * Fired on the client; a future analytics provider can subscribe to the
 * documented custom event. No network call is made by this foundation.
 * Events never contain customer PII — only property IDs and activity counts.
 */ __turbopack_context__.s([
    "CUSTOMER_ACTIVITY_EVENT_NAME",
    ()=>CUSTOMER_ACTIVITY_EVENT_NAME,
    "buildCustomerActivityEvent",
    ()=>buildCustomerActivityEvent,
    "trackCustomerActivityEvent",
    ()=>trackCustomerActivityEvent
]);
const CUSTOMER_ACTIVITY_EVENT_NAME = 'sonthillu:customer-activity';
function buildCustomerActivityEvent(eventType, input) {
    return {
        ...input,
        eventType,
        timestamp: new Date().toISOString()
    };
}
;
function trackCustomerActivityEvent(payload) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    // Map to P6 Normalized Events
    const eventMap = undefined;
    const normalizedEventName = undefined;
}
}),
"[project]/Sonthillu/src/lib/customer/guest.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addGuestCompare",
    ()=>addGuestCompare,
    "clearGuestCompare",
    ()=>clearGuestCompare,
    "parseIdList",
    ()=>parseIdList,
    "readGuestCompare",
    ()=>readGuestCompare,
    "readGuestShortlist",
    ()=>readGuestShortlist,
    "removeGuestCompare",
    ()=>removeGuestCompare,
    "removeGuestShortlist",
    ()=>removeGuestShortlist,
    "replaceGuestCompare",
    ()=>replaceGuestCompare,
    "toggleGuestShortlist",
    ()=>toggleGuestShortlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/types.ts [app-ssr] (ecmascript)");
;
function parseIdList(raw) {
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"]);
    } catch  {
        return [];
    }
}
function serializeIdList(ids) {
    return JSON.stringify(ids);
}
function readGuestShortlist(storage) {
    return parseIdList(storage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_SHORTLIST_KEY"]));
}
function removeGuestShortlist(storage, propertyId) {
    const ids = readGuestShortlist(storage).filter((id)=>id !== propertyId);
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_SHORTLIST_KEY"], serializeIdList(ids));
    return ids;
}
function toggleGuestShortlist(storage, propertyId) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"])(propertyId)) return {
        ids: readGuestShortlist(storage),
        added: false
    };
    const ids = readGuestShortlist(storage);
    if (ids.includes(propertyId)) {
        const next = ids.filter((id)=>id !== propertyId);
        storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_SHORTLIST_KEY"], serializeIdList(next));
        return {
            ids: next,
            added: false
        };
    }
    const next = [
        propertyId,
        ...ids
    ];
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_SHORTLIST_KEY"], serializeIdList(next));
    return {
        ids: next,
        added: true
    };
}
function readGuestCompare(storage) {
    return parseIdList(storage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"]));
}
function addGuestCompare(storage, propertyId, limit) {
    const ids = readGuestCompare(storage);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"])(propertyId)) return {
        ids,
        status: 'already_present'
    };
    if (ids.includes(propertyId)) return {
        ids,
        status: 'already_present'
    };
    if (ids.length >= limit) return {
        ids,
        status: 'limit_reached'
    };
    const next = [
        ...ids,
        propertyId
    ];
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"], serializeIdList(next));
    return {
        ids: next,
        status: 'added'
    };
}
function removeGuestCompare(storage, propertyId) {
    const ids = readGuestCompare(storage).filter((id)=>id !== propertyId);
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"], serializeIdList(ids));
    return ids;
}
function replaceGuestCompare(storage, index, propertyId, limit) {
    const ids = readGuestCompare(storage);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"])(propertyId)) return ids;
    if (index < 0 || index >= ids.length) return ids;
    const removed = ids.filter((_, i)=>i !== index);
    const deduped = removed.filter((id)=>id !== propertyId);
    const safeIndex = Math.min(index, deduped.length);
    const next = [
        ...deduped.slice(0, safeIndex),
        propertyId,
        ...deduped.slice(safeIndex)
    ].slice(0, limit);
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"], serializeIdList(next));
    return next;
}
function clearGuestCompare(storage) {
    storage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"]);
}
}),
"[project]/Sonthillu/src/lib/customer/service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPARE_LIMIT",
    ()=>COMPARE_LIMIT,
    "addToCompare",
    ()=>addToCompare,
    "addToShortlist",
    ()=>addToShortlist,
    "clearCompare",
    ()=>clearCompare,
    "getCompare",
    ()=>getCompare,
    "getShortlist",
    ()=>getShortlist,
    "hydratePropertiesByIds",
    ()=>hydratePropertiesByIds,
    "isCompared",
    ()=>isCompared,
    "isShortlisted",
    ()=>isShortlisted,
    "removeFromCompare",
    ()=>removeFromCompare,
    "removeFromShortlist",
    ()=>removeFromShortlist,
    "replaceInCompare",
    ()=>replaceInCompare,
    "setCustomerCompare",
    ()=>setCustomerCompare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/dto.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/types.ts [app-ssr] (ecmascript)");
;
;
const COMPARE_LIMIT = 4;
async function addToShortlist(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    if (await store.hasShortlist(customerId, propertyId)) return 'already_present';
    await store.addShortlist(customerId, propertyId);
    return 'added';
}
async function removeFromShortlist(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    if (!await store.hasShortlist(customerId, propertyId)) return false;
    await store.removeShortlist(customerId, propertyId);
    return true;
}
async function getShortlist(store, customerId) {
    return store.listShortlist(customerId);
}
async function isShortlisted(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    return store.hasShortlist(customerId, propertyId);
}
async function addToCompare(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    const current = await store.listCompare(customerId);
    if (current.includes(propertyId)) return 'already_present';
    if (current.length >= COMPARE_LIMIT) return 'limit_reached';
    await store.setCompare(customerId, [
        ...current,
        propertyId
    ]);
    return 'added';
}
async function removeFromCompare(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    const current = await store.listCompare(customerId);
    if (!current.includes(propertyId)) return false;
    await store.setCompare(customerId, current.filter((id)=>id !== propertyId));
    return true;
}
async function replaceInCompare(store, customerId, index, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    const current = await store.listCompare(customerId);
    if (!Number.isInteger(index) || index < 0 || index >= current.length) {
        return false;
    }
    const removed = current.filter((_, i)=>i !== index);
    const deduped = removed.filter((id)=>id !== propertyId);
    const safeIndex = Math.min(index, deduped.length);
    const next = [
        ...deduped.slice(0, safeIndex),
        propertyId,
        ...deduped.slice(safeIndex)
    ].slice(0, COMPARE_LIMIT);
    await store.setCompare(customerId, next);
    return true;
}
async function clearCompare(store, customerId) {
    await store.clearCompare(customerId);
}
async function getCompare(store, customerId) {
    return store.listCompare(customerId);
}
async function isCompared(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    const current = await store.listCompare(customerId);
    return current.includes(propertyId);
}
async function setCustomerCompare(store, customerId, propertyIds) {
    const valid = propertyIds.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"]);
    const unique = [];
    for (const id of valid){
        if (!unique.includes(id)) unique.push(id);
    }
    const capped = unique.slice(0, COMPARE_LIMIT);
    await store.setCompare(customerId, capped);
    return capped;
}
async function hydratePropertiesByIds(ids, fetchProperty) {
    const properties = [];
    const unavailableIds = [];
    const seen = new Set();
    for (const rawId of ids){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPropertyId"])(rawId)) continue;
        if (seen.has(rawId)) continue;
        seen.add(rawId);
        const raw = await fetchProperty(rawId);
        if (raw) {
            properties.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPublicPropertyDetail"])(raw));
        } else {
            unavailableIds.push(rawId);
        }
    }
    return {
        properties,
        unavailableIds
    };
}
}),
"[project]/Sonthillu/src/lib/customer/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GUEST_COMPARE_KEY",
    ()=>GUEST_COMPARE_KEY,
    "GUEST_SHORTLIST_KEY",
    ()=>GUEST_SHORTLIST_KEY,
    "assertValidPropertyId",
    ()=>assertValidPropertyId,
    "isValidPropertyId",
    ()=>isValidPropertyId
]);
const GUEST_SHORTLIST_KEY = 'sonthillu:guest:shortlist';
const GUEST_COMPARE_KEY = 'sonthillu:guest:compare';
function isValidPropertyId(id) {
    const n = Number(id);
    return Number.isInteger(n) && n > 0;
}
function assertValidPropertyId(id) {
    if (!isValidPropertyId(id)) {
        throw new RangeError(`Invalid property id: ${String(id)}`);
    }
}
}),
"[project]/Sonthillu/src/lib/dto.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filtersToQuery",
    ()=>filtersToQuery,
    "formatArea",
    ()=>formatArea,
    "formatPrice",
    ()=>formatPrice,
    "queryToFilters",
    ()=>queryToFilters,
    "queryToSearchParams",
    ()=>queryToSearchParams,
    "searchParamsToQuery",
    ()=>searchParamsToQuery,
    "toPublicProject",
    ()=>toPublicProject,
    "toPublicProjectDetail",
    ()=>toPublicProjectDetail,
    "toPublicProjectList",
    ()=>toPublicProjectList,
    "toPublicProperty",
    ()=>toPublicProperty,
    "toPublicPropertyDetail",
    ()=>toPublicPropertyDetail,
    "toPublicPropertyImage",
    ()=>toPublicPropertyImage,
    "toPublicPropertyList",
    ()=>toPublicPropertyList
]);
function toPublicProperty(property) {
    const primaryImage = property.images?.find((img)=>img.is_primary);
    const allImages = property.images || [];
    return {
        id: property.id,
        title: property.title,
        slug: property.property_code,
        propertyType: mapCategoryToPropertyType(property.category),
        listingType: 'NEW',
        price: property.price,
        priceFormatted: formatPrice(property.price),
        location: property.location,
        areaSqft: property.area_sqft,
        areaFormatted: formatArea(property.area_sqft),
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        facing: property.facing,
        possessionStatus: property.possession_status,
        lifecycleStatus: property.lifecycle_status || undefined,
        primaryImage: primaryImage?.image_url || null,
        images: allImages.map(toPublicPropertyImage),
        amenities: parseAmenities(property.amenities),
        isVerified: false,
        createdAt: property.created_at
    };
}
function toPublicPropertyImage(image) {
    return {
        id: image.id,
        url: image.image_url,
        isPrimary: image.is_primary,
        altText: image.alt_text,
        sortOrder: image.sort_order
    };
}
function toPublicPropertyList(properties) {
    return properties.map(toPublicProperty);
}
/**
 * Map CRM category string to PropertyType.
 * CRM categories may vary; map known ones to our enum.
 */ function mapCategoryToPropertyType(category) {
    const normalized = category.toUpperCase().replace(/[\s-]/g, '_');
    if (normalized.includes('APARTMENT') || normalized.includes('FLAT')) {
        return 'APARTMENT';
    }
    if (normalized.includes('VILLA')) {
        return 'VILLA';
    }
    if (normalized.includes('INDEPENDENT') || normalized.includes('HOUSE')) {
        return 'INDEPENDENT_HOUSE';
    }
    // Default to APARTMENT for unknown categories
    return 'APARTMENT';
}
/**
 * Parse amenities from CRM format (JSON string or comma-separated).
 */ function parseAmenities(amenities) {
    if (!amenities) return [];
    try {
        const parsed = JSON.parse(amenities);
        if (Array.isArray(parsed)) return parsed;
        return [];
    } catch  {
        return amenities.split(',').map((a)=>a.trim()).filter(Boolean);
    }
}
function formatPrice(price) {
    if (price >= 10000000) {
        const cr = price / 10000000;
        return cr % 1 === 0 ? `₹${cr} Cr` : `₹${cr.toFixed(2)} Cr`;
    }
    if (price >= 100000) {
        const l = price / 100000;
        return l % 1 === 0 ? `₹${l} L` : `₹${l.toFixed(2)} L`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
}
function formatArea(area) {
    return `${area.toLocaleString('en-IN')} sq.ft.`;
}
function filtersToQuery(filters) {
    const query = {};
    if (filters.location.trim()) {
        query.location = filters.location.trim();
    }
    if (filters.propertyType) {
        query.propertyType = filters.propertyType;
    }
    if (filters.listingType && filters.listingType !== 'ANY') {
        query.listingType = filters.listingType;
    }
    if (filters.minBudget) {
        query.minBudget = parseBudgetInput(filters.minBudget);
    }
    if (filters.maxBudget) {
        query.maxBudget = parseBudgetInput(filters.maxBudget);
    }
    if (filters.possessionStatus && filters.possessionStatus !== 'ANY') {
        query.possessionStatus = filters.possessionStatus;
    }
    if (filters.bedrooms) {
        const parsed = parseInt(filters.bedrooms, 10);
        if (!isNaN(parsed)) query.bedrooms = parsed;
    }
    return query;
}
/**
 * Parse budget input string to number.
 * Handles "50L", "1Cr", "5000000", etc.
 */ function parseBudgetInput(input) {
    const trimmed = input.trim().toUpperCase();
    if (!trimmed) return undefined;
    // Handle "Cr" suffix
    if (trimmed.endsWith('CR')) {
        const num = parseFloat(trimmed.replace('CR', ''));
        if (!isNaN(num)) return Math.round(num * 10000000);
    }
    // Handle "L" or "Lakh" suffix
    if (trimmed.endsWith('L') || trimmed.includes('LAKH')) {
        const num = parseFloat(trimmed.replace(/L(?:AKH)?/g, ''));
        if (!isNaN(num)) return Math.round(num * 100000);
    }
    // Handle raw number
    const num = parseFloat(trimmed);
    if (!isNaN(num)) return Math.round(num);
    return undefined;
}
function queryToSearchParams(query) {
    const params = new URLSearchParams();
    if (query.location) params.set('location', query.location);
    if (query.propertyType) params.set('propertyType', query.propertyType);
    if (query.listingType && query.listingType !== 'ANY') params.set('listingType', query.listingType);
    if (query.minBudget) params.set('minBudget', String(query.minBudget));
    if (query.maxBudget) params.set('maxBudget', String(query.maxBudget));
    if (query.possessionStatus && query.possessionStatus !== 'ANY') params.set('possessionStatus', query.possessionStatus);
    if (query.bedrooms) params.set('bedrooms', String(query.bedrooms));
    if (query.sortBy && query.sortBy !== 'relevance') params.set('sortBy', query.sortBy);
    if (query.page && query.page > 1) params.set('page', String(query.page));
    if (query.limit && query.limit !== 12) params.set('limit', String(query.limit));
    return params;
}
function searchParamsToQuery(params) {
    const query = {};
    const location = params.get('location');
    if (location) query.location = location;
    const propertyType = params.get('propertyType');
    if (propertyType) query.propertyType = propertyType;
    const listingType = params.get('listingType');
    if (listingType) query.listingType = listingType;
    const minBudget = params.get('minBudget');
    if (minBudget) query.minBudget = Number(minBudget);
    const maxBudget = params.get('maxBudget');
    if (maxBudget) query.maxBudget = Number(maxBudget);
    const possessionStatus = params.get('possessionStatus');
    if (possessionStatus) query.possessionStatus = possessionStatus;
    const bedrooms = params.get('bedrooms');
    if (bedrooms) query.bedrooms = Number(bedrooms);
    const sortBy = params.get('sortBy');
    if (sortBy) query.sortBy = sortBy;
    const page = params.get('page');
    if (page) query.page = Number(page);
    const limit = params.get('limit');
    if (limit) query.limit = Number(limit);
    return query;
}
function queryToFilters(query) {
    return {
        location: query.location || '',
        propertyType: query.propertyType || '',
        listingType: query.listingType || 'ANY',
        minBudget: query.minBudget ? formatBudgetForInput(query.minBudget) : '',
        maxBudget: query.maxBudget ? formatBudgetForInput(query.maxBudget) : '',
        possessionStatus: query.possessionStatus || 'ANY',
        bedrooms: query.bedrooms ? String(query.bedrooms) : ''
    };
}
/**
 * Format budget number for input display.
 */ function formatBudgetForInput(budget) {
    if (budget >= 10000000) {
        const cr = budget / 10000000;
        return cr % 1 === 0 ? `${cr}Cr` : `${cr.toFixed(1)}Cr`;
    }
    if (budget >= 100000) {
        const l = budget / 100000;
        return l % 1 === 0 ? `${l}L` : `${l.toFixed(0)}L`;
    }
    return String(budget);
}
function toPublicProject(project) {
    // The project's own cover image (set in the CRM's Media tab) is the
    // authoritative one; only fall back to a unit's photo if no cover was set.
    const primaryImage = project.cover_image_url || project.properties?.[0]?.images?.find((img)=>img.isPrimary)?.url || project.properties?.[0]?.images?.[0]?.url || null;
    // Collect all images from all properties
    const allImages = project.properties?.flatMap((prop)=>prop.images || []) || [];
    return {
        id: project.id,
        projectCode: project.project_code,
        name: project.name,
        slug: project.slug,
        description: project.description,
        location: project.location,
        totalArea: project.total_area,
        launchDate: project.launch_date,
        status: project.status,
        amenities: Array.isArray(project.amenities) ? project.amenities : [],
        createdAt: project.created_at,
        inventorySummary: project.inventory_summary || {
            total: 0,
            available: 0,
            reserved: 0,
            sold: 0
        },
        primaryImage,
        images: allImages.map((img)=>({
                id: img.id,
                url: img.image_url || img.url,
                isPrimary: img.is_primary || img.isPrimary,
                altText: img.alt_text || img.altText,
                sortOrder: img.sort_order || img.sortOrder
            }))
    };
}
function toPublicProjectList(projects) {
    return projects.map(toPublicProject);
}
function toPublicProjectDetail(project) {
    const baseProject = toPublicProject(project);
    return {
        ...baseProject,
        properties: project.properties?.map((prop)=>({
                id: prop.id,
                title: prop.title,
                slug: prop.property_code,
                propertyType: prop.category?.toUpperCase().includes('APARTMENT') ? 'APARTMENT' : prop.category?.toUpperCase().includes('VILLA') ? 'VILLA' : 'INDEPENDENT_HOUSE',
                listingType: prop.listing_type === 'RESALE' ? 'RESALE' : 'NEW',
                price: prop.price,
                priceFormatted: formatPrice(prop.price),
                location: prop.location,
                areaSqft: prop.area_sqft,
                areaFormatted: formatArea(prop.area_sqft),
                bedrooms: prop.bedrooms,
                bathrooms: prop.bathrooms,
                facing: prop.facing,
                possessionStatus: prop.possession_status,
                primaryImage: prop.images?.find((img)=>img.isPrimary)?.url || prop.images?.[0]?.url || null,
                images: prop.images?.map((img)=>({
                        id: img.id,
                        url: img.image_url || img.url,
                        isPrimary: img.is_primary || img.isPrimary,
                        altText: img.alt_text || img.altText,
                        sortOrder: img.sort_order || img.sortOrder
                    })) || [],
                amenities: Array.isArray(prop.amenities) ? prop.amenities : typeof prop.amenities === 'string' ? JSON.parse(prop.amenities) : [],
                isVerified: false,
                createdAt: prop.created_at
            })) || []
    };
}
/**
 * Transform CRM Property to PublicPropertyDetail DTO (full detail view).
 * Excludes: seller data, internal notes, exact coordinates, workflow state.
 */ const ALLOWED_DETAIL_KEYS = new Set([
    'plot_area',
    'plotArea',
    'land_area',
    'floor',
    'floor_no',
    'total_floors',
    'parking',
    'parking_slots',
    'car_parking',
    'rera',
    'rera_status',
    'rera_number',
    'balcony',
    'balconies',
    'age',
    'furnishing'
]);
function sanitizeDetails(rawDetails) {
    if (!rawDetails || typeof rawDetails !== 'object' || Array.isArray(rawDetails)) return null;
    const safeDetails = {};
    for (const key of ALLOWED_DETAIL_KEYS){
        if (key in rawDetails) {
            const val = rawDetails[key];
            if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
                safeDetails[key] = val;
            }
        }
    }
    return Object.keys(safeDetails).length > 0 ? safeDetails : null;
}
function toPublicPropertyDetail(property) {
    const primaryImage = property.images?.find((img)=>img.is_primary);
    const allImages = property.images || [];
    return {
        ...toPublicProperty(property),
        propertyCode: property.property_code,
        description: property.description,
        address: property.address,
        amenities: parseAmenities(property.amenities),
        possessionStatus: property.possession_status,
        details: sanitizeDetails(property.details),
        seoTitle: property.seo_title,
        seoKeywords: property.seo_keywords,
        state: property.state,
        city: property.city,
        locality: property.locality,
        pincode: property.pincode,
        listingType: property.listing_type === 'RESALE' ? 'RESALE' : 'NEW',
        images: allImages.map(toPublicPropertyImageDetail),
        project: property.project ? toPublicProjectReference(property.project) : null
    };
}
function toPublicPropertyImageDetail(image) {
    return {
        id: image.id,
        url: image.image_url,
        isPrimary: image.is_primary,
        altText: image.alt_text,
        sortOrder: image.sort_order
    };
}
function toPublicProjectReference(project) {
    return {
        id: project.id,
        projectCode: project.project_code,
        name: project.name,
        location: project.location,
        status: project.status
    };
}
}),
"[project]/Sonthillu/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "getInitials",
    ()=>getInitials,
    "slugify",
    ()=>slugify,
    "truncate",
    ()=>truncate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs);
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}
function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}
function getInitials(name) {
    return name.split(' ').map((part)=>part[0]).join('').toUpperCase().slice(0, 2);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0srfqd3._.js.map