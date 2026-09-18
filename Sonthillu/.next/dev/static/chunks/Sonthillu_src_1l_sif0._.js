(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Sonthillu/src/app/actions/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackActivityEventAction",
    ()=>trackActivityEventAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$anonId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/analytics/anonId.ts [app-client] (ecmascript)");
;
;
const TOKEN_STORAGE_KEY = 'sonthillu_website_token';
function getStoredToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.localStorage.getItem(TOKEN_STORAGE_KEY);
    } catch  {
        return null;
    }
}
async function trackActivityEventAction(payload) {
    try {
        const baseUrl = ("TURBOPACK compile-time value", "https://crm-backend-1gyt.onrender.com/api/v1");
        const apiKey = ("TURBOPACK compile-time value", "sk_pro_llu_0d78fcb987f772be80338ddc0649b69e");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const token = getStoredToken();
        const anonymousId = token ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$anonId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrCreateAnonId"])() ?? undefined;
        await fetch(`${baseUrl}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/activity/track`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            },
            body: JSON.stringify({
                event_name: payload.eventName,
                page: payload.page ?? undefined,
                property_id: payload.propertyId ?? undefined,
                project_id: payload.projectId ?? undefined,
                anonymous_id: anonymousId,
                search_context: payload.searchContext,
                metadata: payload.metadata
            }),
            // Tracking should never slow down or fail the caller.
            cache: 'no-store'
        });
    } catch (error) {
        console.error('Failed to track activity event:', error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/analytics/anonId.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrCreateAnonId",
    ()=>getOrCreateAnonId
]);
const ANON_ID_STORAGE_KEY = 'sonthillu_anon_id';
function getOrCreateAnonId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        let id = window.localStorage.getItem(ANON_ID_STORAGE_KEY);
        if (!id) {
            id = crypto.randomUUID();
            window.localStorage.setItem(ANON_ID_STORAGE_KEY, id);
        }
        return id;
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Sonthillu_src_1l_sif0._.js.map