(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Sonthillu/src/app/actions/leads.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnquiryContactDefaultsAction",
    ()=>getEnquiryContactDefaultsAction,
    "submitCallbackRequestAction",
    ()=>submitCallbackRequestAction,
    "submitGeneralEnquiryAction",
    ()=>submitGeneralEnquiryAction,
    "submitMultiPropertyEnquiryAction",
    ()=>submitMultiPropertyEnquiryAction,
    "submitProjectEnquiryAction",
    ()=>submitProjectEnquiryAction,
    "submitPropertyEnquiryAction",
    ()=>submitPropertyEnquiryAction,
    "submitSellerEnquiryAction",
    ()=>submitSellerEnquiryAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$crm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/crm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$crm$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/crm-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$client$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/client-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/types.ts [app-client] (ecmascript)");
;
;
;
;
;
const leadService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$client$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLeadClientService"])({
    submitToCrm: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$crm$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitLeadToCrm"],
    getPropertyById: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$crm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPropertyById"],
    getProjectById: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$crm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectById"]
});
function toActionResult(result) {
    return {
        ok: true,
        leadId: result.leadId,
        referenceNumber: result.referenceNumber,
        submittedPropertyIds: result.submittedPropertyIds,
        unavailablePropertyIds: result.unavailablePropertyIds
    };
}
function toErrorResult(error) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeadError"])(error)) {
        return {
            ok: false,
            code: error.code,
            message: error.userMessage,
            retryable: error.retryable
        };
    }
    return {
        ok: false,
        code: 'CRM_UNAVAILABLE',
        message: 'Something went wrong. Please try again shortly.',
        retryable: true
    };
}
async function getLeadContext() {
    const account = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWebsiteAccountFromStorage"])();
    return {
        identity: account ? {
            name: account.full_name,
            phone: account.phone,
            email: account.email
        } : null
    };
}
async function submitPropertyEnquiryAction(input) {
    try {
        const ctx = await getLeadContext();
        const result = await leadService.createPropertyEnquiry(input, ctx);
        return toActionResult(result);
    } catch (error) {
        return toErrorResult(error);
    }
}
async function submitProjectEnquiryAction(input) {
    try {
        const ctx = await getLeadContext();
        const result = await leadService.createProjectEnquiry(input, ctx);
        return toActionResult(result);
    } catch (error) {
        return toErrorResult(error);
    }
}
async function submitMultiPropertyEnquiryAction(input) {
    try {
        const ctx = await getLeadContext();
        const result = await leadService.createMultiPropertyEnquiry(input, ctx);
        return toActionResult(result);
    } catch (error) {
        return toErrorResult(error);
    }
}
async function submitCallbackRequestAction(input) {
    try {
        const ctx = await getLeadContext();
        const result = await leadService.createCallbackRequest(input, ctx);
        return toActionResult(result);
    } catch (error) {
        return toErrorResult(error);
    }
}
async function submitGeneralEnquiryAction(input) {
    try {
        const ctx = await getLeadContext();
        const result = await leadService.createGeneralEnquiry(input, ctx);
        return toActionResult(result);
    } catch (error) {
        return toErrorResult(error);
    }
}
async function submitSellerEnquiryAction(input) {
    try {
        const ctx = await getLeadContext();
        const result = await leadService.createSellerEnquiry(input, ctx);
        return toActionResult(result);
    } catch (error) {
        return toErrorResult(error);
    }
}
async function getEnquiryContactDefaultsAction() {
    const account = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWebsiteAccountFromStorage"])();
    if (!account) return null;
    return {
        name: account.full_name,
        phone: account.phone,
        email: account.email
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/components/leads/SellerForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SellerForm",
    ()=>SellerForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/components/ui/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/app/actions/leads.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/analytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$utm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/utm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/schemas.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function makeIdempotencyKey() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return `seller-${crypto.randomUUID()}`;
    }
    return `seller-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
const PROPERTY_TYPE_OPTIONS = [
    {
        value: 'APARTMENT',
        label: 'Apartment'
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
function SellerForm() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [propertyType, setPropertyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [expectedPrice, setExpectedPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const idempotencyKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const submittingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SellerForm.useEffect": ()=>{
            idempotencyKeyRef.current = makeIdempotencyKey();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLeadEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLeadEvent"])('seller_enquiry_started', {
                surface: 'sell_property_page'
            }));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnquiryContactDefaultsAction"])().then({
                "SellerForm.useEffect": (defaults)=>{
                    if (!defaults) return;
                    if (defaults.name) setName(defaults.name);
                    if (defaults.phone) setPhone(defaults.phone);
                    if (defaults.email) setEmail(defaults.email);
                }
            }["SellerForm.useEffect"]);
        }
    }["SellerForm.useEffect"], []);
    async function handleSubmit(e) {
        e.preventDefault();
        if (submittingRef.current) return;
        submittingRef.current = true;
        setStatus('submitting');
        const base = {
            contact: {
                name,
                phone,
                email: email.trim() || undefined
            },
            propertyType,
            location: location.trim(),
            expectedPrice: expectedPrice ? Number(expectedPrice) : undefined,
            message: message.trim() || undefined,
            consent,
            utm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$utm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readUtmParams"])(),
            idempotencyKey: idempotencyKeyRef.current ?? undefined
        };
        const validationResult = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sellerEnquirySchema"].safeParse(base);
        if (!validationResult.success) {
            const newErrors = {};
            for (const issue of validationResult.error.issues){
                const path = issue.path.join('.');
                if (!newErrors[path]) {
                    newErrors[path] = issue.message;
                }
            }
            setFieldErrors(newErrors);
            setErrorMessage('Please check the highlighted fields.');
            setStatus('error');
            submittingRef.current = false;
            // Auto-focus the first field with an error
            const firstErrorPath = validationResult.error.issues[0]?.path.join('.');
            if (firstErrorPath) {
                let elementId = '';
                if (firstErrorPath === 'contact.name') elementId = 'seller-name';
                else if (firstErrorPath === 'contact.phone') elementId = 'seller-phone';
                else if (firstErrorPath === 'contact.email') elementId = 'seller-email';
                else if (firstErrorPath === 'propertyType') elementId = 'seller-property-type';
                else if (firstErrorPath === 'location') elementId = 'seller-location';
                else if (firstErrorPath === 'expectedPrice') elementId = 'seller-expected-price';
                else if (firstErrorPath === 'consent') elementId = 'seller-consent';
                if (elementId) {
                    document.getElementById(elementId)?.focus();
                }
            }
            return;
        }
        setFieldErrors({});
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitSellerEnquiryAction"])(validationResult.data);
            submittingRef.current = false;
            if (res.ok) {
                setResult(res);
                setStatus('success');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLeadEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLeadEvent"])('seller_enquiry_submitted', {
                    surface: 'sell_property_page'
                }));
            } else {
                setErrorMessage(res.message);
                setStatus('error');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLeadEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLeadEvent"])('enquiry_failed', {
                    surface: 'sell_property_page'
                }));
            }
        } catch  {
            submittingRef.current = false;
            setErrorMessage('Something went wrong. Please try again shortly.');
            setStatus('error');
        }
    }
    if (status === 'success' && result?.ok) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-border bg-white p-8 text-center shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-sage/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-8 w-8 text-brand-sage",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5 13l4 4L19 7"
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-2xl font-semibold text-brand-navy",
                    children: "Details Received"
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4 text-text-secondary",
                    children: "Thank you for sharing your property details. Our team will contact you shortly to discuss the appraisal."
                }, void 0, false, {
                    fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                result.referenceNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "inline-block rounded-lg bg-surface-muted px-3 py-1 text-xs text-text-muted",
                    children: [
                        "Reference: ",
                        result.referenceNumber
                    ]
                }, void 0, true, {
                    fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6 rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-4 text-lg font-medium text-brand-navy",
                        children: "Your Contact Details"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                label: "Full Name",
                                id: "seller-name",
                                required: true,
                                value: name,
                                onChange: (e)=>{
                                    setName(e.target.value);
                                    if (fieldErrors['contact.name']) setFieldErrors((prev)=>({
                                            ...prev,
                                            'contact.name': ''
                                        }));
                                },
                                placeholder: "Your name",
                                error: fieldErrors['contact.name']
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        label: "Phone Number",
                                        id: "seller-phone",
                                        type: "tel",
                                        required: true,
                                        value: phone,
                                        onChange: (e)=>{
                                            setPhone(e.target.value);
                                            if (fieldErrors['contact.phone']) setFieldErrors((prev)=>({
                                                    ...prev,
                                                    'contact.phone': ''
                                                }));
                                        },
                                        placeholder: "+91 98765 43210",
                                        error: fieldErrors['contact.phone']
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        label: "Email",
                                        id: "seller-email",
                                        type: "email",
                                        optional: true,
                                        value: email,
                                        onChange: (e)=>{
                                            setEmail(e.target.value);
                                            if (fieldErrors['contact.email']) setFieldErrors((prev)=>({
                                                    ...prev,
                                                    'contact.email': ''
                                                }));
                                        },
                                        placeholder: "you@example.com",
                                        error: fieldErrors['contact.email']
                                    }, void 0, false, {
                                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "border-border"
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-4 text-lg font-medium text-brand-navy",
                        children: "Property Details"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                label: "Property Type",
                                id: "seller-property-type",
                                required: true,
                                value: propertyType,
                                onChange: (e)=>{
                                    setPropertyType(e.target.value);
                                    if (fieldErrors['propertyType']) setFieldErrors((prev)=>({
                                            ...prev,
                                            propertyType: ''
                                        }));
                                },
                                options: PROPERTY_TYPE_OPTIONS,
                                error: fieldErrors['propertyType']
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                label: "Location",
                                id: "seller-location",
                                required: true,
                                value: location,
                                onChange: (e)=>{
                                    setLocation(e.target.value);
                                    if (fieldErrors['location']) setFieldErrors((prev)=>({
                                            ...prev,
                                            location: ''
                                        }));
                                },
                                placeholder: "e.g. Gachibowli, Hyderabad",
                                error: fieldErrors['location']
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                label: "Expected Price (₹)",
                                id: "seller-expected-price",
                                type: "number",
                                min: "0",
                                optional: true,
                                value: expectedPrice,
                                onChange: (e)=>{
                                    setExpectedPrice(e.target.value);
                                    if (fieldErrors['expectedPrice']) setFieldErrors((prev)=>({
                                            ...prev,
                                            expectedPrice: ''
                                        }));
                                },
                                placeholder: "e.g. 15000000",
                                error: fieldErrors['expectedPrice']
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "border-border"
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "seller-message",
                        className: "mb-2 block text-sm font-medium text-text-primary",
                        children: [
                            "Additional Information",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 text-text-muted",
                                children: "(Optional)"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "seller-message",
                        rows: 3,
                        value: message,
                        onChange: (e)=>setMessage(e.target.value),
                        className: `w-full rounded-lg border px-4 py-3 text-text-primary transition-colors placeholder:text-text-muted focus:outline-none focus:ring-2 ${fieldErrors['message'] ? 'border-error focus:border-error focus:ring-error/20' : 'border-border focus:border-brand-navy focus:ring-brand-navy/20'}`,
                        placeholder: "Any specific features, requirements, or timeframes...",
                        "aria-invalid": !!fieldErrors['message'],
                        "aria-describedby": fieldErrors['message'] ? 'seller-message-error' : undefined
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    fieldErrors['message'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "seller-message-error",
                        className: "mt-1 text-sm text-error",
                        children: fieldErrors['message']
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-start gap-3 text-sm text-text-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                id: "seller-consent",
                                checked: consent,
                                onChange: (e)=>{
                                    setConsent(e.target.checked);
                                    if (fieldErrors['consent']) setFieldErrors((prev)=>({
                                            ...prev,
                                            consent: ''
                                        }));
                                },
                                required: true,
                                className: `mt-0.5 h-4 w-4 rounded border-border text-brand-navy focus:ring-brand-navy ${fieldErrors['consent'] ? 'border-error outline outline-1 outline-error' : ''}`,
                                "aria-invalid": !!fieldErrors['consent'],
                                "aria-describedby": fieldErrors['consent'] ? 'seller-consent-error' : undefined
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "I agree to be contacted by Sonthillu Constructions regarding the appraisal of my property."
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    fieldErrors['consent'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "seller-consent-error",
                        className: "mt-1 text-sm text-error",
                        children: fieldErrors['consent']
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "rounded-lg border border-error/30 bg-error/5 p-3 text-sm text-error",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                lineNumber: 324,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                variant: "primary",
                size: "lg",
                className: "w-full",
                loading: status === 'submitting',
                children: status === 'submitting' ? 'Submitting…' : 'Submit Details'
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/leads/SellerForm.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(SellerForm, "CJmQTTlIZf/pU1C20FU++PjEl6U=");
_c = SellerForm;
var _c;
__turbopack_context__.k.register(_c, "SellerForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error, helperText, optional = false, leftIcon, rightIcon, className, id, ...props }, ref)=>{
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "mb-2 block text-sm font-medium text-text-primary",
                children: [
                    label,
                    optional && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 text-text-muted",
                        children: "(Optional)"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
                        lineNumber: 25,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
                lineNumber: 23,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    leftIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted",
                        children: leftIcon
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        id: inputId,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full rounded-lg border bg-white px-4 py-3 text-text-primary transition-colors', 'placeholder:text-text-muted', 'focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20', error ? 'border-error focus:border-error focus:ring-error/20' : 'border-border', leftIcon && 'pl-10', rightIcon && 'pr-10', className),
                        "aria-invalid": !!error,
                        "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    rightIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-text-muted",
                        children: rightIcon
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${inputId}-error`,
                className: "mt-1 text-sm text-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
                lineNumber: 59,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            helperText && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${inputId}-help`,
                className: "mt-1 text-sm text-text-muted",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
                lineNumber: 64,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/ui/Input.tsx",
        lineNumber: 21,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = 'Input';
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/components/ui/Select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Select = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error, helperText, optional = false, options, placeholder = 'Select an option', className, id, ...props }, ref)=>{
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: selectId,
                className: "mb-2 block text-sm font-medium text-text-primary",
                children: [
                    label,
                    optional && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 text-text-muted",
                        children: "(Optional)"
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                        lineNumber: 41,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                lineNumber: 39,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        ref: ref,
                        id: selectId,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full appearance-none rounded-lg border bg-white px-4 py-3 pr-10 text-text-primary transition-colors', 'focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20', error ? 'border-error focus:border-error focus:ring-error/20' : 'border-border', className),
                        "aria-invalid": !!error,
                        "aria-describedby": error ? `${selectId}-error` : helperText ? `${selectId}-help` : undefined,
                        ...props,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: placeholder
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: option.value,
                                    disabled: option.disabled,
                                    children: option.label
                                }, option.value, false, {
                                    fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-5 w-5 text-text-muted",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${selectId}-error`,
                className: "mt-1 text-sm text-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                lineNumber: 84,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            helperText && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${selectId}-help`,
                className: "mt-1 text-sm text-text-muted",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
                lineNumber: 89,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Sonthillu/src/components/ui/Select.tsx",
        lineNumber: 37,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Select;
Select.displayName = 'Select';
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/crm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLead",
    ()=>createLead,
    "getProjectByCode",
    ()=>getProjectByCode,
    "getProjectById",
    ()=>getProjectById,
    "getProjectDetailByCode",
    ()=>getProjectDetailByCode,
    "getProjectDetailById",
    ()=>getProjectDetailById,
    "getProjects",
    ()=>getProjects,
    "getPropertyByCode",
    ()=>getPropertyByCode,
    "getPropertyById",
    ()=>getPropertyById,
    "getPropertyDetailByCode",
    ()=>getPropertyDetailByCode,
    "getPropertyDetailById",
    ()=>getPropertyDetailById,
    "getPublishedProjects",
    ()=>getPublishedProjects,
    "getPublishedProperties",
    ()=>getPublishedProperties,
    "healthCheck",
    ()=>healthCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/dto.ts [app-client] (ecmascript)");
;
;
// Talks to the CRM (apps/api) directly — the Sonthillu-Backend BFF this used
// to call is retired (consolidation plan, Decision 5). Must be NEXT_PUBLIC_*:
// a static export has no server at request time, so anything read here has
// to already be inlined into the client bundle at build time.
function getBackendUrl() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CRM_API_BASE_URL || 'http://localhost:3000/api/v1';
}
function getApiKey() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CRM_API_KEY || '';
}
const BRAND = 'sonthillu';
async function backendFetch(endpoint, options = {}) {
    const { method = 'GET', body, cache = 'force-cache', next } = options;
    const backendUrl = getBackendUrl();
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': getApiKey()
    };
    const fetchOptions = {
        method,
        headers,
        cache
    };
    if (body && method !== 'GET') {
        fetchOptions.body = JSON.stringify(body);
    }
    if (next) {
        fetchOptions.next = next;
    }
    const url = `${backendUrl}/public/${BRAND}${endpoint}`;
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        const error = await response.json().catch(()=>({
                error: 'Unknown error'
            }));
        const err = new Error(error.error || `Backend API error: ${response.status}`);
        err.status = response.status;
        throw err;
    }
    return response.json();
}
async function getPublishedProperties(filters) {
    const params = new URLSearchParams();
    if (filters?.location) params.set('location', filters.location);
    if (filters?.category) params.set('category', filters.category);
    if (filters?.listing_type && filters.listing_type !== 'ANY') params.set('listing_type', filters.listing_type);
    if (filters?.bedrooms_min) params.set('bedrooms_min', String(filters.bedrooms_min));
    if (filters?.bedrooms_max) params.set('bedrooms_max', String(filters.bedrooms_max));
    if (filters?.budget_min) params.set('budget_min', String(filters.budget_min));
    if (filters?.budget_max) params.set('budget_max', String(filters.budget_max));
    if (filters?.page) params.set('page', String(filters.page));
    if (filters?.limit) params.set('limit', String(filters.limit));
    if (filters?.sort && filters.sort !== 'relevance') params.set('sort', filters.sort);
    const queryString = params.toString();
    const endpoint = `/properties${queryString ? `?${queryString}` : ''}`;
    try {
        const response = await backendFetch(endpoint, {
            next: {
                revalidate: 300
            }
        });
        // Filter out commercial properties to prevent collisions with Radha Real Home
        const residentialTypes = [
            'APARTMENT',
            'VILLA',
            'INDEPENDENT_HOUSE',
            'PLOT',
            'AGRICULTURAL_LAND'
        ];
        const filteredData = response.filter((p)=>residentialTypes.includes(p.category) || residentialTypes.includes(p.propertyType));
        return {
            data: filteredData,
            error: false
        };
    } catch (error) {
        if (error?.digest === 'DYNAMIC_SERVER_USAGE') throw error;
        if (error?.status >= 500 || error?.code === 'ECONNREFUSED') {
            console.warn(`Backend unavailable (Property fetch failed): ${error.message}`);
        } else {
            console.error('Failed to fetch published properties:', error);
        }
        return {
            data: [],
            error: true
        };
    }
}
async function getPropertyById(id) {
    try {
        const response = await backendFetch(`/properties/${id}`, {
            next: {
                revalidate: 300
            }
        });
        return response;
    } catch (error) {
        if (error.status === 404) return null;
        console.error(`Failed to fetch property ${id}:`, error);
        throw error;
    }
}
async function getPropertyByCode(code) {
    try {
        const response = await backendFetch(`/properties/code/${code}`, {
            next: {
                revalidate: 300
            }
        });
        return response;
    } catch (error) {
        if (error.status === 404) return null;
        console.error(`Failed to fetch property by code ${code}:`, error);
        throw error;
    }
}
async function getPropertyDetailById(id) {
    try {
        const property = await backendFetch(`/properties/${id}`, {
            next: {
                revalidate: 300
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPublicPropertyDetail"])(property);
    } catch (error) {
        if (error.status === 404) return null;
        console.error(`Failed to fetch property detail ${id}:`, error);
        throw error;
    }
}
async function getPropertyDetailByCode(code) {
    try {
        const property = await backendFetch(`/properties/code/${code}`, {
            next: {
                revalidate: 300
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPublicPropertyDetail"])(property);
    } catch (error) {
        if (error.status === 404) return null;
        console.error(`Failed to fetch property detail by code ${code}:`, error);
        throw error;
    }
}
async function getProjects() {
    try {
        const response = await backendFetch('/projects', {
            next: {
                revalidate: 600
            }
        });
        return response;
    } catch (error) {
        if (error?.status >= 500 || error?.code === 'ECONNREFUSED') {
            console.warn(`Backend unavailable (Projects fetch failed): ${error.message}`);
        } else {
            console.error('Failed to fetch projects:', error);
        }
        return [];
    }
}
async function getProjectById(id) {
    try {
        const response = await backendFetch(`/projects/${id}`, {
            next: {
                revalidate: 600
            }
        });
        return response;
    } catch (error) {
        if (error.status === 404) return null;
        console.error(`Failed to fetch project ${id}:`, error);
        throw error;
    }
}
async function getProjectByCode(code) {
    try {
        const response = await backendFetch(`/projects/code/${code}`, {
            next: {
                revalidate: 600
            }
        });
        return response;
    } catch (error) {
        if (error.status === 404) return null;
        console.error(`Failed to fetch project by code ${code}:`, error);
        throw error;
    }
}
async function getPublishedProjects() {
    try {
        const response = await backendFetch('/projects', {
            next: {
                revalidate: 600
            }
        });
        return response.map(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPublicProject"]);
    } catch (error) {
        if (error?.digest === 'DYNAMIC_SERVER_USAGE') throw error;
        if (error?.status >= 500 || error?.code === 'ECONNREFUSED') {
            console.warn(`Backend unavailable (Published projects fetch failed): ${error.message}`);
        } else {
            console.error('Failed to fetch published projects:', error);
        }
        return [];
    }
}
async function getProjectDetailById(id) {
    try {
        const response = await backendFetch(`/projects/${id}`, {
            next: {
                revalidate: 600
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPublicProjectDetail"])(response);
    } catch (error) {
        if (error.status === 404) return null;
        console.error(`Failed to fetch project detail ${id}:`, error);
        throw error;
    }
}
async function getProjectDetailByCode(code) {
    try {
        const response = await backendFetch(`/projects/code/${code}`, {
            next: {
                revalidate: 600
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPublicProjectDetail"])(response);
    } catch (error) {
        if (error.status === 404) return null;
        console.error(`Failed to fetch project detail by code ${code}:`, error);
        throw error;
    }
}
const LeadCreateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    customer_name: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email().optional(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    property_type_preference: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    preferred_location: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    budget_max: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    utm_source: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    utm_medium: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    utm_campaign: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
async function createLead(data) {
    const validated = LeadCreateSchema.parse(data);
    const response = await backendFetch('/leads', {
        method: 'POST',
        body: validated,
        cache: 'no-store'
    });
    return {
        leadId: response.leadId
    };
}
async function healthCheck() {
    try {
        const backendUrl = getBackendUrl();
        const response = await fetch(`${backendUrl}/health`);
        return response.ok;
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/leads/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LEAD_EVENT_NAME",
    ()=>LEAD_EVENT_NAME,
    "buildLeadEvent",
    ()=>buildLeadEvent,
    "trackLeadEvent",
    ()=>trackLeadEvent
]);
const LEAD_EVENT_NAME = 'sonthillu:lead-activity';
function buildLeadEvent(eventType, input) {
    return {
        ...input,
        eventType,
        timestamp: new Date().toISOString()
    };
}
function trackLeadEvent(payload) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dispatchEvent(new CustomEvent(LEAD_EVENT_NAME, {
        detail: payload
    }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/leads/client-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLeadClientService",
    ()=>createLeadClientService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/zod/v3/ZodError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/schemas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/types.ts [app-client] (ecmascript)");
;
;
;
;
function toUserMessage(error) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodError"]) {
        const first = error.issues[0]?.message;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('VALIDATION_ERROR', first || 'Please check the details you entered.', false);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('VALIDATION_ERROR', 'Please check the details you entered.', false);
}
function applyIdentity(contact, identity) {
    if (!identity) return contact;
    return {
        name: identity.name || contact.name,
        phone: identity.phone || contact.phone,
        email: identity.email || contact.email
    };
}
function enrichFromProperty(payload, property) {
    const propertyType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropertyTypeToCrm"])(property.category);
    return {
        ...payload,
        ...propertyType ? {
            property_type_preference: propertyType
        } : {},
        ...property.location ? {
            preferred_location: property.location
        } : {},
        ...typeof property.price === 'number' ? {
            budget_max: property.price
        } : {}
    };
}
function enrichFromProject(payload, project) {
    return {
        ...payload,
        ...project.location ? {
            preferred_location: project.location
        } : {}
    };
}
function mapContactTime(time) {
    if (time === 'MORNING' || time === 'AFTERNOON') return 'business_hours';
    if (time === 'EVENING') return 'after_hours';
    return undefined;
}
function createLeadClientService(deps) {
    const { submitToCrm, getPropertyById, getProjectById } = deps;
    async function submit(payload) {
        try {
            const submission = await submitToCrm(payload);
            return {
                leadId: submission.leadId,
                referenceNumber: submission.leadCode
            };
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]) throw error;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('CRM_UNAVAILABLE', 'We could not reach our team right now. Please try again shortly.', true);
        }
    }
    async function createPropertyEnquiry(raw, ctx = {}) {
        let parsed;
        try {
            parsed = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyEnquirySchema"].parse(raw);
        } catch (error) {
            throw toUserMessage(error);
        }
        const property = await getPropertyById(parsed.propertyId);
        if (!property) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('PROPERTY_UNAVAILABLE', 'This property is no longer available. Please choose another property.', false);
        }
        const contact = applyIdentity(parsed.contact, ctx.identity);
        const payload = enrichFromProperty({
            customer_name: contact.name,
            phone: contact.phone,
            email: contact.email || undefined,
            enquiry_type: 'property',
            property_ids: [
                property.id
            ],
            ...parsed.preferredContactTime ? {
                preferred_contact_time: mapContactTime(parsed.preferredContactTime)
            } : {},
            ...parsed.message ? {
                notes: parsed.message
            } : {},
            ...parsed.utm?.utmSource ? {
                utm_source: parsed.utm.utmSource
            } : {},
            ...parsed.utm?.utmMedium ? {
                utm_medium: parsed.utm.utmMedium
            } : {},
            ...parsed.utm?.utmCampaign ? {
                utm_campaign: parsed.utm.utmCampaign
            } : {}
        }, property);
        return submit(payload);
    }
    async function createProjectEnquiry(raw, ctx = {}) {
        let parsed;
        try {
            parsed = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectEnquirySchema"].parse(raw);
        } catch (error) {
            throw toUserMessage(error);
        }
        const project = await getProjectById(parsed.projectId);
        if (!project) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('PROJECT_NOT_FOUND', 'This project is no longer available. Please choose another project.', false);
        }
        const contact = applyIdentity(parsed.contact, ctx.identity);
        const payload = enrichFromProject({
            customer_name: contact.name,
            phone: contact.phone,
            email: contact.email || undefined,
            enquiry_type: 'project',
            project_id: project.id,
            ...parsed.preferredContactTime ? {
                preferred_contact_time: mapContactTime(parsed.preferredContactTime)
            } : {},
            ...parsed.message ? {
                notes: parsed.message
            } : {},
            ...parsed.utm?.utmSource ? {
                utm_source: parsed.utm.utmSource
            } : {},
            ...parsed.utm?.utmMedium ? {
                utm_medium: parsed.utm.utmMedium
            } : {},
            ...parsed.utm?.utmCampaign ? {
                utm_campaign: parsed.utm.utmCampaign
            } : {}
        }, project);
        return submit(payload);
    }
    async function createMultiPropertyEnquiry(raw, ctx = {}) {
        let parsed;
        try {
            parsed = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multiPropertyEnquirySchema"].parse(raw);
        } catch (error) {
            throw toUserMessage(error);
        }
        const uniqueIds = [
            ...new Set(parsed.propertyIds.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"]))
        ];
        const eligible = [];
        const unavailable = [];
        for (const id of uniqueIds){
            const property = await getPropertyById(id);
            if (property) eligible.push(property);
            else unavailable.push(id);
        }
        if (eligible.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('ALL_PROPERTIES_UNAVAILABLE', 'The properties you selected are no longer available. Please choose other properties.', false);
        }
        const contact = applyIdentity(parsed.contact, ctx.identity);
        const first = eligible[0];
        const base = {
            customer_name: contact.name,
            phone: contact.phone,
            email: contact.email || undefined,
            enquiry_type: 'property',
            property_ids: eligible.map((p)=>p.id),
            ...parsed.preferredContactTime ? {
                preferred_contact_time: mapContactTime(parsed.preferredContactTime)
            } : {},
            ...parsed.message ? {
                notes: parsed.message
            } : {},
            ...parsed.utm?.utmSource ? {
                utm_source: parsed.utm.utmSource
            } : {},
            ...parsed.utm?.utmMedium ? {
                utm_medium: parsed.utm.utmMedium
            } : {},
            ...parsed.utm?.utmCampaign ? {
                utm_campaign: parsed.utm.utmCampaign
            } : {}
        };
        const payload = enrichFromProperty(base, first);
        const result = await submit(payload);
        return {
            ...result,
            submittedPropertyIds: eligible.map((p)=>p.id),
            unavailablePropertyIds: unavailable
        };
    }
    async function createCallbackRequest(raw, ctx = {}) {
        let parsed;
        try {
            parsed = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callbackRequestSchema"].parse(raw);
        } catch (error) {
            throw toUserMessage(error);
        }
        let property = null;
        if (parsed.context?.propertyId) {
            property = await getPropertyById(parsed.context.propertyId);
            if (!property) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('PROPERTY_UNAVAILABLE', 'This property is no longer available.', false);
        }
        let project = null;
        if (parsed.context?.projectId) {
            project = await getProjectById(parsed.context.projectId);
            if (!project) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('PROJECT_NOT_FOUND', 'This project is no longer available.', false);
        }
        const contact = applyIdentity(parsed.contact, ctx.identity);
        let payload = {
            customer_name: contact.name,
            phone: contact.phone,
            email: contact.email || undefined,
            enquiry_type: 'call',
            ...parsed.preferredContactTime ? {
                preferred_contact_time: mapContactTime(parsed.preferredContactTime)
            } : {},
            ...parsed.message ? {
                notes: parsed.message
            } : {},
            ...property ? {
                property_ids: [
                    property.id
                ]
            } : {},
            ...project ? {
                project_id: project.id
            } : {},
            ...parsed.utm?.utmSource ? {
                utm_source: parsed.utm.utmSource
            } : {},
            ...parsed.utm?.utmMedium ? {
                utm_medium: parsed.utm.utmMedium
            } : {},
            ...parsed.utm?.utmCampaign ? {
                utm_campaign: parsed.utm.utmCampaign
            } : {}
        };
        if (property) payload = enrichFromProperty(payload, property);
        if (project) payload = enrichFromProject(payload, project);
        return submit(payload);
    }
    async function createGeneralEnquiry(raw, ctx = {}) {
        let parsed;
        try {
            parsed = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generalEnquirySchema"].parse(raw);
        } catch (error) {
            throw toUserMessage(error);
        }
        const contact = applyIdentity(parsed.contact, ctx.identity);
        const payload = {
            customer_name: contact.name,
            phone: contact.phone,
            email: contact.email || undefined,
            enquiry_type: 'consultation',
            ...parsed.preferredContactTime ? {
                preferred_contact_time: mapContactTime(parsed.preferredContactTime)
            } : {},
            ...parsed.message ? {
                notes: parsed.message
            } : {},
            ...parsed.utm?.utmSource ? {
                utm_source: parsed.utm.utmSource
            } : {},
            ...parsed.utm?.utmMedium ? {
                utm_medium: parsed.utm.utmMedium
            } : {},
            ...parsed.utm?.utmCampaign ? {
                utm_campaign: parsed.utm.utmCampaign
            } : {}
        };
        return submit(payload);
    }
    async function createSellerEnquiry(raw, ctx = {}) {
        let parsed;
        try {
            parsed = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sellerEnquirySchema"].parse(raw);
        } catch (error) {
            throw toUserMessage(error);
        }
        const contact = applyIdentity(parsed.contact, ctx.identity);
        const propertyTypeMapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropertyTypeToCrm"])(parsed.propertyType);
        const payload = {
            customer_name: contact.name,
            phone: contact.phone,
            email: contact.email || undefined,
            enquiry_type: 'appraisal',
            preferred_location: parsed.location,
            ...propertyTypeMapped ? {
                property_type_preference: propertyTypeMapped
            } : {},
            ...typeof parsed.expectedPrice === 'number' ? {
                budget_max: parsed.expectedPrice
            } : {},
            ...parsed.preferredContactTime ? {
                preferred_contact_time: mapContactTime(parsed.preferredContactTime)
            } : {},
            ...parsed.message ? {
                notes: parsed.message
            } : {},
            ...parsed.utm?.utmSource ? {
                utm_source: parsed.utm.utmSource
            } : {},
            ...parsed.utm?.utmMedium ? {
                utm_medium: parsed.utm.utmMedium
            } : {},
            ...parsed.utm?.utmCampaign ? {
                utm_campaign: parsed.utm.utmCampaign
            } : {}
        };
        return submit(payload);
    }
    return {
        createPropertyEnquiry,
        createProjectEnquiry,
        createMultiPropertyEnquiry,
        createCallbackRequest,
        createGeneralEnquiry,
        createSellerEnquiry
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/leads/crm-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitLeadToCrm",
    ()=>submitLeadToCrm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/leads/types.ts [app-client] (ecmascript)");
;
;
async function submitLeadToCrm(payload) {
    // NEXT_PUBLIC_* — this now runs in the browser (static export has no
    // server to keep a secret env var on), same trust boundary as any other
    // public-site API key. See lib/crm.ts's getApiKey() for the same pattern.
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CRM_API_BASE_URL;
    const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CRM_API_KEY;
    if (!baseUrl || !apiKey) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('CRM_UNAVAILABLE', 'We could not reach our team right now. Please try again shortly.', true);
    }
    let response;
    try {
        response = await fetch(`${baseUrl}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/leads`, {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            cache: 'no-store',
            signal: AbortSignal.timeout(10000)
        });
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('CRM_UNAVAILABLE', 'We could not reach our team right now. Please try again shortly.', true);
    }
    if (!response.ok) {
        if (response.status === 429) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('RATE_LIMITED', 'Too many requests. Please try again later.', true);
        }
        if (response.status >= 500) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('CRM_UNAVAILABLE', 'We could not reach our team right now. Please try again shortly.', true);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('CRM_REJECTED', 'We could not submit your request. Please check your details and try again.', false);
    }
    const data = await response.json().catch(()=>({}));
    if (typeof data.leadId !== 'number') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$leads$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadError"]('CRM_REJECTED', 'We could not submit your request. Please try again.', true);
    }
    return {
        leadId: data.leadId,
        leadCode: data.leadCode
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/leads/schemas.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MULTI_PROPERTY_MAX",
    ()=>MULTI_PROPERTY_MAX,
    "callbackRequestSchema",
    ()=>callbackRequestSchema,
    "generalEnquirySchema",
    ()=>generalEnquirySchema,
    "idempotencyKeyInputSchema",
    ()=>idempotencyKeyInputSchema,
    "isValidPreferredContactTime",
    ()=>isValidPreferredContactTime,
    "multiPropertyEnquirySchema",
    ()=>multiPropertyEnquirySchema,
    "preferredContactTimeValues",
    ()=>preferredContactTimeValues,
    "projectEnquirySchema",
    ()=>projectEnquirySchema,
    "propertyEnquirySchema",
    ()=>propertyEnquirySchema,
    "sellerEnquirySchema",
    ()=>sellerEnquirySchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
const MULTI_PROPERTY_MAX = 10;
const nameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(2, 'Please enter your name').max(80, 'Name must be 80 characters or fewer');
const phoneSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().regex(/^\+?[1-9]\d{9,14}$/, 'Enter a valid phone number');
const emailSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().toLowerCase().email('Enter a valid email address').max(254, 'Email must be 254 characters or fewer').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(''));
const preferredContactTimeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'MORNING',
    'AFTERNOON',
    'EVENING'
]);
const messageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(2000, 'Message must be 2000 characters or fewer').optional();
const consentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true, {
    errorMap: ()=>({
            message: 'Please accept to allow us to contact you'
        })
});
const idempotencyKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(8, 'Missing request identifier').max(128, 'Request identifier is too long').optional();
const utmSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    utmSource: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(128).optional(),
    utmMedium: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(128).optional(),
    utmCampaign: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(128).optional()
});
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: nameSchema,
    phone: phoneSchema,
    email: emailSchema
});
const baseEnquirySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    contact: contactSchema,
    preferredContactTime: preferredContactTimeSchema.optional(),
    message: messageSchema,
    consent: consentSchema,
    utm: utmSchema.optional(),
    idempotencyKey: idempotencyKeySchema
});
const propertyEnquirySchema = baseEnquirySchema.extend({
    propertyId: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive('Select a valid property')
});
const projectEnquirySchema = baseEnquirySchema.extend({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive('Select a valid project')
});
const multiPropertyEnquirySchema = baseEnquirySchema.extend({
    propertyIds: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive('Select a valid property')).min(1, 'Select at least one property').max(MULTI_PROPERTY_MAX, `Select up to ${MULTI_PROPERTY_MAX} properties`)
});
const callbackRequestSchema = baseEnquirySchema.extend({
    context: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        propertyId: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional(),
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional()
    }).optional()
});
const generalEnquirySchema = baseEnquirySchema;
const propertyTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'APARTMENT',
    'VILLA',
    'INDEPENDENT_HOUSE'
]);
const sellerEnquirySchema = baseEnquirySchema.extend({
    propertyType: propertyTypeSchema,
    location: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(2, 'Enter a location').max(128, 'Location is too long'),
    expectedPrice: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive('Expected price must be positive').optional()
});
const idempotencyKeyInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    idempotencyKey: idempotencyKeySchema
});
const preferredContactTimeValues = [
    'MORNING',
    'AFTERNOON',
    'EVENING'
];
const isValidPreferredContactTime = (value)=>typeof value === 'string' && preferredContactTimeValues.includes(value);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/leads/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadError",
    ()=>LeadError,
    "isLeadError",
    ()=>isLeadError,
    "mapPropertyTypeToCrm",
    ()=>mapPropertyTypeToCrm
]);
class LeadError extends Error {
    code;
    userMessage;
    retryable;
    constructor(code, userMessage, retryable){
        super(userMessage);
        this.name = 'LeadError';
        this.code = code;
        this.userMessage = userMessage;
        this.retryable = retryable;
    }
}
function isLeadError(error) {
    return error instanceof LeadError;
}
/** Mapping of website property types to the CRM's established vocabulary. */ const PROPERTY_TYPE_TO_CRM = {
    APARTMENT: 'APARTMENT',
    VILLA: 'RESIDENTIAL_VILLA',
    INDEPENDENT_HOUSE: 'INDEPENDENT_HOUSE'
};
function mapPropertyTypeToCrm(category) {
    return PROPERTY_TYPE_TO_CRM[category];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/leads/utm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readUtmParams",
    ()=>readUtmParams
]);
function readUtmParams(search = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.location.search) {
    if (!search) return {};
    const params = new URLSearchParams(search);
    const take = (value)=>value ? value.trim().slice(0, 128) || undefined : undefined;
    return {
        utmSource: take(params.get('utm_source')),
        utmMedium: take(params.get('utm_medium')),
        utmCampaign: take(params.get('utm_campaign'))
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Sonthillu_src_1ag1fmk._.js.map