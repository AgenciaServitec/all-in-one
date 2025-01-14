import { useState } from "react";

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
        body: formData,
      });

      const data = await response.json();

      if (!data.ok) {
        setResponseMessage(data.message);
        return;
      }

      window.location.href = "/success";

      setLoading(false);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="form-container text-start flex flex-col items-center"
    >
      <label className="pl-6 text-heading-1 w-full" htmlFor="name">
        Nombres :
      </label>
      <div
        className="mb-7 mt-2 py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow
                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
      >
        <i className="fa-solid fa-user"></i>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full py-3 outline-none bg-transparent"
        />
      </div>

      <label className="pl-6 text-heading-1 w-full" htmlFor="email">
        Correo Electrónico :
      </label>
      <div
        className="mb-7 mt-2 py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow
                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
      >
        <i className="fa-solid fa-envelope"></i>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full py-3 outline-none bg-transparent"
        />
      </div>

      <label className="pl-6 text-heading-1 w-full" htmlFor="phoneNumber">
        Número de Teléfono :
      </label>
      <div
        className="mb-7 mt-2 py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow
                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
      >
        <i className="fa-solid fa-phone"></i>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          className="w-full py-3 outline-none bg-transparent font-sans"
        />
      </div>

      <label className="pl-6 text-heading-1 w-full" htmlFor="message">
        Mensaje :
      </label>
      <div
        className="mb-7 mt-2 py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow
                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
      >
        <i className="fa-solid fa-inbox"></i>
        <textarea
          name="message"
          id="message"
          className="w-full py-3 outline-none bg-transparent"
        />
      </div>
      <button
        className={`w-fit bg-primary mt-6 flex items-center gap-2 justify-center
             rounded-full 
             ${loading ? "disabled" : ""}`}
        disabled={loading}
        style={{
          minWidth: "200px",
          padding: "1em",
          border: "none",
          pointerEvents: `${loading ? "none" : ""}`,
          background: `${loading ? "gray" : ""}`,
        }}
      >
        <p>Enviar</p>
        <i className="fa-regular fa-paper-plane"></i>
      </button>
      {responseMessage && (
        <p style={{ color: "red", padding: "1em" }}>{responseMessage}</p>
      )}
    </form>
  );
};

export default ContactFormComponent;
