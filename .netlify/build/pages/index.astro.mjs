/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderSlot, h as createAstro, i as renderComponent } from '../chunks/astro/server_DtJ89gsl.mjs';
import 'html-escaper';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_B-eESAai.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]";
    }
    return "text-primary";
  };
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/shared/Button.astro", undefined);

const $$Astro$2 = createAstro();
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`text-sm sm:text-xl md:text-2xl lg:text-3xl text-heading-3 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/shared/Paragraph.astro", undefined);

const $$Details = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative mt-12 md:mt-16"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="mx-auto lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow flex lg:flex-row lg:items-center flex-col gap-8 lg:gap-12 text-center lg:text-left"> <div class="class w-full lg:w-1/2 flex flex-col gap-6 lg:gap-10 text-heading-1"> <p class="text-2xl md:text-3xl font-bold">¿Qué es una All In One?</p> <p>
Las computadoras All in One o Todo en Uno, son aquellas que tienen
          integradas todos los componentes base para su funcionamiento, como
          pantalla, procesador memoria, discos, etc. Esta es la principal
          diferencia con respecto a las computadoras de sobremesa. Requiriendo
          su cuidado para repotenciar el equipo pudiendo dañar la pantalla si no
          es un técnico especialista.
</p> </div> <div class="text-xs sm:text-base md:text-xl class w-full lg:w-1/2 overflow-hidden rounded-2xl"> <video autoplay muted loop${addAttribute(false, "controls")} src="/video/allInOne.mp4" class="object-contain"></video> </div> </div> ` })} </section>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/sections/Details.astro", undefined);

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative pt-32 lg:pt-36"> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col lg:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0"> <span class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-yellow-300 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span> <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-yellow-500 blur-xl opacity-80"></span> </div> <span class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-yellow-400 to-yellow-200 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span> <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"> <h1 class="text-4xl sm:text-5xl/tight md:text-6xl/tight
             font-bold text-heading-1">
ALL IN <span class="md:text-8xl/tight text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 from-20% via-yellow-400 via-30% to-yellow-800">ONE</span> </h1> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
¡Mantenimiento y Reparación!&nbsp;
<br>
Tenemos la solución
` })} <div class="mt-10 w-full flex max-w-md mx-auto lg:mx-0"> <div class="flex sm:flex-row flex-col gap-5 w-full"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "className": "min-w-max text-white" }, { "default": ($$result3) => renderTemplate` <span class="hidden sm:flex relative z-[5]"> <a href="#contact">Cotización y Consultas</a> </span> <span class="flex sm:hidden relative z-[5]"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path> </svg> </span> ` })} </div> </div> </div> <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"> <img src="/images/fixer-all-in-one.webp" alt="Hero image" width="2350" height="2359" class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"> </div> ` })} ${renderComponent($$result, "Details", $$Details, {})} </section>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/sections/Banner.astro", undefined);

const $$Astro$1 = createAstro();
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Service;
  const { title, description, imgUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:px-8 pb-[3em] rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"> <div class="rounded-xl bg-gray-300 dark:bg-gray-950 text-heading-1 w-full relative overflow-hidden"> <img${addAttribute(imgUrl, "src")}${addAttribute(title, "alt")} class="object-contain"> </div> <div class="mt-6 space-y-4 relative"> <h2 class="text-lg md:text-xl font-semibold text-heading-2"> ${title} </h2> <p class="text-sm md:text-base text-heading-3">${description}</p> </div> <span class="absolute w-32 aspect-square -bottom-16 -right-16 bg-yellow-500 rounded-full"></span> </div>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/cards/Service.astro", undefined);

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/shared/Title.astro", undefined);

const brands = [
  {
    title: "samsung",
    style: "p-4 sm:p-5 rounded-xl bg-body border border-box-border group",
    imgStyle:
      "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105",
    imageUrl: "/logos/logoSamsung.webp",
  },
  {
    title: "dell",
    style: "p-4 sm:p-5 rounded-xl bg-body border border-box-border group",
    imgStyle:
      "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105",
    imageUrl: "/logos/dellLogo.webp",
  },
  {
    title: "hp",
    style: "p-4 sm:p-5 rounded-xl bg-body border border-box-border group",
    imgStyle:
      "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105",
    imageUrl: "/logos/hpLogo.webp",
  },
  {
    title: "lenovo",
    style: "p-4 sm:p-5 rounded-xl bg-body border border-box-border group",
    imgStyle:
      "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105",
    imageUrl: "logos/lenovoLogo.webp",
  },
  {
    title: "lg",
    style: "p-4 sm:p-5 rounded-xl bg-body border border-box-border group",
    imgStyle:
      "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105",
    imageUrl: "logos/lgLogo.webp",
  },
  {
    title: "sony",
    style: "p-4 sm:p-5 rounded-xl bg-body border border-box-border group",
    imgStyle:
      "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale brightness-200 group-hover:!grayscale-0 group-hover:scale-105",
    imageUrl: "logos/logoSony.webp",
  },
  {
    title: "ibm",
    style: "p-4 sm:p-5 rounded-xl bg-body border border-box-border group",
    imgStyle:
      "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105",
    imageUrl: "logos/ibmLogo.webp",
  },
  {
    title: "acer",
    style: "p-4 sm:p-5 rounded-xl bg-body border border-box-border group",
    imgStyle:
      "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105",
    imageUrl: "logos/acerLogo.webp",
  },
];

const services = [
  {
    title: "¿Olvidaste la contraseña de tu PC?",
    description:
      "Trae a nuestro Centro de Servicio Técnico Especialista donde con procesos de fábrica y bajo tu autorización desbloquemos la bios de TU EQUIPO.",
    imgUrl: "/images/card1.webp",
  },
  {
    title: "¿Pantalla Azul?",
    description:
      "En ServiTec-Peru somos especialistas en revisar, diagnosticar y reparar las fallas que los sistemas operativos puedan presentar. En los diferentes modelos de All In One.",
    imgUrl: "/images/card2.webp",
  },
  {
    title: "Reparación de Placas",
    description:
      "Realizamos instalación y reparación de motherboards, que es un Servicio Avanzado de equipos con problemas complejos. Somos expertos y tenemos la experiencia suficiente para dar solución a tu equipo.",
    imgUrl: "/images/card3.webp",
  },
  {
    title: "¿No da imagen?",
    description:
      "Cuando se enciende la PC no da imagen en pantalla, al presionar el power enciende el led pero no da video, enciende y carga la Bios, se escucha cuando enciende,etc. En Servitec-Peru somos especialistas en repación de este tipo.",
    imgUrl: "/images/card4.webp",
  },
  {
    title: "Pantalla Dañada",
    description:
      "Muchos usuarios piensan que una pantalla dañada o quebrada es el fin del equipo, En Servitec-Peru somos importadores directos de pantallas de todos los tamaños, marcas, modelo.",
    imgUrl: "/images/card5.webp",
  },
  {
    title: "¿Tu All in One se apaga sola?",
    description:
      "¿Utilizas la Pc y de repente se apaga sola y tarda en encender nuevamente? ¿o se reinicia y resetea el Bios?, Somos Servitec-Peru un Centro de Servicio Técnico Especialista que posse la experiencia suficiente para dejar tu equipo en excenlentes condiciones.",
    imgUrl: "/images/card6.webp",
  },
];

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="services"> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-10 md:space-y-12" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto space-y-4"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate` ¿Qué servicios ofrecemos? ` })} </div> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${services.map((service) => {
    return renderTemplate`${renderComponent($$result2, "Service", $$Service, { "title": service.title, "description": service.description, "imgUrl": service.imgUrl })}`;
  })} </div> ` })} </section>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/sections/Services.astro", undefined);

const $$Astro = createAstro();
const $$Info = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"> <div class="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative"> ${renderSlot($$result, $$slots["icon"])} </div> <h2 class="md:text-xl font-semibold text-heading-2 mt-6 mb-4">${title}</h2> ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate`${description}` })} </div>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/cards/Info.astro", undefined);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about-us"> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col midmd:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div class="max-w-md mx-auto midmd:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto"> <div class="w-full h-80 sm:h-96 midmd:h-full relative"> <div class="absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50"></div> <div class="absolute p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60"></div> <span class="absolute w-full aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-tr from-primary to-yellow-300 opacity-40 blur-2xl left-0 bottom-0"></span> <img${addAttribute("/images/technical.webp", "src")} alt="banner image" width="1240" height="1385" class="w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full h-full object-cover"> </div> </div> <div class="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate` Te brindamos calidad de servicio ` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
En Servitec-Peru, contamos con técnicos muy bien capacitados para todo
        tipo de requerimientos. Siempre buscamos dejar huella en el mercado, con
        una excelente calidad de servicio y garantía.
` })} <div class="pt-8 grid grid-cols-2 items-center gap-4 max-w-3xl md:max-w-[none]"> ${renderComponent($$result2, "Info", $$Info, { "description": "Ofrecer soluciones, garantizando calidad y satisfacci\xF3n.", "title": "Misi\xF3n" }, { "icon": ($$result3) => renderTemplate`<span> <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path> </svg> </span>` })} ${renderComponent($$result2, "Info", $$Info, { "description": "Lograr reconocimiento por excelencia y compromiso en reparaci\xF3n.", "title": "Visi\xF3n" }, { "icon": ($$result3) => renderTemplate`<span> <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </span>` })} </div> </div> ` })} </section>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/sections/AboutUs.astro", undefined);

const ContactFormComponent = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  async function submit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (!data.ok) {
        setResponseMessage(data.message);
        return;
      }
      window.location.href = "/success";
      setLoading(false);
    } catch (e2) {
      console.error(e2);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: submit,
      noValidate: true,
      className: "form-container text-start flex flex-col items-center",
      children: [
        /* @__PURE__ */ jsx("label", { className: "pl-6 text-heading-1 w-full", htmlFor: "name", children: "Nombres :" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mb-7 mt-2 py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow\n                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary",
            children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-user" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "name",
                  id: "name",
                  className: "w-full py-3 outline-none bg-transparent"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("label", { className: "pl-6 text-heading-1 w-full", htmlFor: "email", children: "Correo Electrónico :" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mb-7 mt-2 py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow\n                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary",
            children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  id: "email",
                  className: "w-full py-3 outline-none bg-transparent"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("label", { className: "pl-6 text-heading-1 w-full", htmlFor: "phoneNumber", children: "Número de Teléfono :" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mb-7 mt-2 py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow\n                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary",
            children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  name: "phoneNumber",
                  id: "phoneNumber",
                  className: "w-full py-3 outline-none bg-transparent"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("label", { className: "pl-6 text-heading-1 w-full", htmlFor: "message", children: "Mensaje :" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mb-7 mt-2 py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow\n                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary",
            children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-inbox" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "message",
                  id: "message",
                  className: "w-full py-3 outline-none bg-transparent"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: `w-fit bg-primary mt-6 flex items-center gap-2 justify-center
             rounded-full 
             ${loading ? "disabled" : ""}`,
            disabled: loading,
            style: {
              minWidth: "200px",
              padding: "1em",
              border: "none",
              pointerEvents: `${loading ? "none" : ""}`,
              background: `${loading ? "gray" : ""}`
            },
            children: [
              /* @__PURE__ */ jsx("p", { children: "Enviar" }),
              /* @__PURE__ */ jsx("i", { className: "fa-regular fa-paper-plane" })
            ]
          }
        ),
        responseMessage && /* @__PURE__ */ jsx("p", { style: { color: "red", padding: "1em" }, children: responseMessage })
      ]
    }
  );
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="pb-20"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900"> <div class="absolute right-0 top-0 h-full w-full flex justify-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-yellow-400 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> <div class="absolute left-0 bottom-0 h-full w-full flex items-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-yellow-400 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> <div class="mx-auto text-center max-w-xl md:max-w-2xl relative"> <h1 class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight
          font-bold text-heading-1">
Da el Primer Paso <span class="text-transparent bg-clip-text bg-gradient-to-br from-orange-300 from-20% via-primary via-30% to-yellow-500">Contactándonos</span> </h1> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "pt-10" }, { "default": ($$result3) => renderTemplate`
Completa este formulario y nos pondremos en contacto contigo para
          cualquier solicitud
` })} <div class="mx-auto max-w-md sm:max-w-xl pt-10"> ${renderComponent($$result2, "ContactForm", ContactFormComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/contact/ContactForm", "client:component-export": "default" })} </div> </div> </div> ` })} </section>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/sections/Contact.astro", undefined);

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-8" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate` Trabajamos con múltiples marcas ` })} </div> <div class="flex justify-center flex-wrap gap-4"> ${brands.map((brand) => renderTemplate`<div${addAttribute(`${brand.style} w-40 h-20 sm:w-60`, "class")}> <img${addAttribute(`${brand.imgStyle} object-contain w-full h-10 `, "class")}${addAttribute(`${brand.imageUrl}`, "src")}${addAttribute(`${brand.title}`, "alt")}> </div>`)} </div> ` })} </section>`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/components/sections/Brands.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden"> ${renderComponent($$result2, "Banner", $$Banner, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/pages/index.astro", undefined);

const $$file = "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/all-in-one/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
