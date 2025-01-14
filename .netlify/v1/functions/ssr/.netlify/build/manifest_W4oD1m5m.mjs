import 'cookie';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DtJ89gsl.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/pabloaquise/Desktop/AGENCIA%20SERVITEC/all-in-one/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.1.4_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.js","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/quotation","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/quotation\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"quotation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/quotation.js","pathname":"/api/quotation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ANALulqv.css"}],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ANALulqv.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/pages/success.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/contact@_@js":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/api/quotation@_@js":"pages/api/quotation.astro.mjs","\u0000@astro-page:src/pages/success@_@astro":"pages/success.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.1.4_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_W4oD1m5m.mjs","/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/node_modules/.pnpm/astro@5.1.4_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C0pdN3af.mjs","/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/contact/ContactForm":"_astro/ContactForm.Bi3kt5cH.js","@astrojs/react/client.js":"_astro/client.CiiykCno.js","/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BK-ANWli.js","/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.Br0oG0n8.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"[data-toggle-nav]\"),t=document.querySelector(\"[data-navbar]\"),a=document.querySelector(\"[data-nav-overlay]\");e&&(e.addEventListener(\"click\",s=>{s.preventDefault(),e.getAttribute(\"data-open-nav\")===\"false\"?(e.setAttribute(\"data-open-nav\",\"true\"),a.setAttribute(\"data-is-visible\",\"true\"),document.body.classList.add(\"!overflow-y-hidden\"),t.style.height=`${t.scrollHeight}px`):(e.setAttribute(\"data-open-nav\",\"false\"),a.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),t.style.height=\"0px\")}),t.addEventListener(\"click\",()=>{e.setAttribute(\"data-open-nav\",\"false\"),a.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),t.style.height=\"0px\"}),a.addEventListener(\"click\",()=>{e.setAttribute(\"data-open-nav\",\"false\"),a.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),t.style.height=\"0px\"}));"],["/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","const t=document.querySelector(\"[data-switch-theme]\");localStorage.getItem(\"appTheme\")===\"dark\"||!(\"appTheme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\");t&&t.addEventListener(\"click\",a=>{a.preventDefault();const e=document.documentElement;e&&(localStorage.getItem(\"appTheme\")?localStorage.getItem(\"appTheme\")===\"light\"?(e.classList.add(\"dark\"),localStorage.setItem(\"appTheme\",\"dark\")):(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"appTheme\",\"light\")):e.classList.contains(\"dark\")?(e.classList.remove(\"dark\"),localStorage.setItem(\"appTheme\",\"light\")):(e.classList.add(\"dark\"),localStorage.setItem(\"appTheme\",\"dark\")))});"]],"assets":["/_astro/index.ANALulqv.css","/favicon.ico","/_astro/ContactForm.Bi3kt5cH.js","/_astro/client.CiiykCno.js","/_astro/index.5vR-3Izp.js","/images/black sony.png","/images/card1.webp","/images/card2.webp","/images/card3.webp","/images/card4.webp","/images/card5.webp","/images/card6.webp","/images/check.webp","/images/dev-with-c.webp","/images/fixer-all-in-one.webp","/images/image1.webp","/images/technical.webp","/logos/acerLogo.webp","/logos/appleLogo.webp","/logos/dellLogo.webp","/logos/hpLogo.webp","/logos/ibmLogo.webp","/logos/lenovoLogo.webp","/logos/lgLogo.webp","/logos/logoSamsung.webp","/logos/logoServitec.webp","/logos/logoSony.webp","/video/allInOne.mp4"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"SC9wpgD2bpB7epgf3Id6Bjg2MHEZI02aE8xnsKc1CAA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
