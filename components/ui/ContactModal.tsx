"use client";

import { X, Send, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center sm:items-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-slate-500">
              Have questions? We're here to help you start your journey.
            </p>
          </div>

          {isSuccess ? (
            <div className="py-12 text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-slate-600">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="modal-name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>
                <Input
                  id="modal-name"
                  required
                  placeholder="John Doe"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="modal-phone"
                  className="text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>
                <Input
                  id="modal-phone"
                  type="tel"
                  required
                  placeholder={"91 xxxxx xxxxx"}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="modal-message"
                  className="text-sm font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="modal-message"
                  required
                  placeholder="How can we help you?"
                  className="flex min-h-[120px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>{siteConfig.contact.address}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
