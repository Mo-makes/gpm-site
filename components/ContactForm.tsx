"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { PHONE_DISPLAY, PHONE_HREF, FAX_DISPLAY } from "@/lib/site";

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
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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

  const labelClass =
    "block text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-sage-deep mb-2";
  const errorClass = "text-clay-deep text-xs mt-1.5";

  if (status === "success") {
    return (
      <div className="card p-8 text-center border-sage/40">
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-soft"
          aria-hidden="true"
        >
          <svg
            className="h-7 w-7 text-sage-deep"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="font-fraunces text-xl text-ink mb-2"
          style={{ fontWeight: 560 }}
        >
          Message sent
        </h3>
        <p className="text-body text-[0.95rem] leading-relaxed max-w-md mx-auto">
          Thank you for reaching out. A member of our team will be in touch within one
          business day. For urgent matters, please call us directly at{" "}
          <a href={PHONE_HREF} className="font-semibold text-clay-deep underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm text-clay-deep underline hover:no-underline"
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
            First name <span className="text-clay" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className="field"
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
            Last name <span className="text-clay" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            className="field"
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
            Phone number <span className="text-clay" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="field"
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
            Email <span className="text-muted font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="field"
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
      <div className="mt-6">
        <fieldset>
          <legend className={labelClass}>
            Are you a new patient?{" "}
            <span className="text-clay" aria-hidden="true">*</span>
          </legend>
          <div className="flex flex-wrap gap-3 mt-1">
            {(["yes", "no"] as const).map((val) => {
              const selected = isNewPatient === val;
              return (
                <label
                  key={val}
                  className={`flex items-center gap-2.5 cursor-pointer rounded-[3px] border px-4 py-2.5 text-[0.9rem] transition-colors ${
                    selected
                      ? "border-clay bg-clay-soft text-clay-deep"
                      : "border-line-strong text-body hover:border-clay/50"
                  }`}
                >
                  <input
                    type="radio"
                    value={val}
                    className="sr-only"
                    {...register("isNewPatient", { required: "Please select one" })}
                  />
                  <span
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 rounded-full border ${
                      selected ? "border-clay bg-clay" : "border-line-strong"
                    }`}
                  />
                  {val === "yes" ? "Yes, I'm new" : "No, established patient"}
                </label>
              );
            })}
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
        <div className="mt-6">
          <label htmlFor="insurance" className={labelClass}>
            Primary insurance{" "}
            <span className="text-muted font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="insurance"
            type="text"
            autoComplete="off"
            placeholder="e.g. Blue Cross Blue Shield, Medicare, Aetna"
            className="field"
            {...register("insurance")}
          />
          {isUHC && (
            <div
              className="mt-3 bg-clay-soft border border-clay/30 rounded-[4px] p-4 text-[0.88rem] text-clay-deep leading-relaxed"
              role="alert"
            >
              <strong>Referral required:</strong> United Healthcare patients must have a
              referral from their primary care provider faxed to Global Pain Management
              before their first appointment. Please ask your PCP to fax the referral to
              us at <strong>{FAX_DISPLAY}</strong>.
            </div>
          )}
        </div>
      )}

      {/* Address */}
      <div className="mt-6">
        <p className={labelClass}>
          Address{" "}
          <span className="text-muted font-normal normal-case tracking-normal">(optional)</span>
        </p>
        <div className="grid grid-cols-1 gap-4 mt-1">
          <input
            id="address1"
            type="text"
            autoComplete="address-line1"
            placeholder="Street address"
            className="field"
            {...register("address1")}
          />
          <input
            id="address2"
            type="text"
            autoComplete="address-line2"
            placeholder="Apt, suite, unit, etc."
            className="field"
            {...register("address2")}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <input
              id="city"
              type="text"
              autoComplete="address-level2"
              placeholder="City"
              className="field"
              {...register("city")}
            />
            <input
              id="state"
              type="text"
              autoComplete="address-level1"
              placeholder="State"
              className="field"
              {...register("state")}
            />
            <input
              id="zip"
              type="text"
              autoComplete="postal-code"
              placeholder="ZIP code"
              className="field col-span-2 sm:col-span-1"
              {...register("zip")}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className={labelClass}>
          How can we help? <span className="text-clay" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className="field resize-none"
          aria-required="true"
          placeholder="Briefly describe your pain condition or questions…"
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

      {/* Privacy notice */}
      <div className="mt-6 bg-sand border border-line-strong rounded-[4px] p-4">
        <p className="text-[0.8rem] text-muted leading-relaxed">
          <strong className="text-body">Privacy notice —</strong> please do not submit
          protected health information (PHI) through this form. It is a general inquiry
          form, not a secure patient channel. For medical questions about your specific
          condition or treatment, call our office at{" "}
          <a href={PHONE_HREF} className="font-semibold text-clay-deep underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>

      {status === "error" && (
        <div
          className="mt-5 bg-clay-soft border border-clay/30 rounded-[4px] p-4 text-clay-deep text-[0.9rem]"
          role="alert"
        >
          Something went wrong. Please try again or call us at {PHONE_DISPLAY}.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-clay w-full mt-7 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
