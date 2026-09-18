(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Sonthillu/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeCacheNode, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            cacheNode: activeCacheNode,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        cacheNode: activeCacheNode,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                cacheNode: oldEntry.cacheNode,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Browser variant of `./client-boundary-params`. In the browser the params and
// searchParams are created at render time rather than dynamically tracked.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createClientParams: null,
    createClientSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createClientParams: function() {
        return _paramsbrowser.createRenderParamsFromClient;
    },
    createClientSearchParams: function() {
        return _searchparamsbrowser.createRenderSearchParamsFromClient;
    }
});
const _paramsbrowser = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
const _searchparamsbrowser = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    const clientSearchParams = (0, _clientboundaryparams.createClientSearchParams)(searchParams);
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        params: clientParams,
        searchParams: clientSearchParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...slots,
        params: clientParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return _impl.InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return _impl.PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return _impl.RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return _impl.SlotMarker;
    }
});
const _impl = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return SlotMarker;
    }
});
const InstantValidationBoundaryContext = null;
const PlaceValidationBoundaryBelowThisLevel = null;
const RenderValidationBoundaryAtThisLevel = null;
const SlotMarker = null;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Sonthillu/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Sonthillu/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _boundary = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcachestatemanager = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const enableNewScrollHandler = ("TURBOPACK compile-time value", true);
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Resolve the root scroll padding used by the viewport check.
 *
 * Computed lengths serialize as pixels, but percentages remain relative to
 * the scrollport. Preserve the existing behavior for values that still
 * contain unresolved CSS math.
 */ function getScrollPaddingTopInPixels(htmlElement, viewportHeight) {
    const scrollPaddingTop = getComputedStyle(htmlElement).scrollPaddingTop;
    const value = Number.parseFloat(scrollPaddingTop);
    if (!Number.isFinite(value) || value < 0) {
        return 0;
    }
    if (scrollPaddingTop.endsWith('px')) {
        return value;
    }
    if (scrollPaddingTop.endsWith('%')) {
        return value / 100 * viewportHeight;
    }
    return 0;
}
/**
 * Check where the top corner of the HTMLElement is relative to the usable
 * viewport.
 *
 * Scroll padding is resolved lazily so an empty Fragment does not trigger a
 * computed style read. The caller caches the value for the second check.
 */ function getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) {
    const rects = instance.getClientRects();
    if (rects.length === 0) {
        return 0;
    }
    let elementTop = Number.POSITIVE_INFINITY;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= getScrollPaddingTop() && elementTop <= viewportHeight ? 1 : 2;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0] ?? null;
}
class InnerScrollAndFocusHandlerOld extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        this.handlePotentialScroll();
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once.
            const { focusAndScrollRef, cacheNode } = this.props;
            const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
            if (scrollRef === null || !scrollRef.current) return;
            let domNode = null;
            const hashFragment = focusAndScrollRef.hashFragment;
            if (hashFragment) {
                domNode = getHashFragmentDomNode(hashFragment);
                if (domNode === null) {
                    // A missing hash target is still a handled scroll intent. Do not
                    // fall back to the route segment or leave the intent pending.
                    scrollRef.current = false;
                    focusAndScrollRef.onlyHashChange = false;
                    focusAndScrollRef.hashFragment = null;
                    return;
                }
            }
            // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
            // This already caused a bug where the first child was a <link/> in head.
            if (!domNode) {
                domNode = findDOMNode(this);
            }
            // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
            if (!(domNode instanceof Element)) {
                return;
            }
            // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
            // If the element is skipped, try to select the next sibling and try again.
            while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                if ("TURBOPACK compile-time truthy", 1) {
                    if (domNode.parentElement?.localName === 'head') {
                    // We enter this state when metadata was rendered as part of the page or via Next.js.
                    // This is always a bug in Next.js and caused by React hoisting metadata.
                    // Fixed with `experimental.appNewScrollHandler`
                    }
                }
                // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                if (domNode.nextElementSibling === null) {
                    return;
                }
                domNode = domNode.nextElementSibling;
            }
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                // In case of hash scroll, we only need to scroll the element into view
                if (hashFragment) {
                    domNode.scrollIntoView();
                    return;
                }
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                let scrollPaddingTop = null;
                const getScrollPaddingTop = ()=>{
                    if (scrollPaddingTop === null) {
                        // Reuse the style and layout update from the geometry read above.
                        scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                    }
                    return scrollPaddingTop;
                };
                // If the element's top edge is already in the viewport, exit early.
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) === 1) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) !== 1) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true,
                onlyHashChange: focusAndScrollRef.onlyHashChange
            });
            // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
            focusAndScrollRef.onlyHashChange = false;
            focusAndScrollRef.hashFragment = null;
            // Set focus on the element
            domNode.focus();
        };
    }
}
/**
 * Fork of InnerScrollAndFocusHandlerOld using Fragment refs for scrolling.
 * No longer focuses the first host descendant.
 */ function InnerScrollHandlerNew(props) {
    const childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(()=>{
        const { focusAndScrollRef, cacheNode } = props;
        const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        let instance = null;
        const hashFragment = focusAndScrollRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
            if (instance === null) {
                // A missing hash target is still a handled scroll intent. Do not
                // fall back to the route Fragment or leave the intent pending.
                scrollRef.current = false;
                focusAndScrollRef.onlyHashChange = false;
                focusAndScrollRef.hashFragment = null;
                return;
            }
        } else {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        let didHandleScroll = false;
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
            const htmlElement = document.documentElement;
            let viewportHeight = null;
            let initialTargetState = null;
            let scrollPaddingTop = null;
            const getScrollPaddingTop = ()=>{
                if (scrollPaddingTop === null) {
                    // Reuse the style and layout update from the geometry read.
                    scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                }
                return scrollPaddingTop;
            };
            if (!hashFragment) {
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                viewportHeight = htmlElement.clientHeight;
                initialTargetState = getScrollTargetState(instance, viewportHeight, getScrollPaddingTop);
                // An empty Fragment is not a scroll target. In particular, avoid
                // React's sibling fallback and leave the scroll signal available
                // for another changed segment.
                if (initialTargetState === 0) {
                    return;
                }
            }
            didHandleScroll = true;
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            // This handler intentionally leaves focus untouched; resetting focus on
            // navigation is deferred.
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // If the element's top edge is already in the viewport, exit early.
            if (initialTargetState === 1) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) === 2) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: focusAndScrollRef.onlyHashChange
        });
        if (!didHandleScroll) {
            return;
        }
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        focusAndScrollRef.onlyHashChange = false;
        focusAndScrollRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
const InnerScrollAndMaybeFocusHandler = ("TURBOPACK compile-time truthy", 1) ? InnerScrollHandlerNew : "TURBOPACK unreachable";
function ScrollAndMaybeFocusHandler({ children, cacheNode }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndMaybeFocusHandler, {
        focusAndScrollRef: context.focusAndScrollRef,
        cacheNode: cacheNode,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, cacheNode: maybeCacheNode, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider({ loading, children }) {
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same CacheNode.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    const parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentCacheNode: parentContext.parentCacheNode,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        const loadingRsc = loading[0];
        const loadingStyles = loading[1];
        const loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const maybeParentSlots = parentCacheNode.slots;
    if (activeTree === undefined || maybeParentSlots === null) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    let maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const activeSegment = activeTree[0];
    const activeCacheNode = maybeParentSlots[parallelRouterKey] ?? null;
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeCacheNode, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const cacheNode = bfcacheEntry.cacheNode;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        let templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndMaybeFocusHandler, {
            cacheNode: cacheNode,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        cacheNode: cacheNode,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Sonthillu/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Sonthillu/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Sonthillu/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
"[project]/Sonthillu/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/Sonthillu/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            const { warnOnce } = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
            warnOnce('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/Sonthillu/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
"[project]/Sonthillu/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Sonthillu/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Sonthillu/src/app/actions/customer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/types.ts [app-client] (ecmascript)");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.localStorage.getItem(TOKEN_STORAGE_KEY);
    } catch  {
        return null;
    }
}
function savedItemUrl(kind) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CRM_API_BASE_URL || 'http://localhost:3000/api/v1';
    return `${baseUrl}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/account/${kind}`;
}
function authHeaders() {
    const token = getStoredToken();
    const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CRM_API_KEY || '';
    return {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
        ...token ? {
            Authorization: `Bearer ${token}`
        } : {}
    };
}
function assertId(propertyId) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"])(propertyId)) {
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
    const shortlistIds = guestShortlist.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"]);
    const compareIds = guestCompare.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"]).slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"]);
    await Promise.all([
        ...shortlistIds.map((id)=>addSavedItem('shortlist', id)),
        ...compareIds.map((id)=>addSavedItem('compare', id))
    ]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/components/analytics/PageTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTracker",
    ()=>PageTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/analytics/activity.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PageTracker() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTracker.useEffect": ()=>{
            // Only track generic page_view if it's not a more specific event we track elsewhere.
            // E.g., property detail view fires 'property_view'. We track that specifically.
            if (pathname.startsWith('/properties/')) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackClientActivity"])({
                eventName: 'page_view',
                page: pathname
            });
        }
    }["PageTracker.useEffect"], [
        pathname,
        searchParams
    ]);
    return null;
}
_s(PageTracker, "h6p6PpCFmP4Mu5bIMduBzSZThBE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PageTracker;
var _c;
__turbopack_context__.k.register(_c, "PageTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerActivityProvider",
    ()=>CustomerActivityProvider,
    "useCustomerActivity",
    ()=>useCustomerActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/guest.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/activity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/app/actions/customer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const CustomerActivityContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function getStorage() {
    return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.localStorage;
}
function CustomerActivityProvider({ children }) {
    _s();
    const { isAuthenticated, isLoading: isAccountLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebsiteAccount"])();
    const [shortlist, setShortlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [compare, setCompare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('guest');
    // Initialise from guest localStorage.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerActivityProvider.useEffect": ()=>{
            const storage = getStorage();
            if (!storage) return;
            setShortlist((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readGuestShortlist"])(storage));
            setCompare((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readGuestCompare"])(storage));
        }
    }["CustomerActivityProvider.useEffect"], []);
    // Switch mode once the WebsiteAccount context resolves whether a token
    // (and thus a logged-in account) exists.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerActivityProvider.useEffect": ()=>{
            if (isAccountLoading) return;
            setMode(isAuthenticated ? 'customer' : 'guest');
        }
    }["CustomerActivityProvider.useEffect"], [
        isAccountLoading,
        isAuthenticated
    ]);
    // Merge guest localStorage into customer account when mode switches to customer.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerActivityProvider.useEffect": ()=>{
            if (mode !== 'customer') return;
            const storage = getStorage();
            if (!storage) return;
            const guestShortlist = JSON.parse(storage.getItem('sonthillu_shortlist') || '[]');
            const guestCompare = JSON.parse(storage.getItem('sonthillu_compare') || '[]');
            if (guestShortlist.length > 0 || guestCompare.length > 0) {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeGuestActivityAction"])(guestShortlist, guestCompare).then({
                    "CustomerActivityProvider.useEffect": ()=>{
                        storage.removeItem('sonthillu_shortlist');
                        storage.removeItem('sonthillu_compare');
                        // Reset local state — server actions will revalidate paths
                        setShortlist([]);
                        setCompare([]);
                    }
                }["CustomerActivityProvider.useEffect"]);
            }
        }
    }["CustomerActivityProvider.useEffect"], [
        mode
    ]);
    const isShortlisted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[isShortlisted]": (propertyId)=>shortlist.includes(propertyId)
    }["CustomerActivityProvider.useCallback[isShortlisted]"], [
        shortlist
    ]);
    const isCompared = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[isCompared]": (propertyId)=>compare.includes(propertyId)
    }["CustomerActivityProvider.useCallback[isCompared]"], [
        compare
    ]);
    const addToShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[addToShortlist]": (propertyId, surface)=>{
            const storage = getStorage();
            if (mode === 'customer') {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToShortlistAction"])(propertyId);
                setShortlist({
                    "CustomerActivityProvider.useCallback[addToShortlist]": (prev)=>prev.includes(propertyId) ? prev : [
                            propertyId,
                            ...prev
                        ]
                }["CustomerActivityProvider.useCallback[addToShortlist]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('shortlist_add', {
                    propertyId,
                    surface
                }));
                return;
            }
            if (!storage) return;
            const { ids } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleGuestShortlist"])(storage, propertyId);
            setShortlist(ids);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('shortlist_add', {
                propertyId,
                surface,
                activityCount: ids.length
            }));
        }
    }["CustomerActivityProvider.useCallback[addToShortlist]"], [
        mode
    ]);
    const removeFromShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[removeFromShortlist]": (propertyId, surface)=>{
            const storage = getStorage();
            if (mode === 'customer') {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromShortlistAction"])(propertyId);
                setShortlist({
                    "CustomerActivityProvider.useCallback[removeFromShortlist]": (prev)=>prev.filter({
                            "CustomerActivityProvider.useCallback[removeFromShortlist]": (id)=>id !== propertyId
                        }["CustomerActivityProvider.useCallback[removeFromShortlist]"])
                }["CustomerActivityProvider.useCallback[removeFromShortlist]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('shortlist_remove', {
                    propertyId,
                    surface
                }));
                return;
            }
            if (!storage) return;
            const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeGuestShortlist"])(storage, propertyId);
            setShortlist(ids);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('shortlist_remove', {
                propertyId,
                surface,
                activityCount: ids.length
            }));
        }
    }["CustomerActivityProvider.useCallback[removeFromShortlist]"], [
        mode
    ]);
    const toggleShortlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[toggleShortlist]": (propertyId, surface)=>{
            if (shortlist.includes(propertyId)) {
                removeFromShortlist(propertyId, surface);
            } else {
                addToShortlist(propertyId, surface);
            }
        }
    }["CustomerActivityProvider.useCallback[toggleShortlist]"], [
        shortlist,
        addToShortlist,
        removeFromShortlist
    ]);
    const addCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[addCompare]": (propertyId, surface)=>{
            const storage = getStorage();
            if (mode === 'customer') {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCompareAction"])(propertyId);
                setCompare({
                    "CustomerActivityProvider.useCallback[addCompare]": (prev)=>prev.includes(propertyId) || prev.length >= __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"] ? prev : [
                            ...prev,
                            propertyId
                        ]
                }["CustomerActivityProvider.useCallback[addCompare]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('compare_add', {
                    propertyId,
                    surface
                }));
                return 'added';
            }
            if (!storage) return 'limit_reached';
            const { ids, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addGuestCompare"])(storage, propertyId, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"]);
            setCompare(ids);
            if (status === 'added') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('compare_add', {
                    propertyId,
                    surface,
                    activityCount: ids.length
                }));
            }
            return status;
        }
    }["CustomerActivityProvider.useCallback[addCompare]"], [
        mode
    ]);
    const removeCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[removeCompare]": (propertyId, surface)=>{
            const storage = getStorage();
            if (mode === 'customer') {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCompareAction"])(propertyId);
                setCompare({
                    "CustomerActivityProvider.useCallback[removeCompare]": (prev)=>prev.filter({
                            "CustomerActivityProvider.useCallback[removeCompare]": (id)=>id !== propertyId
                        }["CustomerActivityProvider.useCallback[removeCompare]"])
                }["CustomerActivityProvider.useCallback[removeCompare]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('compare_remove', {
                    propertyId,
                    surface
                }));
                return;
            }
            if (!storage) return;
            const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeGuestCompare"])(storage, propertyId);
            setCompare(ids);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCustomerActivityEvent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCustomerActivityEvent"])('compare_remove', {
                propertyId,
                surface,
                activityCount: ids.length
            }));
        }
    }["CustomerActivityProvider.useCallback[removeCompare]"], [
        mode
    ]);
    const replaceCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[replaceCompare]": (index, propertyId)=>{
            const storage = getStorage();
            if (mode === 'customer') {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceCompareAction"])(index, propertyId);
                setCompare({
                    "CustomerActivityProvider.useCallback[replaceCompare]": (prev)=>{
                        const removed = prev.filter({
                            "CustomerActivityProvider.useCallback[replaceCompare].removed": (_, i)=>i !== index
                        }["CustomerActivityProvider.useCallback[replaceCompare].removed"]);
                        const deduped = removed.filter({
                            "CustomerActivityProvider.useCallback[replaceCompare].deduped": (id)=>id !== propertyId
                        }["CustomerActivityProvider.useCallback[replaceCompare].deduped"]);
                        const next = [
                            ...deduped.slice(0, index),
                            propertyId,
                            ...deduped.slice(index)
                        ].slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"]);
                        return next;
                    }
                }["CustomerActivityProvider.useCallback[replaceCompare]"]);
                return;
            }
            if (!storage) return;
            const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceGuestCompare"])(storage, index, propertyId, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"]);
            setCompare(ids);
        }
    }["CustomerActivityProvider.useCallback[replaceCompare]"], [
        mode
    ]);
    const clearCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerActivityProvider.useCallback[clearCompare]": ()=>{
            const storage = getStorage();
            if (mode === 'customer') {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$app$2f$actions$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCompareAction"])();
                setCompare([]);
                return;
            }
            if (!storage) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$guest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearGuestCompare"])(storage);
            setCompare([]);
        }
    }["CustomerActivityProvider.useCallback[clearCompare]"], [
        mode
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CustomerActivityProvider.useMemo[value]": ()=>({
                shortlist,
                compare,
                compareLimit: __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARE_LIMIT"],
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
            })
    }["CustomerActivityProvider.useMemo[value]"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerActivityContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/components/customer/CustomerActivityProvider.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
_s(CustomerActivityProvider, "oUdEGBVgO3LeXgaOSrkRN1ktA8Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$auth$2f$useWebsiteAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebsiteAccount"]
    ];
});
_c = CustomerActivityProvider;
function useCustomerActivity() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CustomerActivityContext);
    if (!context) {
        throw new Error('useCustomerActivity must be used within CustomerActivityProvider');
    }
    return context;
}
_s1(useCustomerActivity, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CustomerActivityProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/analytics/activity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    __turbopack_context__.A("[project]/Sonthillu/src/app/actions/analytics.ts [app-client] (ecmascript, async loader)").then(({ trackActivityEventAction })=>{
        trackActivityEventAction({
            eventName: payload.eventName,
            page: payload.page || (("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable"),
            propertyId: payload.propertyId,
            projectId: payload.projectId,
            searchContext: payload.searchContext,
            metadata: payload.metadata
        });
    }).catch(()=>{
    // Ignore network failures for tracking
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebsiteAccountProvider",
    ()=>WebsiteAccountProvider,
    "fetchWebsiteAccountFromStorage",
    ()=>fetchWebsiteAccountFromStorage,
    "useWebsiteAccount",
    ()=>useWebsiteAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const TOKEN_STORAGE_KEY = 'sonthillu_website_token';
const WebsiteAccountContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function getCrmUrl() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CRM_API_BASE_URL || 'http://localhost:3000/api/v1';
}
function getCrmApiKey() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CRM_API_KEY || '';
}
function accountUrl(path) {
    return `${getCrmUrl()}/public/${__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRM_CONFIG"].brandParameter}/account${path}`;
}
function readStoredToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.localStorage.getItem(TOKEN_STORAGE_KEY);
    } catch  {
        return null;
    }
}
function writeStoredToken(token) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        if (token) window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
        else window.localStorage.removeItem(TOKEN_STORAGE_KEY);
    } catch  {
    // Storage unavailable (private browsing, quota) — session just won't persist.
    }
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
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchMe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WebsiteAccountProvider.useCallback[fetchMe]": async (currentToken)=>{
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
        }
    }["WebsiteAccountProvider.useCallback[fetchMe]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebsiteAccountProvider.useEffect": ()=>{
            const stored = readStoredToken();
            if (!stored) {
                setIsLoading(false);
                return;
            }
            setToken(stored);
            fetchMe(stored).then({
                "WebsiteAccountProvider.useEffect": (resolved)=>{
                    if (resolved) {
                        setAccount(resolved);
                    } else {
                        // Token expired/invalid — drop it rather than keep retrying.
                        writeStoredToken(null);
                        setToken(null);
                    }
                    setIsLoading(false);
                }
            }["WebsiteAccountProvider.useEffect"]);
        }
    }["WebsiteAccountProvider.useEffect"], [
        fetchMe
    ]);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WebsiteAccountProvider.useCallback[login]": async (email, password)=>{
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
        }
    }["WebsiteAccountProvider.useCallback[login]"], []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WebsiteAccountProvider.useCallback[register]": async (data)=>{
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
        }
    }["WebsiteAccountProvider.useCallback[register]"], []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WebsiteAccountProvider.useCallback[logout]": ()=>{
            writeStoredToken(null);
            setToken(null);
            setAccount(null);
        }
    }["WebsiteAccountProvider.useCallback[logout]"], []);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WebsiteAccountProvider.useCallback[refresh]": async ()=>{
            const current = readStoredToken();
            if (!current) {
                setAccount(null);
                return;
            }
            const resolved = await fetchMe(current);
            setAccount(resolved);
        }
    }["WebsiteAccountProvider.useCallback[refresh]"], [
        fetchMe
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WebsiteAccountProvider.useMemo[value]": ()=>({
                account,
                token,
                isLoading,
                isAuthenticated: account !== null,
                login,
                register,
                logout,
                refresh
            })
    }["WebsiteAccountProvider.useMemo[value]"], [
        account,
        token,
        isLoading,
        login,
        register,
        logout,
        refresh
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebsiteAccountContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Sonthillu/src/lib/auth/useWebsiteAccount.tsx",
        lineNumber: 202,
        columnNumber: 10
    }, this);
}
_s(WebsiteAccountProvider, "1f1DMTWAOKeiSEXLlOZZX8/jHI0=");
_c = WebsiteAccountProvider;
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
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WebsiteAccountContext);
    if (!context) {
        throw new Error('useWebsiteAccount must be used within WebsiteAccountProvider');
    }
    return context;
}
_s1(useWebsiteAccount, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "WebsiteAccountProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Sonthillu/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/customer/activity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/analytics/activity.ts [app-client] (ecmascript)");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Keep the custom event for any other analytics
    window.dispatchEvent(new CustomEvent(CUSTOMER_ACTIVITY_EVENT_NAME, {
        detail: payload
    }));
    // Map to P6 Normalized Events
    const eventMap = {
        shortlist_add: 'shortlist_added',
        shortlist_remove: 'shortlist_removed',
        compare_add: 'compare_added',
        compare_remove: 'compare_removed',
        compare_view: 'page_view'
    };
    const normalizedEventName = eventMap[payload.eventType];
    if (!normalizedEventName) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$analytics$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackClientActivity"])({
        eventName: normalizedEventName,
        propertyId: payload.propertyId,
        metadata: {
            surface: payload.surface,
            count: payload.activityCount
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/customer/guest.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/types.ts [app-client] (ecmascript)");
;
function parseIdList(raw) {
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"]);
    } catch  {
        return [];
    }
}
function serializeIdList(ids) {
    return JSON.stringify(ids);
}
function readGuestShortlist(storage) {
    return parseIdList(storage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_SHORTLIST_KEY"]));
}
function removeGuestShortlist(storage, propertyId) {
    const ids = readGuestShortlist(storage).filter((id)=>id !== propertyId);
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_SHORTLIST_KEY"], serializeIdList(ids));
    return ids;
}
function toggleGuestShortlist(storage, propertyId) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"])(propertyId)) return {
        ids: readGuestShortlist(storage),
        added: false
    };
    const ids = readGuestShortlist(storage);
    if (ids.includes(propertyId)) {
        const next = ids.filter((id)=>id !== propertyId);
        storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_SHORTLIST_KEY"], serializeIdList(next));
        return {
            ids: next,
            added: false
        };
    }
    const next = [
        propertyId,
        ...ids
    ];
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_SHORTLIST_KEY"], serializeIdList(next));
    return {
        ids: next,
        added: true
    };
}
function readGuestCompare(storage) {
    return parseIdList(storage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"]));
}
function addGuestCompare(storage, propertyId, limit) {
    const ids = readGuestCompare(storage);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"])(propertyId)) return {
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
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"], serializeIdList(next));
    return {
        ids: next,
        status: 'added'
    };
}
function removeGuestCompare(storage, propertyId) {
    const ids = readGuestCompare(storage).filter((id)=>id !== propertyId);
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"], serializeIdList(ids));
    return ids;
}
function replaceGuestCompare(storage, index, propertyId, limit) {
    const ids = readGuestCompare(storage);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"])(propertyId)) return ids;
    if (index < 0 || index >= ids.length) return ids;
    const removed = ids.filter((_, i)=>i !== index);
    const deduped = removed.filter((id)=>id !== propertyId);
    const safeIndex = Math.min(index, deduped.length);
    const next = [
        ...deduped.slice(0, safeIndex),
        propertyId,
        ...deduped.slice(safeIndex)
    ].slice(0, limit);
    storage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"], serializeIdList(next));
    return next;
}
function clearGuestCompare(storage) {
    storage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_COMPARE_KEY"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/customer/service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/dto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Sonthillu/src/lib/customer/types.ts [app-client] (ecmascript)");
;
;
const COMPARE_LIMIT = 4;
async function addToShortlist(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    if (await store.hasShortlist(customerId, propertyId)) return 'already_present';
    await store.addShortlist(customerId, propertyId);
    return 'added';
}
async function removeFromShortlist(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    if (!await store.hasShortlist(customerId, propertyId)) return false;
    await store.removeShortlist(customerId, propertyId);
    return true;
}
async function getShortlist(store, customerId) {
    return store.listShortlist(customerId);
}
async function isShortlisted(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    return store.hasShortlist(customerId, propertyId);
}
async function addToCompare(store, customerId, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    const current = await store.listCompare(customerId);
    if (!current.includes(propertyId)) return false;
    await store.setCompare(customerId, current.filter((id)=>id !== propertyId));
    return true;
}
async function replaceInCompare(store, customerId, index, propertyId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidPropertyId"])(propertyId);
    const current = await store.listCompare(customerId);
    return current.includes(propertyId);
}
async function setCustomerCompare(store, customerId, propertyIds) {
    const valid = propertyIds.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"]);
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
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$customer$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPropertyId"])(rawId)) continue;
        if (seen.has(rawId)) continue;
        seen.add(rawId);
        const raw = await fetchProperty(rawId);
        if (raw) {
            properties.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Sonthillu$2f$src$2f$lib$2f$dto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPublicPropertyDetail"])(raw));
        } else {
            unavailableIds.push(rawId);
        }
    }
    return {
        properties,
        unavailableIds
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/customer/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Sonthillu/src/lib/dto.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Sonthillu_1gg_i98._.js.map