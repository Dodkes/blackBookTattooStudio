import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

type FormValues = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  color: string;
};

function OrderBody() {
  const navigate = useNavigate();

  const formInitialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    service: "tattoo",
    color: "black",
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

  const handleSubmit = async (values: FormValues) => {
    try {
      await fetch("http://localhost:8080/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      navigate("/blackBookTattooStudio/order/success");
      scroll(30, 30);
    } catch (error) {
      console.log(error);
      navigate("/blackBookTattooStudio/order/failure");
      scroll(0, 0);
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
              <br />
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
              <br />
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
              <br />
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
              <br />
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
              <br />
              <select
                name="service"
                defaultValue={values.service}
                onChange={handleChange}
              >
                <option value="tattoo">Tetování</option>
                <option value="barber">Barber</option>
              </select>
            </div>
            <div className="order-form-field">
              <label htmlFor="color">Barva</label>
              <br />
              <select
                name="color"
                defaultValue={values.color}
                onChange={handleChange}
              >
                <option value="black">Černá</option>
                <option value="colorful">Barevná</option>
              </select>
            </div>
            <div className="order-form-field message">
              <label htmlFor="message">Popis tetování</label>
              <textarea
                maxLength={1000}
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Zpráva"
              />
            </div>
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
