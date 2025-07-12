"use client";
import React, { useState } from "react";
import { sendFranchiseTextRequest, sendFranchiseFileRequest } from "@/lib/apiClient";

export function CreateFranchiseRequestForm() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const textRes = await sendFranchiseTextRequest(form);
      const fileRes = await sendFranchiseFileRequest(form);
      if (textRes.success && fileRes.success) {
        setStatus("Ваша заявка успешно отправлена!");
        setForm({ firstName: "", email: "", phone: "", city: "" });
      } else {
        setStatus("Ошибка при отправке. Попробуйте еще раз.");
      }
    } catch (err) {
      setStatus("Ошибка при отправке. Попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-lg space-y-6">
      <h2 className="text-2xl font-extrabold text-center text-white mb-4">Оставить заявку на франшизу</h2>
      <input
        type="text"
        name="firstName"
        placeholder="Имя"
        value={form.firstName}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <input
        type="text"
        name="city"
        placeholder="Город"
        value={form.city}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg transition disabled:opacity-60"
      >
        {loading ? "Отправка..." : "Отправить заявку"}
      </button>
      {status && (
        <div className="text-center text-white font-semibold mt-2">{status}</div>
      )}
    </form>
  );
} 