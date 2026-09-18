module.exports = [
"[project]/Sonthillu/src/app/actions/analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackActivityEventAction",
    ()=>trackActivityEventAction
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
async function trackActivityEventAction(payload) {
    try {
        const baseUrl = ("TURBOPACK compile-time value", "https://crm-backend-1gyt.onrender.com/api/v1");
        const apiKey = ("TURBOPACK compile-time value", "sk_pro_llu_0d78fcb987f772be80338ddc0649b69e");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const token = getStoredToken();
        const anonymousId = token ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$anonId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateAnonId"])() ?? undefined;
        await fetch(`${baseUrl}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/activity/track`, {
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
];

//# sourceMappingURL=Sonthillu_src_06obzgk._.js.map