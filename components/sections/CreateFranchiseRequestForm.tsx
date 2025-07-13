"use client";
import React, { useState, useCallback } from "react";
import { sendFranchiseFileRequest } from "@/lib/apiClient";
import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const REGION_CITY_MAP: Record<string, string[]> = {
  "Казахстан": ["Алматы", "Астана", "Шымкент"],
  "Узбекистан": ["Ташкент", "Самарканд", "Бухара"],
  "Киргизия": ["Бишкек", "Ош", "Каракол"],
};
const REGION_LIST = Object.keys(REGION_CITY_MAP);

export const CreateFranchiseRequestForm = React.memo(function CreateFranchiseRequestForm() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const CIS_PHONE_REGEX = /^\+(7|996|998|375|374|992|993|994|995|373|380|372|371|370|373|995|7)[0-9\s\-()]{7,15}$/;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleCitySelect = useCallback((value: string) => {
    setForm((prev) => ({ ...prev, city: value }));
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Пожалуйста, введите ваше имя";
    if (!form.email.trim()) newErrors.email = "Пожалуйста, введите email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Пожалуйста, введите корректный email адрес";
    if (!form.phone.trim()) newErrors.phone = "Пожалуйста, введите номер телефона";
    else if (!CIS_PHONE_REGEX.test(form.phone.replace(/\s+/g, ''))) newErrors.phone = "Введите корректный номер телефона в формате +7..., +996..., +998...";
    if (!form.city) newErrors.city = "Пожалуйста, выберите город";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!validateForm()) return;
    setLoading(true);
    setStatus(null);
    try {
      const fileRes = await sendFranchiseFileRequest(form);
      if (fileRes.success) {
        setStatus("Ваша заявка успешно отправлена!");
        setIsSubmitted(false);
        window.location.replace("/submit-successful");
      } else {
        setStatus("Ошибка при отправке. Попробуйте еще раз.");
      }
    } catch (err) {
      setStatus("Ошибка при отправке. Попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  }, [form]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white p-0 sm:p-8 sm:rounded-2xl sm:border sm:border-gray-200 sm:shadow-md min-h-screen sm:min-h-0 flex flex-col justify-center"
    >
      <div className="p-6 sm:p-0 flex-1 flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-2 sm:mb-4">Оставить заявку на франшизу</h2>
        <div className="mb-4">
          <Label htmlFor="firstName">Имя</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Введите ваше имя"
            className="focus:border-cyan-400 focus:ring-0 transition-colors duration-200"
          />
          {isSubmitted && errors.firstName && (
            <p className="text-red-500 text-xs mt-1 text-left">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Введите ваш email"
            className="focus:border-cyan-400 focus:ring-0 transition-colors duration-200"
          />
          {isSubmitted && errors.email && (
            <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="text"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+()\-\s]*"
            value={form.phone}
            onChange={handleChange}
            placeholder="Введите номер телефона"
            className="focus:border-cyan-400 focus:ring-0 transition-colors duration-200"
          />
          {isSubmitted && errors.phone && (
            <p className="text-red-500 text-xs mt-1 text-left">{errors.phone}</p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="city">Город</Label>
          <Select
            value={form.city}
            onValueChange={handleCitySelect}
          >
            <SelectTrigger id="city" className="focus:border-cyan-400 focus:ring-0 transition-colors duration-200" >
              <SelectValue placeholder="Выберите город" />
            </SelectTrigger>
            <SelectContent>
              {REGION_LIST.map((region) => (
                <SelectGroup key={region}>
                  <SelectLabel>{region}</SelectLabel>
                  {REGION_CITY_MAP[region].map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
          {isSubmitted && errors.city && (
            <p className="text-red-500 text-xs mt-1 text-left">{errors.city}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-base sm:text-lg transition disabled:opacity-60 shadow-sm mt-6"
        >
          {loading ? "Отправка..." : "Отправить заявку"}
        </Button>
        <Button
          onClick={(event) => {
            event.preventDefault()
            window.location.replace('/')
          }}
          disabled={loading}
          variant="outline"
          className="w-full text-cyan-500 hover:text-cyan-400 rounded-lg border-cyan-500 font-bold text-base sm:text-lg transition disabled:opacity-60 shadow-sm mt-2"
        >
          На главную
        </Button>
        <p className="text-xs text-gray-400 text-center mt-3">
          Ваши данные будут использованы только для обработки ваших заявок и обратного вызова.
        </p>
        {status && (
          <div className="text-center text-cyan-700 font-semibold mt-2 text-base sm:text-lg" aria-live="polite">{status}</div>
        )}
      </div>
    </form>
  );
}); 