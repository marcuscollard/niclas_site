import Image from "next/image";

type HomeProps = {
  searchParams?: Promise<{
    submitted?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await searchParams;
  const submitted = resolvedSearchParams?.submitted === "1";

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

            </h1>
            <p className="max-w-2xl text-lg text-slate-700">
              
            </p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="grid gap-6">
              <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/75 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.5)] backdrop-blur">
                <Image
                  src="/niclas-1.jpg"
                  alt="Niclas Collard portrait"
                  width={880}
                  height={1080}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/75 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.5)] backdrop-blur">
                <Image
                  src="/niclas-2.jpg"
                  alt="Niclas Collard"
                  width={880}
                  height={1080}
                  className="h-full w-full object-cover"
                />
              </div>
            </section>

            <form
              action="/api/friend"
              method="post"
              className="rounded-3xl bg-slate-900 p-8 text-white shadow-[0_30px_70px_-45px_rgba(15,23,42,0.8)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl">
                    Register as Niclas’s friend
                  </h2>
                  <p className="mt-2 text-sm text-white/70">
                    
                  </p>
                </div>
                <span className="mt-1 h-2 w-2 rounded-full bg-[#f7b267]" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
                Application no.{" "}
                <span className="text-white/90">#741,293</span>
              </p>

              <div className="mt-6 grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm text-white/80">
                    First name
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="Hank"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#f7b267]"
                    />
                  </label>
                  <label className="text-sm text-white/80">
                    Last name
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Hill"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9ad9d0]"
                    />
                  </label>
                </div>
                <label className="text-sm text-white/80">
                  Application message
                  <textarea
                    required
                    name="description"
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ffd6a5]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f7b267] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-[#f5a94b]"
              >
                Apply (send email)
              </button>
              {submitted ? (
                <p className="mt-4 text-xs text-white/80">
                  Thank you for submitting. Niclas will get back to you.
                </p>
              ) : (
                <p className="mt-4 text-xs text-white/60">
                  
                </p>
              )}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
