"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/site-config";

// Sem backend próprio: o formulário monta a mensagem e abre o WhatsApp já
// preenchido, que é o canal real de atendimento do negócio.
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const text = [
      `Olá, Júlio! Meu nome é ${name || "—"}.`,
      topic ? `Assunto: ${topic}.` : null,
      message ? `Mensagem: ${message}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    setStatus("sent");
    window.open(`https://wa.me/${business.phoneE164}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-describedby={status === "sent" ? "form-status" : undefined}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Seu nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-white/15 bg-navy-dark px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-ink">
          O que você gostaria de tratar?
        </label>
        <select
          id="topic"
          name="topic"
          className="mt-1 w-full rounded-lg border border-white/15 bg-navy-dark px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
          defaultValue="Ansiedade"
        >
          <option>Ansiedade</option>
          <option>Trauma</option>
          <option>Fobia ou medo</option>
          <option>Bloqueio emocional</option>
          <option>Outro assunto</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-1 w-full rounded-lg border border-white/15 bg-navy-dark px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-whatsapp-dark"
      >
        Enviar e continuar no WhatsApp
      </button>

      <p id="form-status" role="status" aria-live="polite" className="text-sm text-ink-soft">
        {status === "sent"
          ? "Mensagem preparada! Se o WhatsApp não abriu automaticamente, verifique se o navegador bloqueou a janela."
          : null}
      </p>
    </form>
  );
}
