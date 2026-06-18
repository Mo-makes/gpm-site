"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isNewPatient: "yes" | "no";
  insurance?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const isNewPatient = watch("isNewPatient");
  const insuranceValue = watch("insurance");
  const isUHC = /uhc|united\s*health/i.test(insuranceValue ?? "");

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-colors";
  const labelClass = "block text-sm font-medium text-text-primary mb-1";
  const errorClass = "text-red-600 text-xs mt-1";

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3" aria-hidden="true">✓</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm">
          Thank you for reaching out. A member of our team will be in touch
          within one business day. For urgent matters, please call us directly
          at{" "}
          <a href="tel:4438254050" className="font-semibold underline">
            (443) 825-4050
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-700 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Appointment request form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className={inputClass}
            aria-required="true"
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p id="firstName-error" className={errorClass} role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            className={inputClass}
            aria-required="true"
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p id="lastName-error" className={errorClass} role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\(?\d{3}\)?[\s.\-]?\d{3}[\s.\-]?\d{4}$/,
                message: "Enter a 10-digit US phone number, e.g. (410) 825-4050",
              },
            })}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClass} role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-text-muted font-normal">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* New Patient */}
      <div className="mt-5">
        <fieldset>
          <legend className={labelClass}>
            Are you a new patient?{" "}
            <span className="text-red-500" aria-hidden="true">*</span>
          </legend>
          <div className="flex gap-6 mt-2">
            {(["yes", "no"] as const).map((val) => (
              <label key={val} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value={val}
                  className="w-4 h-4 text-brand-blue border-gray-300 focus:ring-brand-blue"
                  {...register("isNewPatient", {
                    required: "Please select one",
                  })}
                />
                <span className="text-sm text-text-primary capitalize">{val === "yes" ? "Yes, new patient" : "No, existing patient"}</span>
              </label>
            ))}
          </div>
          {errors.isNewPatient && (
            <p className={errorClass} role="alert">
              {errors.isNewPatient.message}
            </p>
          )}
        </fieldset>
      </div>

      {/* Insurance — new patients only */}
      {isNewPatient === "yes" && (
        <div className="mt-5">
          <label htmlFor="insurance" className={labelClass}>
            Primary Insurance Provider <span className="text-text-muted font-normal">(optional)</span>
          </label>
          <input
            id="insurance"
            type="text"
            autoComplete="off"
            placeholder="e.g. Blue Cross Blue Shield, Medicare, Aetna"
            className={inputClass}
            {...register("insurance")}
          />
          {isUHC && (
            <div className="mt-2 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800" role="alert">
              <strong>Referral required:</strong> United Healthcare patients must have a referral from their primary care provider faxed to Global Pain Management before their first appointment. Please ask your PCP to fax the referral to us at <strong>(410) 825-4051</strong>.
            </div>
          )}
        </div>
      )}

      {/* Address */}
      <div className="mt-5">
        <p className={labelClass}>Address <span className="text-text-muted font-normal">(optional)</span></p>
        <div className="grid grid-cols-1 gap-4 mt-1">
          <input
            id="address1"
            type="text"
            autoComplete="address-line1"
            placeholder="Street address"
            className={inputClass}
            {...register("address1")}
          />
          <input
            id="address2"
            type="text"
            autoComplete="address-line2"
            placeholder="Apt, suite, unit, etc."
            className={inputClass}
            {...register("address2")}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <input
              id="city"
              type="text"
              autoComplete="address-level2"
              placeholder="City"
              className={`${inputClass} sm:col-span-1`}
              {...register("city")}
            />
            <input
              id="state"
              type="text"
              autoComplete="address-level1"
              placeholder="State"
              className={inputClass}
              {...register("state")}
            />
            <input
              id="zip"
              type="text"
              autoComplete="postal-code"
              placeholder="ZIP code"
              className={`${inputClass} col-span-2 sm:col-span-1`}
              {...register("zip")}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          How can we help you?{" "}
          <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className={`${inputClass} resize-none`}
          aria-required="true"
          placeholder="Briefly describe your pain condition or questions..."
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", {
            required: "Please tell us how we can help",
            minLength: { value: 10, message: "Please provide more detail" },
          })}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* HIPAA Notice */}
      <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-xs text-yellow-800 leading-relaxed">
          <strong>Privacy Notice:</strong> Do not submit protected health
          information (PHI) through this form. This is a general inquiry form
          only — it is not a secure patient communication channel. For medical
          questions about your specific condition or treatment, please call our
          office directly at{" "}
          <a href="tel:4438254050" className="font-semibold underline">
            (443) 825-4050
          </a>
          .
        </p>
      </div>

      {status === "error" && (
        <div
          className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm"
          role="alert"
        >
          Something went wrong. Please try again or call us at (443) 825-4050.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full bg-brand-blue text-white py-3 rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
