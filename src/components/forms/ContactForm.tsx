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
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

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

      setSubmitStatus("success");
      if (onSubmit) {
        onSubmit(data);
      }
      // Reset form after successful submission
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="0433 804 284"
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
            Service Type <span className="text-destructive">*</span>
          </label>
          <Select
            value={serviceType}
            onValueChange={(value) => setValue("serviceType", value)}
          >
            <SelectTrigger
              id="serviceType"
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
            <p className="mt-1 text-sm text-destructive">{errors.serviceType.message}</p>
          )}
        </div>
      </div>

      {/* Urgency (Optional) */}
      <div>
        <label htmlFor="urgency" className="block text-sm font-medium mb-2">
          Urgency (Optional)
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
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your tree service needs..."
          rows={6}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Status */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
          <CheckCircle2 className="h-5 w-5" />
          <p>Thank you! Your message has been sent. We'll get back to you soon.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
          <AlertCircle className="h-5 w-5" />
          <p>Something went wrong. Please try again or call us directly.</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="mr-2">Sending...</span>
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

