import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import croissantImg from "@/assets/croissant.jpg";
import macaronsImg from "@/assets/macarons.jpg";
import gaufreImg from "@/assets/gaufre.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Factice — Répliques alimentaires hyperréalistes" },
      {
        name: "description",
        content:
          "Atelier Factice crée des répliques alimentaires hyperréalistes pour vitrines de restaurants, boutiques et musées. Catalogue, commandes sur mesure et réalisations.",
      },
      { property: "og:title", content: "Atelier Factice — Répliques alimentaires hyperréalistes" },
      {
        property: "og:description",
        content:
          "Répliques alimentaires artisanales pour vitrines, restaurants et musées. Catalogue et créations sur mesure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Croissant au beurre",
    category: "Boulangerie",
    description: "Feuilletage moulé couche par couche, dorure à la main.",
    image: croissantImg,
  },
  {
    name: "Macarons",
    category: "Pâtisserie",
    description: "Coques lisses et garnitures pastel, assemblées pièce par pièce.",
    image: macaronsImg,
  },
  {
    name: "Gaufre de Liège",
    category: "Pâtisserie",
    description: "Grille en relief, sucre perlé et nappage caramélisé.",
    image: gaufreImg,
  },
];

const steps = [
  {
    number: "01",
    title: "Brief & photos",
    text: "Envoyez-nous vos plats, photos ou recettes. Nous définissons ensemble le rendu recherché.",
  },
  {
    number: "02",
    title: "Prototype",
    text: "Vous validez la forme, la couleur et la texture.",
  },
  {
    number: "03",
    title: "Production",
    text: "Fabrication en série ou pièce unique, peinte à la main dans notre atelier.",
  },
];

const realisations = [
  { client: "Brasserie Lumen — Paris", project: "Vitrine complète, 24 pièces" },
  { client: "Musée du Goût — Lyon", project: "Parcours « Le repas », 60 répliques" },
  { client: "Chaîne Umami — Bruxelles", project: "Menus d'exposition, 12 restaurants" },
  { client: "Studio Lumière — Tournage", project: "Accessoires plateau, série TV" },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-extrabold uppercase tracking-tight">
          Atelier Factice
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#catalogue" className="transition-colors hover:text-muted-foreground">
            Catalogue
          </a>
          <a href="#sur-mesure" className="transition-colors hover:text-muted-foreground">
            Sur mesure
          </a>
          <a href="#realisations" className="transition-colors hover:text-muted-foreground">
            Réalisations
          </a>
        </nav>
        <a
          href="#sur-mesure"
          className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
        >
          Demander un devis
          <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-16">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
        <p className="section-label">Répliques alimentaires — fait main en Belgique</p>
        <h1 className="headline-xl mt-6 text-5xl md:text-8xl">
          Factices
          <br />
          alimentaires
          <br />
          sur mesure.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Nous fabriquons des répliques alimentaires hyperréalistes pour les vitrines de
          restaurants, les boutiques, les musées et les plateaux de tournage.
        </p>
      </div>
      <div className="border-y border-border">
        <img
          src={heroImg}
          alt="Répliques alimentaires : ramen, croissant et sushis"
          className="h-[50vh] w-full object-cover md:h-[70vh]"
          width={1920}
          height={1088}
        />
      </div>
    </section>
  );
}

function Catalogue() {
  return (
    <section id="catalogue" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">Catalogue</p>
            <h2 className="headline-xl mt-4 text-4xl md:text-6xl">Pièces en stock</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Chaque pièce du catalogue est moulée et peinte à la main. Expédition sous 5 jours
            ouvrés.
          </p>
        </div>
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group bg-card">
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="section-label">{product.category}</p>
                <div className="mt-3">
                  <h3 className="font-display text-xl font-bold">{product.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SurMesure() {
  return (
    <section id="sur-mesure" className="border-b border-border bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label text-primary-foreground/60">Commandes sur mesure</p>
        <h2 className="headline-xl mt-4 text-4xl md:text-6xl">
          Votre plat,
          <br />
          notre réplique.
        </h2>
        <p className="mt-6 max-w-xl text-primary-foreground/80">
          Un plat signature, un menu entier, une pièce d'exposition : nous reproduisons
          n'importe quelle préparation à l'échelle, à partir de simples photos.
        </p>
        <div className="mt-14 grid gap-px bg-primary-foreground/15 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-primary p-6">
              <p className="font-display text-3xl font-extrabold text-primary-foreground/40">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{step.text}</p>
            </div>
          ))}
        </div>
        <a
          href="mailto:atelierfactice@gmail.com"
          className="mt-12 inline-flex items-center gap-2 border border-primary-foreground px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"
        >
          Démarrer un projet sur mesure
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Realisations() {
  return (
    <section id="realisations" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">Portfolio</p>
        <h2 className="headline-xl mt-4 text-4xl md:text-6xl">Réalisations</h2>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {realisations.map((item) => (
            <div
              key={item.client}
              className="flex flex-wrap items-baseline justify-between gap-2 py-6"
            >
              <h3 className="font-display text-xl font-bold md:text-2xl">{item.client}</h3>
              <p className="text-sm text-muted-foreground">{item.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
        <p className="font-display text-lg font-extrabold uppercase">Atelier Factice</p>
        <div className="text-sm text-muted-foreground">
          <a href="mailto:atelierfactice@gmail.com" className="hover:text-foreground">
            atelierfactice@gmail.com
          </a>
          <span className="mx-3">·</span>
          <span>Bruxelles, Belgique</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Catalogue />
        <SurMesure />
        <Realisations />

      </main>
      <Footer />
    </div>
  );
}
