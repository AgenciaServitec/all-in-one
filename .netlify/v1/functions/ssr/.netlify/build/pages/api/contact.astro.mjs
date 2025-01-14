export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const phoneNumber = data.get("phoneNumber");
  const message = data.get("message");

  const fields = {
    name: "Nombres",
    email: "Email",
    phoneNumber: "Teléfono",
  };

  if (!name || !email || !phoneNumber) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: `Faltan los siguientes campos: ${fields["name"]},${fields["email"]}, ${fields["phoneNumber"]}`,
      }),
      { status: 400 },
    );
  }

  const mapContact = {
    contact: {
      fullName: name,
      email,
      phone: {
        countryCode: "+51",
        number: phoneNumber,
      },
      message,
      hostname: "estudio-contable-contador.com",
    },
  };

  await fetch(
    "https://api-servitecsales.web.app/emails/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(mapContact),
    },
  );

  return new Response(
    JSON.stringify({
      ok: true,
      message: "¡Mensaje exito!",
    }),
    { status: 200 },
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
