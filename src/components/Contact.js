import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "./Button";
import Popup from "./Popup";

import "./Contact.scss";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const fetchSubmit = async (formData) => {
    try {
      console.log("jestem w try");
      const response = await fetch(
        "https://gddev.pl/wp-headless/server/wp-json/wp/v2/contact-form2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("jestem w try");

      if (response.ok) {
        console.log(response);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania danych:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      phone: "",
    },

    onSubmit: (values) => {
      console.log("onsubmit", values);
      setShowPopup(true);
      const formData = new FormData();
      formData.append("form", values);
      console.log(formData);
      fetchSubmit(values);
      // setValues({ values });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email jest wymagany")
        .email("Wpisz prawidłowy adres"),
      message: Yup.string()
        .required("Pole jest wymagane")
        .min(3, "Zbyt krótka wiadomość ")
        .max(220, "Zbyt duga wiadomość"),
      phone: Yup.string()
        .required("Pole jest wymagane")
        .matches(/^\+?\d{6,15}$/, {
          message: "Wpisz prawidłowy numer.",
          excludeEmptyString: false,
        }),
    }),
  });

  return (
    <>
      {showPopup && (
        <Popup className={"popup"} onClick={() => setShowPopup(false)}>
          Dziekuję za zgłoszenie. Postaram sie odpowiedzieć w ciagu 48h.
        </Popup>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="box-input">
            <textarea
              className="text-message"
              placeholder="Napisz wiadomość"
              rows="4"
              cols="70"
              name="message"
              values={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            <p className="error">
              {formik.errors.message &&
                formik.touched.message &&
                formik.errors.message}
            </p>
          </div>
          <div className="box-input">
            <input
              className="input"
              id="phone"
              name="phone"
              placeholder="telefon"
              values={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="error">
              {formik.errors.phone &&
                formik.touched.phone &&
                formik.errors.phone}
            </p>
          </div>
          <div className="box-input">
            <input
              className="input"
              id="email"
              name="email"
              placeholder="email"
              values={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="error">
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </p>
          </div>
          <Button type="submit">Wyślij wiadomość</Button>
        </div>
      </form>
    </>
  );
};

export default Contact;
