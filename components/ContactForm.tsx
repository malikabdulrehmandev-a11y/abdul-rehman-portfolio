'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormValues>({ mode: 'onTouched' });
  const [status, setStatus] = useState('');

  const onSubmit = (values: ContactFormValues) => {
    const body = encodeURIComponent(`Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0A%0D%0A${values.message}`);
    window.location.href = `mailto:mailkabdulrehman.dev@gmail.com?subject=Portfolio inquiry&body=${body}`;
    setStatus('Your message is ready to send in your email client.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-slate-900">
            Name
            <input
              {...register('name', { required: true })}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Your name"
            />
          </label>
          <label className="block text-sm font-semibold text-slate-900">
            Email
            <input
              {...register('email', { required: true })}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="block text-sm font-semibold text-slate-900">
          Message
          <textarea
            {...register('message', { required: true })}
            className="mt-2 min-h-[140px] w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            placeholder="Tell me about your next project."
          />
        </label>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
          Send message
        </button>
        {status ? <p className="text-sm text-indigo-600">{status}</p> : null}
      </div>
    </form>
  );
}
