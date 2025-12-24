export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff4df_0,_#f5efe6_62%)] text-slate-900">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#9ad9d0]/45 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6%] top-24 h-80 w-80 rounded-full bg-[#f7b267]/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ffd6a5]/40 blur-3xl" />
        <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16 lg:px-10">
          <header className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-700 shadow-sm">
              Niclas Collard
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900/60" />
              Personal Site
            </span>
            <h1 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
              A personal site with a friendly doorbell.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700">
              Niclas collects kind connections, small stories, and good ideas.
              Leave your details and a short intro, and he will follow up.
            </p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-white/70 bg-white/75 p-8 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.5)] backdrop-blur">
              <h2 className="font-display text-2xl text-slate-950">
                What this is
              </h2>
              <p className="mt-4 text-base text-slate-700">
                A short, human-first profile that helps Niclas remember your
                name, your vibe, and why you said hello.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Detail
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Friendly intros, not long bios.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-900/10 bg-white px-4 py-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Tone
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    Warm, thoughtful, and specific.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-900/10 bg-[#fef7ec] px-5 py-4">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                  Application number
                </p>
                <p className="mt-2 text-base text-slate-700">
                  You are applying for friendship spot{" "}
                  <span className="font-semibold text-slate-900">#84,219</span>.
                </p>
              </div>
            </section>

            <form className="rounded-3xl bg-slate-900 p-8 text-white shadow-[0_30px_70px_-45px_rgba(15,23,42,0.8)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl">
                    Register as Niclas’s friend
                  </h2>
                  <p className="mt-2 text-sm text-white/70">
                    All fields are required to be considered delightful.
                  </p>
                </div>
                <span className="mt-1 h-2 w-2 rounded-full bg-[#f7b267]" />
              </div>

              <div className="mt-6 grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm text-white/80">
                    First name
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="Avery"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#f7b267]"
                    />
                  </label>
                  <label className="text-sm text-white/80">
                    Last name
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Lane"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9ad9d0]"
                    />
                  </label>
                </div>
                <label className="text-sm text-white/80">
                  Description (who are you + why now)
                  <textarea
                    required
                    name="description"
                    rows={5}
                    placeholder="I build, I explore, I laugh at good snacks, and I thought..."
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ffd6a5]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f7b267] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-[#f5a94b]"
              >
                Join the circle
              </button>
              <p className="mt-4 text-xs text-white/60">
                Thank you for submitting. Niclas will get back to you.
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
