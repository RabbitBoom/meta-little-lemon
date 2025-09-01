import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./index.css";
function ReserveForm() {
  const [steps, setSteps] = useState(1);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      reserveDate: "",
      reserveTime: "",
      guests: 1,
      area: "",
    },
    onSubmit: (values) => {
      console.log("🚀 ~ ReserveForm ~ values:", values);
      setSteps(2);
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(3).required(),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
      reserveDate: Yup.string().required(),
      reserveTime: Yup.string().required(),
      guests: Yup.number().required(),
      area: Yup.string().required(),
    }),
  });
  console.log("🚀 ~ ReserveForm ~ formik:", formik)
  const { errors, values, setValues, handleSubmit, handleChange } = formik;

  const handleGroupItem = (e, values, setValues) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value }, true);
  };
  return (
    <section className="reserve-form">
      <h1>Reserve a table</h1>
      <div className="reserve-steps">
        <div
          className={`reserve-process ${steps === 1 ? "w-1/3" : "w-2/3"}`}
        ></div>
      </div>
      <div className="reserve-form-wrap">
        {steps === 1 ? (
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="name">Name:</label>
              <div className="form-item-wrap">
                <input
                  className={`${
                    !errors.name ? "border-gray-300" : "border-red-500"
                  }`}
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <div className="form-item-error">
                  {errors.name ? errors.name : ""}
                </div>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="email">Email:</label>
              <div className="form-item-wrap">
                <input
                  className={`${
                    !errors.email ? "border-gray-300" : "border-red-500"
                  }`}
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <div className="form-item-error">
                  {errors.email ? errors.email : ""}
                </div>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="phone">Phone:</label>
              <div className="form-item-wrap">
                <input
                  className={`${
                    !errors.phone ? "border-gray-300" : "border-red-500"
                  }`}
                  type="text"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <div className="form-item-error">
                  {errors.phone ? errors.phone : ""}
                </div>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="reserveDate">Reserve date:</label>
              <div className="form-item-wrap">
                <input
                  className={`${
                    !errors.reserveDate ? "border-gray-300" : "border-red-500"
                  }`}
                  type="date"
                  name="reserveDate"
                  id="reserveDate"
                  value={values.reserveDate}
                  onChange={handleChange}
                />
                <div className="form-item-error">
                  {errors.reserveDate ? errors.reserveDate : ""}
                </div>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="reserveTime">Reserve time:</label>
              <div className="form-item-wrap">
                <div id="reserveTime" className="radio-group">
                  <button
                    className={`flex-1 ${
                      values.reserveTime === "20:00"
                        ? "bg-[#F4CE14] border-[#F4CE14] text-white"
                        : ""
                    }`}
                    type="button"
                    name="reserveTime"
                    value="20:00"
                    onClick={(e) => handleGroupItem(e, values, setValues)}
                  >
                    20:00
                  </button>
                  <button
                    className={`flex-1 ${
                      values.reserveTime === "20:15"
                        ? "bg-[#F4CE14] border-[#F4CE14] text-white"
                        : ""
                    }`}
                    type="button"
                    name="reserveTime"
                    value="20:15"
                    onClick={(e) => handleGroupItem(e, values, setValues)}
                  >
                    20:15
                  </button>
                  <button
                    className={`flex-1 ${
                      values.reserveTime === "20:30"
                        ? "bg-[#F4CE14] border-[#F4CE14] text-white"
                        : ""
                    }`}
                    type="button"
                    name="reserveTime"
                    value="20:30"
                    onClick={(e) => handleGroupItem(e, values, setValues)}
                  >
                    20:30
                  </button>
                  <button
                    className={`flex-1 ${
                      values.reserveTime === "20:45"
                        ? "bg-[#F4CE14] border-[#F4CE14] text-white"
                        : ""
                    }`}
                    type="button"
                    name="reserveTime"
                    value="20:45"
                    onClick={(e) => handleGroupItem(e, values, setValues)}
                  >
                    20:45
                  </button>
                </div>
                <div className="form-item-error">
                  {errors.reserveTime ? errors.reserveTime : ""}
                </div>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="guests">Number of guests:</label>
              <div className="form-item-wrap">
                <input
                  className={`${
                    !errors.guests ? "border-gray-300" : "border-red-500"
                  }`}
                  type="number"
                  name="guests"
                  id="guests"
                  value={values.guests}
                  onChange={handleChange}
                />
                <div className="form-item-error">
                  {errors.guests ? errors.guests : ""}
                </div>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="area">Area:</label>
              <div className="form-item-wrap">
                <div className="radio-group" id="area">
                  <button
                    className={`flex-1 ${
                      values.area === "Inside"
                        ? "bg-[#F4CE14] border-[#F4CE14] text-white"
                        : ""
                    }`}
                    type="button"
                    name="area"
                    value="Inside"
                    onClick={(e) => handleGroupItem(e, values, setValues)}
                  >
                    Inside
                  </button>
                  <button
                    className={`flex-1 ${
                      values.area === "Covered terrace"
                        ? "bg-[#F4CE14] border-[#F4CE14] text-white"
                        : ""
                    }`}
                    type="button"
                    name="area"
                    value="Covered terrace"
                    onClick={(e) => handleGroupItem(e, values, setValues)}
                  >
                    Covered terrace
                  </button>
                </div>
                <div className="form-item-error">
                  {errors.area ? errors.area : ""}
                </div>
              </div>
            </div>
            <button className="form-submit" type="submit">
              Confirm resrvation
            </button>
          </form>
        ) : (
          <div className="submit-success">
            <div className="mb-5 text-[#495E57]">
              <FontAwesomeIcon icon={faCircleCheck} size="8x"/>
            </div>
            <p className="font-semibold text-2xl">Reservation confirmed!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ReserveForm;
