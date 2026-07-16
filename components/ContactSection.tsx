import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-200/70 bg-slate-50 py-16 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-indigo-600">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Let’s build the next visual experience.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500">Contact details</p>
              <div className="mt-4 space-y-4 text-slate-700">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Email</p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">mailkabdulrehman.dev@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Phone</p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">+92 317 3520279</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Location</p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">Faisalabad, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-indigo-600">Client Feedback Input</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">Share a quick brief in one step.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">This section is built for compact, recruiter-friendly input. Name, email, and message are easy to complete.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
