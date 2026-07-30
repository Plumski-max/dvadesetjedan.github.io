import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  MessageCircle,
  Play,
  Sparkles,
} from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { Layout } from "@/components/Layout"
import { OptimizedImage } from "@/components/OptimizedImage"
import { events } from "@/data/events"
import { featuredArticles } from "@/data/featuredArticles"
import {
  ARTICLES_URL,
  BEGINNERS_URL,
  CITIES_URL,
  COMMUNITY_URL,
  EVENTS_URL,
  LIVESTREAM_URL,
} from "@/data/site"
import { articleHref, eventHref, formatEventDate } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

const paths = [
  {
    number: "01",
    title: "Upoznaj Bitcoin",
    text: "Mirni početak bez žargona, hypea i nepotrebnog rizika.",
    href: BEGINNERS_URL,
    tone: "bg-[#d7f4e8]",
  },
  {
    number: "02",
    title: "Dođi među ljude",
    text: "Meetupi, razgovori i lokalne inicijative diljem regije.",
    href: EVENTS_URL,
    tone: "bg-[#dce9ff]",
  },
  {
    number: "03",
    title: "Pridonesi signalu",
    text: "Podijeli ideju, pokreni susret ili napravi nešto korisno.",
    href: COMMUNITY_URL,
    tone: "bg-[#ffd9c1]",
    external: true,
  },
]

export function HomePage() {
  usePageMeta(
    "DvadesetJedan | Bitcoin zajednica za Balkan",
    "Uči o Bitcoinu, upoznaj ljude iz regije i pronađi sljedeći DvadesetJedan događaj.",
  )

  const upcomingEvent = events
    .filter((event) => new Date(event.end) >= new Date())
    .sort(
      (left, right) =>
        new Date(left.start).getTime() - new Date(right.start).getTime(),
    )[0]

  return (
    <Layout>
      <main className="overflow-hidden">
        <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16">
          <div className="absolute -left-28 top-12 -z-10 size-72 rounded-full bg-[#ffd35f]/45 blur-3xl" />
          <div className="absolute right-0 top-36 -z-10 size-80 rounded-full bg-[#77d6bd]/30 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
                <Sparkles className="size-3.5 text-primary-strong" />
                Bitcoin zajednica za Balkan
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-foreground sm:text-7xl lg:text-8xl">
                Manje buke.
                <br />
                Više <span className="text-primary-strong">signala.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Mjesto gdje se o Bitcoinu uči, razgovara i gradi zajedno — na
                našim jezicima, bez tradinga, tokena i praznih obećanja.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ActionButton
                  href={upcomingEvent ? eventHref(upcomingEvent.slug) : EVENTS_URL}
                  icon={<CalendarDays className="size-4" />}
                  primary
                >
                  Pronađi događaj
                </ActionButton>
                <ActionButton href={BEGINNERS_URL} icon={<ArrowDownRight className="size-4" />}>
                  Počni učiti
                </ActionButton>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#242022] p-5 text-[#fff8ef] shadow-[0_28px_70px_rgba(42,30,18,0.2)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd35f]">
                Zajednica je uživo
              </p>
              <div className="mt-12 max-w-sm">
                <p className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
                  Ideje postaju jače kad ih podijelimo za istim stolom.
                </p>
                <a
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#a9ecd5] hover:text-white"
                  href={COMMUNITY_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Uđi u Telegram <ArrowUpRight className="size-4" />
                </a>
              </div>
              <div className="absolute -bottom-16 -right-12 size-48 rounded-full border-[22px] border-[#f7931a]" />
              <div className="absolute bottom-8 right-8 flex size-14 items-center justify-center rounded-full bg-[#ffd35f] text-2xl text-[#242022]">
                ₿
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-foreground/10 bg-[#f7931a] text-[#24170b]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 text-sm font-semibold sm:px-8">
            <span>Bitcoin-only. Otvoreno. Regionalno.</span>
            <span>Uči · upoznaj · doprinesi</span>
            <a className="inline-flex items-center gap-1 underline underline-offset-4" href={CITIES_URL}>
              Istraži gradove <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">Tvoj sljedeći korak</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Uđi kroz vrata koja ti najviše odgovaraju.</h2>
            </div>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {paths.map((path) => (
              <a
                className={`group min-h-64 rounded-[1.75rem] p-6 transition-transform duration-200 hover:-translate-y-1 ${path.tone}`}
                href={path.href}
                key={path.number}
                rel={path.external ? "noopener noreferrer" : undefined}
                target={path.external ? "_blank" : undefined}
              >
                <p className="text-sm font-semibold text-foreground/55">{path.number}</p>
                <div className="mt-16 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.045em]">{path.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-foreground/70">{path.text}</p>
                  </div>
                  <ArrowUpRight className="mb-1 size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[#242022] py-16 text-[#fff8ef] sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a9ecd5]">Sljedeće okupljanje</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Događaji koji pretvaraju online signal u stvarnu zajednicu.</h2>
              <a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#ffd35f] hover:text-white" href={EVENTS_URL}>
                Svi događaji <ArrowUpRight className="size-4" />
              </a>
            </div>
            {upcomingEvent ? (
              <a className="group overflow-hidden rounded-[1.75rem] bg-[#fff8ef] text-[#242022] sm:grid sm:grid-cols-[0.9fr_1.1fr]" href={eventHref(upcomingEvent.slug)}>
                <OptimizedImage alt="" className="h-56 w-full object-cover sm:h-full" pictureClassName="block h-full" src={upcomingEvent.coverImage} width={960} height={640} />
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold text-primary-strong">{formatEventDate(upcomingEvent)}</p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em]">{upcomingEvent.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-foreground/70">{upcomingEvent.summary}</p>
                  <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"><MapPin className="size-4" /> {upcomingEvent.city}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-strong">Detalji i RSVP <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </a>
            ) : null}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">Čitaj i slušaj</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Sadržaj za dublje razumijevanje.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">Kreni svojim tempom — od prvih pitanja o novcu do praktične sigurnosti i lokalnih razgovora.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ActionButton href={ARTICLES_URL} icon={<ArrowUpRight className="size-4" />} primary>Čitaj članke</ActionButton>
                <ActionButton href={LIVESTREAM_URL} icon={<Play className="size-4" />}>Livestream</ActionButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <a className={`rounded-[1.5rem] p-6 ${index === 0 ? "bg-[#dce9ff]" : "bg-[#ffd9c1]"}`} href={articleHref(article.slug)} key={article.slug}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/55">Preporučeno čitanje</p>
                  <h3 className="mt-12 text-2xl font-semibold leading-tight tracking-[-0.045em]">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">{article.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Otvori tekst <ArrowUpRight className="size-4" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="rounded-[2rem] bg-[#d7f4e8] px-6 py-10 sm:px-12 sm:py-14">
            <MessageCircle className="size-7 text-primary-strong" />
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">Bitcoin je globalan. Zajednica počinje lokalno.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">Pronađi ljude iz regije, postavi pitanje i pomozi da se sljedeća dobra ideja dogodi baš u tvom gradu.</p>
            <div className="mt-8"><ActionButton href={COMMUNITY_URL} icon={<ArrowUpRight className="size-4" />} primary external>Pridruži se zajednici</ActionButton></div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
