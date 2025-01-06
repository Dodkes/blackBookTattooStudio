import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = import.meta.env.VITE_SITE_KEY;
const HOST = import.meta.env.VITE_HOST;

type FormValues = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  type: string;
};

function OrderBody() {
  const navigate = useNavigate();
  const [isBarber, setIsBarber] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const formInitialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    service: "tattoo",
    type: "black",
  };

  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required("Jméno je povinné"),
    surname: Yup.string().required("Příjmení je povinné"),
    email: Yup.string()
      .email("Email není ve správném formátu")
      .required("Email je povinný"),
    phone: Yup.string()
      .required("Telefon je povinný")
      .min(7, "Telefon je krátký")
      .max(15, "Telefon je dlouhý")
      .matches(
        /^[+]?[0-9]*$/,
        "Telefon může obsahovat pouze číslice a znak '+'"
      ),
  });

  const generateRecaptchaToken = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    if (!recaptchaToken) {
      return alert("Prosím, potvrďte, že nejste robot.");
    }

    const body = {
      ...values,
      recaptchaToken,
    };

    const response = await fetch(`${HOST}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      navigate("/blackBookTattooStudio/order/success");
    } else {
      navigate("/blackBookTattooStudio/order/failure");
    }
  };

  return (
    <div className="order-body-container">
      <h1 className="order-heading">Objednat si termín</h1>
      <Formik
        initialValues={formInitialValues}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid,
          errors,
        }) => (
          <form className="order-form" onSubmit={handleSubmit}>
            <div className="order-form-field">
              <label htmlFor="name">Jméno *</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <p className="form-field-error-message">{errors.name}</p>
            </div>
            <div className="order-form-field">
              <label htmlFor="surname">Příjmení *</label>
              <input
                type="text"
                name="surname"
                value={values.surname}
                onChange={handleChange}
              />
              <p className="form-field-error-message">{errors.surname}</p>
            </div>
            <div className="order-form-field">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="@"
              />
              <p className="form-field-error-message">{errors.email}</p>
            </div>
            <div className="order-form-field">
              <label htmlFor="phone">Telefon *</label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              <p className="form-field-error-message">{errors.phone}</p>
            </div>
            <div className="order-form-field">
              <label htmlFor="service">Výběr služby</label>
              <select
                name="service"
                defaultValue={values.service}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value === "barber") {
                    setIsBarber(true);
                  } else {
                    setIsBarber(false);
                  }
                }}
              >
                <option value="tattoo">Tetování</option>
                <option value="barber">Barber</option>
              </select>
            </div>
            <div className="order-form-field">
              <label htmlFor="type">{isBarber ? "Střihání" : "Barva"}</label>
              <select
                name="type"
                defaultValue={values.type}
                onChange={handleChange}
              >
                {isBarber ? (
                  <>
                    <option value="hair">Vlasy</option>
                    <option value="chin">Brada</option>
                    <option value="hair_chin">Vlasy + Brada</option>
                  </>
                ) : (
                  <>
                    <option value="black">Černá</option>
                    <option value="colorful">Barevná</option>
                  </>
                )}
              </select>
            </div>
            <div className="order-form-field message">
              <label htmlFor="message">
                {isBarber ? "Popis střihu" : "Popis tetování"}
              </label>
              <textarea
                maxLength={1000}
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Zpráva"
              />
            </div>
            <div>
              {!recaptchaToken && <p>Prosím, potvrďte, že nejste robot.</p>}
            </div>
            <br />
            <ReCAPTCHA
              sitekey={SITE_KEY}
              onChange={generateRecaptchaToken}
              onExpired={() => setRecaptchaToken("")}
            />
            <button
              disabled={isSubmitting || !isValid}
              className="button-order-submit"
              type="submit"
            >
              Odeslat
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default function OrderPage() {
  return (
    <div className="order-page-container">
      <Navbar />
      <OrderBody />
      <Footer />
    </div>
  );
}
