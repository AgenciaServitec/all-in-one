/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../chunks/astro/server_DtJ89gsl.mjs';
import 'html-escaper';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_B-eESAai.mjs';
export { renderers } from '../renderers.mjs';

const $$Successful = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="success" class="relative pt-32"> ${renderComponent($$result, "Container", $$Container, { "className": "py-8" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col w-full px-6 text-heading-1 items-center gap-10"> <div class="w-fit"> <img src="/images/check.webp" alt="check" class="object-contain max-w-20" width="100"> </div> <div class="text-base md:text-xl text-center">
Gracias por Contactarnos
<br>
Te daremos respuesta lo más breve posible
</div> <button class="rounded-full bg-yellow-500 p-3"><a href="/" class="">Volver al Inicio</a></button> </div> ` })} </section>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/sections/Successful.astro", undefined);

const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden"> ${renderComponent($$result2, "Successful", $$Successful, {})} </main> ` })}`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/pages/success.astro", undefined);

const $$file = "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
