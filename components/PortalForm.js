"use client";

import { useState } from "react";

export default function PortalForm({
  fields,
  submitLabel = "তথ্য যাচাই করুন",
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="portal-form" onSubmit={handleSubmit}>
      <div className="portal-form-heading">
        <span className="portal-form-icon">
          <i className="fas fa-clipboard-check" aria-hidden="true" />
        </span>
        <div>
          <h2>প্রয়োজনীয় তথ্য দিন</h2>
          <p>তারকা (*) চিহ্নিত ঘরগুলো পূরণ করা আবশ্যক</p>
        </div>
      </div>
      <div className="portal-fields">
        {fields.map((field) => (
          <label
            className={`portal-field ${field.type === "checkbox" ? "portal-checkbox" : ""} ${field.wide ? "portal-field-wide" : ""}`}
            key={field.name}
          >
            {field.type === "checkbox" ? (
              <>
                <input
                  type="checkbox"
                  name={field.name}
                  required={field.required !== false}
                />
                <span>{field.label}</span>
              </>
            ) : (
              <>
                <span className="portal-field-label">
                  {field.label}
                  {field.required !== false && <b> *</b>}
                </span>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    required={field.required !== false}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {field.placeholder || "নির্বাচন করুন"}
                    </option>
                    {field.options.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows="4"
                    placeholder={field.placeholder}
                    required={field.required !== false}
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    required={field.required !== false}
                  />
                )}
              </>
            )}
          </label>
        ))}
      </div>
      <button className="portal-submit" type="submit">
        {submitLabel}
        <i className="fas fa-arrow-right" aria-hidden="true" />
      </button>
      <p className="portal-form-note">
        <i className="fas fa-lock" aria-hidden="true" />
        আপনার তথ্য এই ডেমো পেজে কোথাও পাঠানো হচ্ছে না।
      </p>
      {submitted && (
        <p className="portal-form-status" role="status">
          <i className="fas fa-circle-info" aria-hidden="true" />
          ফর্মটি প্রস্তুত, তবে অনলাইন সার্ভারের সঙ্গে সংযুক্ত না থাকায় তথ্য জমা
          বা যাচাই করা হয়নি।
        </p>
      )}
    </form>
  );
}
