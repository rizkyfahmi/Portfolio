import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate direct contact dispatch
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 800)
  }

  return (
    <div className="rounded-3xl bg-[#222533] p-8 sm:p-10 border border-white/8">
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
        Send a direct message.
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-slate-400">
        Leave your inquiry, collaboration offer, or opportunity.
      </p>

      {success ? (
        <div className="mt-8 rounded-2xl bg-amber-400/10 border border-amber-400/30 p-6 text-center">
          <CheckCircle2 size={32} className="mx-auto text-amber-400" />
          <h4 className="mt-3 text-base font-bold text-white">Message Sent Successfully!</h4>
          <p className="mt-1 text-xs text-slate-300">
            Thank you for reaching out. I will get back to you as soon as possible.
          </p>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-4 text-xs font-semibold text-amber-400 underline hover:text-amber-300 cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g., John Doe"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="e.g., Web Project Inquiry"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Write your message or project details here..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3.5 px-6 font-bold text-slate-950 shadow-md hover:bg-amber-300 disabled:opacity-50 transition-all cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
