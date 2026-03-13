"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";

// Extend window to type the gtag function injected by GA4 in layout.tsx
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  urgency: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormValues) => void;
  defaultServiceType?: string;
}

export function ContactForm({ onSubmit, defaultServiceType }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      serviceType: defaultServiceType || "",
      urgency: "",
    },
  });

  const serviceType = watch("serviceType");

  const onFormSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Fix 6a: Fire GA4 conversion event instead of reloading the page.
      // This allows analytics to record the conversion without losing the session.
      // Replace 'generate_lead' with a custom event name if configured in GA4.
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "contact_form",
          event_label: data.serviceType,
          value: 1,
        });
      }

      setSubmitStatus("success");
      reset(); // Clear the form fields
      if (onSubmit) {
        onSubmit(data);
      }
      // Fix 6b: Removed window.location.reload() — it destroyed the GA4 conversion
      // event attribution and caused a jarring UX on mobile. The inline success
      // state below is the correct pattern.
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fix 6c: Show the full success state instead of the form after submission
  if (submitStatus === "success") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center justify-center gap-6 py-12 text-center"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent!</h3>
          <p className="text-gray-600 max-w-sm">
            Thank you for reaching out. We&apos;ll get back to you within one business day.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button
            variant="outline"
            onClick={() => setSubmitStatus("idle")}
          >
            Send Another Enquiry
          </Button>
          <a href="tel:0433804284">
            <Button>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call Us Now
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            autoComplete="name"
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="0433 804 284"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1 text-sm text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
            Service Type <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <Select
            value={serviceType}
            onValueChange={(value) => setValue("serviceType", value, { shouldValidate: true })}
          >
            <SelectTrigger
              id="serviceType"
              aria-required="true"
              aria-invalid={errors.serviceType ? "true" : "false"}
              className={errors.serviceType ? "border-destructive" : ""}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hedge-trimming">Hedge Trimming</SelectItem>
              <SelectItem value="tree-pruning">Tree Pruning & Reductions</SelectItem>
              <SelectItem value="tree-removal">Tree Removal</SelectItem>
              <SelectItem value="stump-grinding">Stump Grinding</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p role="alert" className="mt-1 text-sm text-destructive">
              {errors.serviceType.message}
            </p>
          )}
        </div>
      </div>

      {/* Urgency (Optional) */}
      <div>
        <label htmlFor="urgency" className="block text-sm font-medium mb-2">
          Urgency <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <Select
          value={watch("urgency")}
          onValueChange={(value) => setValue("urgency", value)}
        >
          <SelectTrigger id="urgency">
            <SelectValue placeholder="Select urgency level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="routine">Routine - No rush</SelectItem>
            <SelectItem value="soon">Soon - Within a week</SelectItem>
            <SelectItem value="urgent">Urgent - Within 48 hours</SelectItem>
            <SelectItem value="emergency">Emergency - ASAP</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your tree service needs..."
          rows={6}
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Error state */}
      {submitStatus === "error" && (
        <div
          role="alert"
          className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-md text-red-800"
        >
          <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <p>
            Something went wrong. Please try again or{" "}
            <a href="tel:0433804284" className="underline font-medium">
              call us directly
            </a>
            .
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <span>Sending&hellip;</span>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
