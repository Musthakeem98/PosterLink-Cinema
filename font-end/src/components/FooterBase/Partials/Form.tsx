"use client";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";

export default function Form(): JSX.Element {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
    agree_terms: false,
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000", formData)
      .then((response) => {
        console.log("responce :", response);
        if (response.data.status == "feilds missed") {
          setAlertMessage("Please fill in all required fields.");
          setAlertSeverity("error");
          setShowAlert(true);
          return;
        }

        if (response.data.status == "terms missed") {
          setAlertMessage("Please agree to the Terms & Conditions.");
          setAlertSeverity("error");
          setShowAlert(true);
          return;
        }
        // Handle success response here
        setAlertMessage("Form submitted successfully!");
        setAlertSeverity("success");
        setShowAlert(true);
      })
      .catch((error) => {
        // Handle error
        console.error("There was a problem with the request:", error);
        setAlertMessage(
          "There was a problem submitting the form. Please try again later."
        );
        setAlertSeverity("error");
        setShowAlert(true);
      });
  };
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className=" col-span-2 lg:col-span-1">
        <label
          htmlFor="first_name"
          className="block text-sm font-medium text-gray-700"
        >
          First Name *
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          className="mt-3 p-2 text-white border rounded-md w-full bg-[#3C3C3C] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={formData.first_name}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <label
          htmlFor="last_name"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name *
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          className="mt-3 p-2 border text-white rounded-md w-full bg-[#3C3C3C] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={formData.last_name}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-3 p-2 border text-white rounded-md w-full bg-[#3C3C3C] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-2">
        <label
          htmlFor="phone_number"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          className="mt-3 p-2 border text-white rounded-md w-full bg-[#3C3C3C] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={formData.phone_number}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-3 p-2 border text-white rounded-md w-full bg-[#3C3C3C] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <p className="t-medium text-gray-700"> *required ﬁelds </p>

      <div className="col-span-2">
        <label htmlFor="agree_terms" className="flex items-center">
          <input
            type="checkbox"
            id="agree_terms"
            name="agree_terms"
            className="mr-2 bg-[#3C3C3C]"
            checked={formData.agree_terms}
            onChange={handleCheckboxChange}
          />
          <span className="text-gray-500  font-Sans">
            I agree to
            <a href="#" className="text-white underline hover:text-blue-500">
              Terms & Conditions
            </a>
          </span>
        </label>
      </div>
      <div className="col-span-2 pt-5 flex justify-end">
        <button
          className="bg-[#CC9601] text-white px-4 py-2 rounded-md w-80 pr-50"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {showAlert && (
        <div className="col-span-2">
          <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
            {alertMessage}
          </Alert>
        </div>
      )}
    </div>
  );
}
