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
    <form className="text-ink" onSubmit={handleSubmit}>
      <div className="flex items-center gap-[13px] border-b border-paper-line pb-5">
        <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[5px] bg-maroon text-white">
          <i className="fas fa-clipboard-check" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-serif text-[1.05rem]">প্রয়োজনীয় তথ্য দিন</h2>
          <p className="mt-[3px] text-[0.75rem] text-ink-soft">
            তারকা (*) চিহ্নিত ঘরগুলো পূরণ করা আবশ্যক
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-3.5 gap-y-4 py-5 sm:grid-cols-2 sm:gap-y-[17px]">
        {fields.map((field) => (
          <label
            className={`flex min-w-0 flex-col gap-1.5 text-[0.82rem] font-semibold ${field.type === "checkbox" ? "flex-row items-start gap-[9px] font-medium sm:col-span-2" : ""} ${field.wide && field.type !== "checkbox" ? "sm:col-span-2" : ""}`}
            key={field.name}
          >
            {field.type === "checkbox" ? (
              <>
                <input
                  type="checkbox"
                  name={field.name}
                  required={field.required !== false}
                  className="mt-0.5 h-[17px] w-[17px] shrink-0 accent-maroon"
                />
                <span>{field.label}</span>
              </>
            ) : (
              <>
                <span>
                  {field.label}
                  {field.required !== false && <b> *</b>}
                </span>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    required={field.required !== false}
                    defaultValue=""
                    className="min-h-11 w-full rounded border border-[#d9d5ca] bg-white px-3 py-2.5 text-[0.85rem] font-normal text-ink outline-none transition focus:border-gold focus:ring-[3px] focus:ring-gold/15"
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
                    className="min-h-28 w-full resize-y rounded border border-[#d9d5ca] bg-white px-3 py-2.5 text-[0.85rem] font-normal text-ink outline-none transition placeholder:text-[#969ba1] focus:border-gold focus:ring-[3px] focus:ring-gold/15"
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    required={field.required !== false}
                    className="min-h-11 w-full rounded border border-[#d9d5ca] bg-white px-3 py-2.5 text-[0.85rem] font-normal text-ink outline-none transition placeholder:text-[#969ba1] focus:border-gold focus:ring-[3px] focus:ring-gold/15"
                  />
                )}
              </>
            )}
          </label>
        ))}
      </div>
      <button
        className="inline-flex min-h-11 w-full items-center justify-center gap-3 rounded bg-maroon px-[18px] text-[0.85rem] font-bold text-white transition hover:-translate-y-px hover:bg-maroon-deep focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
        type="submit"
      >
        {submitLabel}
        <i className="fas fa-arrow-right" aria-hidden="true" />
      </button>
      <p className="mt-3.5 flex items-start gap-[7px] text-[0.73rem] leading-[1.5] text-ink-soft">
        <i className="fas fa-lock mt-[3px] text-maroon" aria-hidden="true" />
        আপনার তথ্য এই ডেমো পেজে কোথাও পাঠানো হচ্ছে না।
      </p>
      {submitted && (
        <p
          className="mt-[15px] flex items-start gap-[9px] border-l-[3px] border-gold bg-[#fbf1d9] p-3 text-[0.79rem] leading-[1.55] text-[#684d13]"
          role="status"
        >
          <i className="fas fa-circle-info mt-[3px]" aria-hidden="true" />
          ফর্মটি প্রস্তুত, তবে অনলাইন সার্ভারের সঙ্গে সংযুক্ত না থাকায় তথ্য জমা
          বা যাচাই করা হয়নি।
        </p>
      )}
    </form>
  );
}
