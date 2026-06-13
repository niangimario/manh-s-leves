import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, ShieldCheck, Sparkles, Star, Heart, Flame, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UrgencyTimer } from "@/components/UrgencyTimer";
import heroImg from "@/assets/hero-breakfast.jpg";
import bookImg from "@/assets/breakfast-table.jpg";
import proof1 from "@/assets/transformacao-1.jpg";
import proof2 from "@/assets/transformacao-2.jpg";
import proof3 from "@/assets/transformacao-3.jpg";
import capaLivro from "@/assets/livre-100.jpg";
import bonus1 from "@/assets/bonus-1.jpg";
import bonus2 from "@/assets/bonus-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100 Recettes Matinales pour Maigrir | Livre Numérique" },
      { name: "description", content: "Découvrez 100 recettes matinales simples et délicieuses pour accélérer votre perte de poids. Seulement 4,99 € aujourd'hui." },
      { property: "og:title", content: "100 Recettes Matinales pour Maigrir" },
      { property: "og:description", content: "100 recettes pratiques pour transformer votre petit-déjeuner et votre corps." },
      { property: "og:image", content: bookImg },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
  }),
  component: Index,
});

const benefits = [
  "100 recettes matinales pratiques et délicieuses",
  "Ingrédients faciles à trouver",
  "Recettes pour ceux qui ont peu de temps",
  "Options nutritives pour bien commencer la journée",
  "Stratégies pour contrôler la faim et réduire les envies de sucre",
  "Combinaisons alimentaires qui favorisent une alimentation équilibrée",
];

const transformations = [
  { icon: Sparkles, text: "Plus léger(e)" },
  { icon: Heart, text: "Plus de confiance" },
  { icon: Flame, text: "Plus d'énergie" },
  { icon: Check, text: "Des vêtements qui refittent" },
  { icon: Star, text: "Des compliments sur votre transformation" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top urgency banner */}
      <div className="w-full bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wide">
          OFFRE À 2€ UNIQUEMENT AUJOURD'HUI, PROFITEZ-EN !
        </p>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,oklch(0.85_0.15_130)_0,transparent_50%),radial-gradient(circle_at_80%_80%,oklch(0.85_0.15_70)_0,transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Découvrez <span className="text-primary">100 recettes matinales</span> pour perdre <span className="text-primary">5 k.g en 7 J0URS</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              Imaginez vous réveiller chaque jour en sachant exactement quoi manger pour accélérer votre perte de poids.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary" /> Garantie de 7 jours
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="Petit-déjeuner sain" width={1280} height={1280}
              fetchPriority="high" decoding="async"
              className="rounded-3xl shadow-[var(--shadow-glow)] aspect-square object-cover" />
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Plus de 1 000 lectrices satisfaites</p>
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-lg leading-relaxed text-muted-foreground">
          C'est exactement pour cela que nous avons créé le livre <strong className="text-foreground">« 100 Recettes Matinales pour Maigrir »</strong>.
          Dans ce guide, vous trouverez des recettes simples, savoureuses et rapides à préparer, conçues pour aider à contrôler la faim,
          éviter les excès tout au long de la journée et rendre la perte de poids beaucoup plus facile.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Que trouverez-vous dans ce livre ?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-card rounded-2xl p-5 border border-border shadow-[var(--shadow-soft)]">
                <div className="shrink-0 w-8 h-8 rounded-full grid place-items-center bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <p className="font-medium">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why breakfast */}
      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img src={bookImg} alt="Livre 100 Recettes Matinales" width={1024} height={1024} loading="lazy"
          decoding="async"
          className="rounded-3xl shadow-[var(--shadow-soft)] aspect-square object-cover" />
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-medium mb-3">
            <Clock className="h-5 w-5" /> Commencez la journée du bon pied
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi le petit-déjeuner est-il si important ?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Beaucoup de personnes commencent la journée en consommant des aliments qui augmentent rapidement la faim et les envies de sucre.
            Le résultat ? Plus de calories, plus de grignotage et plus de difficulté à maigrir.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Avec les recettes de ce livre, vous apprendrez à faire des choix plus intelligents dès le matin,
            créant une base solide pour atteindre vos objectifs.
          </p>
        </div>
      </section>

      {/* Imagine */}
      <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Imaginez-vous dans quelques semaines...</h2>
          <p className="text-muted-foreground mb-12">Tout commence par les premiers repas de la journée.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {transformations.map(({ icon: Icon, text }) => (
              <div key={text} className="bg-card rounded-2xl p-6 border border-border shadow-[var(--shadow-soft)]">
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-accent font-medium mb-3">
            <Star className="h-5 w-5 fill-current" /> Preuves Sociales
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Résultats réels de celles qui ont déjà commencé</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[proof1, proof2, proof3].map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-soft)]">
              <img src={p} alt={`Transformation réelle #${i + 1}`} loading="lazy"
                decoding="async" width={600} height={800}
                className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      {/* Bonus */}
      <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-accent font-medium mb-3">
              <Gift className="h-5 w-5" /> Aujourd'hui seulement
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Bonus Exclusifs</h2>
            <p className="text-muted-foreground mt-3">En commandant aujourd'hui, vous recevez en plus ces 2 bonus 100 % gratuits</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: bonus1, title: "15 Erreurs qui T'Empêchent de Maigrir", old: "19 €", tag: "Bonus #1" },
              { img: bonus2, title: "20 Exercices à la Maison qui Accélèrent la Perte de Poids", old: "12 €", tag: "Bonus #2" },
            ].map((b) => (
              <div key={b.title} className="bg-card rounded-3xl p-6 border border-border shadow-[var(--shadow-soft)] flex flex-col items-center text-center">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">{b.tag}</span>
                <img src={b.img} alt={b.title} loading="lazy" className="w-44 md:w-52 mb-6 drop-shadow-2xl" />
                <h3 className="text-xl font-bold mb-4 max-w-xs">{b.title}</h3>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-lg line-through text-muted-foreground">{b.old}</span>
                  <span className="text-3xl font-extrabold text-primary">0 €</span>
                  <span className="text-sm text-muted-foreground">aujourd'hui</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-block bg-card border-2 border-primary rounded-2xl px-6 py-5 shadow-[var(--shadow-soft)]">
              <p className="text-sm sm:text-base font-semibold text-muted-foreground">
                TOTAL DES BONUS = <span className="line-through">31 €</span>
              </p>
              <p className="text-xl sm:text-2xl font-extrabold text-primary mt-1">
                → TOUT GRATUIT AUJOURD'HUI !
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex w-20 h-20 rounded-full bg-primary/10 text-primary items-center justify-center mb-6">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Garantie de 7 jours</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Votre achat est 100 % sécurisé. Si pour une raison quelconque vous n'êtes pas satisfaite du livre,
            vous avez <strong className="text-foreground">7 jours</strong> pour demander un remboursement intégral —
            sans questions, sans complications.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="comprar" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <img src={capaLivro} alt="Couverture du livre 100 Recettes Matinales"
              loading="lazy" decoding="async" width={448} height={448}
              className="mx-auto mb-6 w-40 sm:w-48 md:w-56 drop-shadow-2xl" />
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-primary mb-3">Choisissez un forfait</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Obtenez votre exemplaire maintenant</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Accédez immédiatement aux 100 recettes matinales pour maigrir et découvrez comment de petits changements peuvent générer de grands résultats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Plano Básico */}
            <div className="rounded-3xl p-6 sm:p-8 bg-card border border-border shadow-[var(--shadow-soft)] flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Forfait de base</h3>
              <p className="text-sm text-muted-foreground mb-6">L'accès au livre pour commencer dès aujourd'hui.</p>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-base line-through text-muted-foreground">15 €</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-foreground">2 €</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">Paiement unique</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> 100 recettes matinales</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Accès immédiat au livre numérique</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Garantie de 7 jours</li>
              </ul>
              <Button asChild size="lg" variant="outline" className="mt-auto w-full text-sm sm:text-base py-6 rounded-full font-bold whitespace-normal h-auto leading-tight">
                <a href="https://pay.hotmart.com/L106198721V?off=yj0j34oc&checkoutMode=10" target="_blank" rel="noopener noreferrer">Je choisis ce plan</a>
              </Button>
              <div className="mt-4 rounded-xl bg-accent/15 border border-accent/40 px-4 py-3 text-center">
                <p className="text-sm font-bold text-foreground">
                  ⏳ Il est encore temps de prendre le meilleur forfait
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Découvrez ce que comprend le Forfait Premium →
                </p>
              </div>
            </div>

            {/* Plano Premium */}
            <div className="relative rounded-3xl p-6 sm:p-8 text-primary-foreground shadow-[var(--shadow-glow)] flex flex-col"
              style={{ background: "var(--gradient-primary)" }}>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-full px-4 py-1 shadow">
                ⭐ Le plus populaire
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Forfait Premium</h3>
              <p className="text-sm opacity-90 mb-6">L'expérience complète pour des résultats durables.</p>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-base line-through opacity-60">29 €</span>
                <span className="text-4xl sm:text-5xl font-extrabold">7,99 €</span>
              </div>
              <p className="text-xs opacity-80">Paiement unique</p>
              <p className="text-xs font-semibold opacity-95 mb-6 mt-2">
                👥 +2 341 personnes utilisent actuellement ce forfait
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2"><Check className="h-5 w-5 shrink-0" /> Accès à vie au livre</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 shrink-0" /> Mises à jour gratuites à vie</li>
                <li className="flex items-start gap-2"><Gift className="h-5 w-5 shrink-0" /> <span><strong>Bonus #1</strong> — 15 Erreurs qui T'Empêchent de Maigrir <em>(exclusif Premium)</em></span></li>
                <li className="flex items-start gap-2"><Gift className="h-5 w-5 shrink-0" /> <span><strong>Bonus #2</strong> — 20 Exercices à la Maison <em>(exclusif Premium)</em></span></li>
                <li className="flex items-start gap-2"><ShieldCheck className="h-5 w-5 shrink-0" /> Garantie de 15 jours</li>
                <li className="flex items-start gap-2"><Sparkles className="h-5 w-5 shrink-0" /> Support VIP prioritaire</li>
              </ul>
              <Button asChild size="lg" variant="secondary" className="mt-auto w-full text-sm sm:text-base py-6 rounded-full font-bold whitespace-normal h-auto leading-tight">
                <a href="https://pay.hotmart.com/L106198721V?checkoutMode=10" target="_blank" rel="noopener noreferrer">Je veux le plan Premium</a>
              </Button>
              <UrgencyTimer />
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4" /> Paiement 100% sécurisé
          </p>
          <p className="text-center text-muted-foreground mt-8 italic">
            Votre prochain petit-déjeuner peut être le premier pas vers le changement que vous recherchez.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Questions Fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Comment vais-je recevoir mon accès ?",
                a: "Nous vous enverrons l'accès par e-mail dès la confirmation de votre achat.",
              },
              {
                q: "Comment fonctionne la garantie ?",
                a: "Nous avons tellement confiance en notre méthode que nous offrons une garantie de 7 jours sur le Forfait de base et de 15 jours sur le Forfait Premium. Si vous n'obtenez pas de résultats ou si vous n'êtes pas satisfait du produit, vous pouvez demander un remboursement et récupérer immédiatement votre investissement.",
              },
              {
                q: "À quel âge ce livre est-il recommandé ?",
                a: "Il est recommandé pour tous les âges. Ce qui compte, ce sont vos objectifs : si vous souhaitez perdre du poids, vous êtes au bon endroit.",
              },
            ].map((item, i) => (
              <details key={i} className="group bg-card border border-border rounded-2xl p-5 shadow-[var(--shadow-soft)]">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-base sm:text-lg list-none">
                  <span>{item.q}</span>
                  <span className="ml-4 text-primary transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} 100 Recettes Matinales. Tous droits réservés.
      </footer>
    </div>
  );
}
