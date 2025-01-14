import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderSlot, h as createAstro, i as renderComponent, k as renderHead, l as renderScript } from './astro/server_DtJ89gsl.mjs';
import 'html-escaper';
/* empty css                         */

const $$Astro$3 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/shared/Container.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-10"></div> <footer class="relative bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 pt-16 rounded-t-3xl grid place-items-center"> <div class="absolute right-0 top-0 h-full w-full flex justify-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-yellow-500 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> <div class="absolute left-0 bottom-0 h-full w-full flex items-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-yellow-500 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> ${renderComponent($$result, "Container", $$Container, { "className": "pb-8 relative overflow-auto" }, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 relative my-4 md:my-8"> <div class="col-span-1 w-full flex flex-col items-center"> <a href="/" class="max-w-72"> <img src="/logos/logoServitec.webp" alt="logoServitec" class="object-contain"> </a> </div> <div class="text-xl flex flex-col md:flex-col items-center md:items-start gap-12 md:gap-4 my-10 md:my-0"> <a href="https://wa.me/51941801827" target="_blank" class="flex flex-col md:flex-row  items-center gap-2 cursor-pointer"> <i class="fa-brands fa-whatsapp text-heading-1 text-4xl md:text-2xl lg:text-4xl"></i> <span class="text-heading-1">941801827</span> </a> <a href="mailto:contactos@servitec-peru.com" class="flex flex-col md:flex-row  items-center gap-2 cursor-pointer"> <i class="fa-regular fa-envelope text-heading-1 text-4xl md:text-2xl lg:text-4xl"></i> <span class="text-heading-1">contactos@servitec-peru.com</span> </a> <a href="https://maps.app.goo.gl/KsD6ycS9gm21B2pdA" class="flex flex-col md:flex-row  items-center gap-2 cursor-pointer"> <i class="fa-solid fa-location-dot text-heading-1 text-4xl md:text-2xl lg:text-4xl"></i> <span class="text-heading-1">Calle Vargas 179, Chorrillos</span> </a> </div> </div> ` })} <div class="bg-gradient-to-tl from-box-bg py-2 relative"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-center gap-6 md:text-lg text-heading-3"> <div>
&copy; <span id="year"></span> Servitec. Todos los derechos reservados
</div> <div>
Desarrollado por <a href="https://servitec.site" target="_blank" class="font-semibold">Servitec Perú</a> </div> </div> ` })} </div> </footer>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/elements/Footer.astro", undefined);

const $$Astro$2 = createAstro();
const $$BtnLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BtnLink;
  const { href, text, className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]";
    }
    return "text-primary";
  };
  const getTextColor = (variant2) => {
    if (variant2 === "primary") {
      return "text-white";
    }
    return "text-primary";
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> <span${addAttribute(`relative ${getTextColor(variant)} z-10`, "class")}> ${text} </span> </a>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/shared/BtnLink.astro", undefined);

const $$Astro$1 = createAstro();
const $$Navitem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navitem;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="duration-300 font-medium ease-linear hover:text-primary py-3"> ${text} </a> </li>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/shared/Navitem.astro", undefined);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      href: "#",
      text: "Inicio"
    },
    {
      href: "#services",
      text: "Servicios"
    },
    {
      href: "#about-us",
      text: "Nosotros"
    },
    {
      href: "#contact",
      text: "Contacto"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="absolute inset-x-0 top-0 z-50 py-6"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <nav class="w-full flex justify-between gap-6 relative"> <div class="min-w-max inline-flex relative"> <a href="/" class="relative flex items-center gap-3"> <div class="max-w-40 sm:max-w-48 lg:max-w-60"> <img src="/logos/logoServitec.webp" class="object-contain" alt="logo"> </div> </a> </div> <div data-nav-overlay aria-hidden="true" class="fixed hidden inset-0 lg:!hidden bg-box-bg bg-opacity-50 backdrop-filter backdrop-blur-xl"></div> <div data-navbar class="flex h-0 overflow-hidden lg:!h-auto lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0"> <ul class="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center"> ${navItems.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Navitem", $$Navitem, { ...item })}`;
  })} </ul> <div class="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-bg lg:border-0 px-6 lg:px-0"> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "text": "Cont\xE1ctanos", "href": "#contact", "className": "flex justify-center w-full sm:w-max", "variant": "primary" })} </div> </div> <div class="min-w-max flex items-center gap-x-3"> <button data-switch-theme class="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:flex hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path> </svg> <span class="sr-only">switch theme</span> </button> <button data-toggle-nav data-open-nav="false" class="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative"> <span id="line1" class="w-6 h-0.5 rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line2" class="w-6 origin-center mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line3" class="w-6 mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear"></span> <span class="sr-only">togglenav</span> </button> </div> </nav> ` })} </header>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/elements/Navbar.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Cambio de Pantallas All in One"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"><title>Cambio de Pantallas All in One</title><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="overflow-hidden overflow-y-auto bg-body"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/layouts/Layout.astro", undefined);

export { $$Container as $, $$Layout as a };
