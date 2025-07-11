"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";

export function FranchisePresentationForm() {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    phone: '',
    country:  '+996',
    city: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Имя</label>
        <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Ваше имя" required />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@mail.com" required />
      </div>
      <div>
        <label className="block mb-1 font-medium">Телефон</label>
        <div className="flex gap-2">
          <Select value={form.country} onValueChange={v => setForm(f => ({ ...f, country: v }))}>
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+996">🇰🇬 +996</SelectItem>
              <SelectItem value="+7">🇰🇿 +7</SelectItem>
              <SelectItem value="+998">🇺🇿 +998</SelectItem>
              <SelectItem value="+992">🇹🇯 +992</SelectItem>
              <SelectItem value="+993">🇹🇲 +993</SelectItem>
              <SelectItem value="+7">🇷🇺 +7</SelectItem>
              <SelectItem value="+375">🇧🇾 +375</SelectItem>
              <SelectItem value="+380">🇺🇦 +380</SelectItem>
              <SelectItem value="+1">🇺🇸 +1</SelectItem>
              <SelectItem value="+44">🇬🇧 +44</SelectItem>
              <SelectItem value="+49">🇩🇪 +49</SelectItem>
            </SelectContent>
          </Select>
          <Input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Номер телефона" required className="flex-1" />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Город</label>
        <Input name="city" value={form.city} onChange={handleChange} placeholder="Ваш город" required />
      </div>
      <DialogFooter>
        <Button type="submit" className="w-full">Отправить</Button>
        <DialogClose asChild>
          <Button type="button" variant="outline" className="w-full mt-2">Отмена</Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
}

export default FranchisePresentationForm; 