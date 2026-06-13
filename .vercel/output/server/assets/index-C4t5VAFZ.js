import { jsx, jsxs } from "react/jsx-runtime";
import { ShieldCheck, Star, Check, Clock, Sparkles, Heart, Flame, Gift } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { h as heroImg, b as bookImg } from "./router-BDP0qzXz.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    function getTimeUntilMidnight() {
      const now = /* @__PURE__ */ new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();
      return {
        hours: Math.floor(diff / (1e3 * 60 * 60)),
        minutes: Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60)),
        seconds: Math.floor(diff % (1e3 * 60) / 1e3)
      };
    }
    setTimeLeft(getTimeUntilMidnight());
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 mt-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-semibold opacity-90 text-center", children: "⏰ Offre valable encore peu de temps" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: [
      { value: pad(timeLeft.hours), label: "h" },
      { value: pad(timeLeft.minutes), label: "min" },
      { value: pad(timeLeft.seconds), label: "s" }
    ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-card/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[48px] text-center border border-white/20", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg sm:text-xl font-bold font-mono", children: item.value }),
        /* @__PURE__ */ jsx("span", { className: "block text-[10px] uppercase opacity-70", children: item.label })
      ] }),
      i < 2 && /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: ":" })
    ] }, i)) })
  ] });
}
const proof1 = "/assets/transformacao-1-GCfBZrM9.jpg";
const proof2 = "/assets/transformacao-2-BNDMIUqN.jpg";
const proof3 = "/assets/transformacao-3-SFAev_cH.jpg";
const capaLivro = "/assets/livre-100-CR6eQQuo.jpg";
const bonus1 = "/assets/bonus-1-CJZkdB6g.jpg";
const bonus2 = "/assets/bonus-2-BbSsfqhe.jpg";
const benefits = ["100 recettes matinales pratiques et délicieuses", "Ingrédients faciles à trouver", "Recettes pour ceux qui ont peu de temps", "Options nutritives pour bien commencer la journée", "Stratégies pour contrôler la faim et réduire les envies de sucre", "Combinaisons alimentaires qui favorisent une alimentation équilibrée"];
const transformations = [{
  icon: Sparkles,
  text: "Plus léger(e)"
}, {
  icon: Heart,
  text: "Plus de confiance"
}, {
  icon: Flame,
  text: "Plus d'énergie"
}, {
  icon: Check,
  text: "Des vêtements qui refittent"
}, {
  icon: Star,
  text: "Des compliments sur votre transformation"
}];
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full bg-primary text-primary-foreground text-center py-2 px-4", children: /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-bold uppercase tracking-wide", children: "OFFRE À 2€ UNIQUEMENT AUJOURD'HUI, PROFITEZ-EN !" }) }),
    /* @__PURE__ */ jsxs("header", { className: "relative overflow-hidden", style: {
      background: "var(--gradient-hero)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,oklch(0.85_0.15_130)_0,transparent_50%),radial-gradient(circle_at_80%_80%,oklch(0.85_0.15_70)_0,transparent_50%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]", children: [
            "Découvrez ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "100 recettes matinales" }),
            " pour perdre ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "5 k.g en 7 J0URS" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base sm:text-lg text-muted-foreground max-w-xl", children: "Imaginez vous réveiller chaque jour en sachant exactement quoi manger pour accélérer votre perte de poids." }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
            " Garantie de 7 jours"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Petit-déjeuner sain", width: 1280, height: 1280, fetchPriority: "high", decoding: "async", className: "rounded-3xl shadow-[var(--shadow-glow)] aspect-square object-cover" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)]", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-accent", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Plus de 1 000 lectrices satisfaites" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-6 py-20 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-lg leading-relaxed text-muted-foreground", children: [
      "C'est exactement pour cela que nous avons créé le livre ",
      /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "« 100 Recettes Matinales pour Maigrir »" }),
      ". Dans ce guide, vous trouverez des recettes simples, savoureuses et rapides à préparer, conçues pour aider à contrôler la faim, éviter les excès tout au long de la journée et rendre la perte de poids beaucoup plus facile."
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-12", children: "Que trouverez-vous dans ce livre ?" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: benefits.map((b) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-card rounded-2xl p-5 border border-border shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 w-8 h-8 rounded-full grid place-items-center bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Check, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: b })
      ] }, b)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx("img", { src: bookImg, alt: "Livre 100 Recettes Matinales", width: 1024, height: 1024, loading: "lazy", decoding: "async", className: "rounded-3xl shadow-[var(--shadow-soft)] aspect-square object-cover" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-primary font-medium mb-3", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }),
          " Commencez la journée du bon pied"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Pourquoi le petit-déjeuner est-il si important ?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Beaucoup de personnes commencent la journée en consommant des aliments qui augmentent rapidement la faim et les envies de sucre. Le résultat ? Plus de calories, plus de grignotage et plus de difficulté à maigrir." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Avec les recettes de ce livre, vous apprendrez à faire des choix plus intelligents dès le matin, créant une base solide pour atteindre vos objectifs." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Imaginez-vous dans quelques semaines..." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-12", children: "Tout commence par les premiers repas de la journée." }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-5 gap-4", children: transformations.map(({
        icon: Icon,
        text
      }) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl p-6 border border-border shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-8 w-8 text-primary mx-auto mb-3" }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: text })
      ] }, text)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-accent font-medium mb-3", children: [
          /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 fill-current" }),
          " Preuves Sociales"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Résultats réels de celles qui ont déjà commencé" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [proof1, proof2, proof3].map((p, i) => /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsx("img", { src: p, alt: `Transformation réelle #${i + 1}`, loading: "lazy", decoding: "async", width: 600, height: 800, className: "w-full h-full object-cover aspect-[3/4]" }) }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-accent font-medium mb-3", children: [
          /* @__PURE__ */ jsx(Gift, { className: "h-5 w-5" }),
          " Aujourd'hui seulement"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Bonus Exclusifs" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3", children: "En commandant aujourd'hui, vous recevez en plus ces 2 bonus 100 % gratuits" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: [{
        img: bonus1,
        title: "15 Erreurs qui T'Empêchent de Maigrir",
        old: "19 €",
        tag: "Bonus #1"
      }, {
        img: bonus2,
        title: "20 Exercices à la Maison qui Accélèrent la Perte de Poids",
        old: "12 €",
        tag: "Bonus #2"
      }].map((b) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-3xl p-6 border border-border shadow-[var(--shadow-soft)] flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-4", children: b.tag }),
        /* @__PURE__ */ jsx("img", { src: b.img, alt: b.title, loading: "lazy", className: "w-44 md:w-52 mb-6 drop-shadow-2xl" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4 max-w-xs", children: b.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg line-through text-muted-foreground", children: b.old }),
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-extrabold text-primary", children: "0 €" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "aujourd'hui" })
        ] })
      ] }, b.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-block bg-card border-2 border-primary rounded-2xl px-6 py-5 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-base font-semibold text-muted-foreground", children: [
          "TOTAL DES BONUS = ",
          /* @__PURE__ */ jsx("span", { className: "line-through", children: "31 €" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl sm:text-2xl font-extrabold text-primary mt-1", children: "→ TOUT GRATUIT AUJOURD'HUI !" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex w-20 h-20 rounded-full bg-primary/10 text-primary items-center justify-center mb-6", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-10 w-10" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Garantie de 7 jours" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground leading-relaxed", children: [
        "Votre achat est 100 % sécurisé. Si pour une raison quelconque vous n'êtes pas satisfaite du livre, vous avez ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "7 jours" }),
        " pour demander un remboursement intégral — sans questions, sans complications."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "comprar", className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("img", { src: capaLivro, alt: "Couverture du livre 100 Recettes Matinales", loading: "lazy", decoding: "async", width: 448, height: 448, className: "mx-auto mb-6 w-40 sm:w-48 md:w-56 drop-shadow-2xl" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base font-bold uppercase tracking-wider text-primary mb-3", children: "Choisissez un forfait" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-5xl font-bold mb-4", children: "Obtenez votre exemplaire maintenant" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-sm sm:text-base", children: "Accédez immédiatement aux 100 recettes matinales pour maigrir et découvrez comment de petits changements peuvent générer de grands résultats." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 md:gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-6 sm:p-8 bg-card border border-border shadow-[var(--shadow-soft)] flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold mb-2", children: "Forfait de base" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "L'accès au livre pour commencer dès aujourd'hui." }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-base line-through text-muted-foreground", children: "15 €" }),
            /* @__PURE__ */ jsx("span", { className: "text-4xl sm:text-5xl font-extrabold text-foreground", children: "2 €" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-6", children: "Paiement unique" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 mb-8 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary shrink-0" }),
              " 100 recettes matinales"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary shrink-0" }),
              " Accès immédiat au livre numérique"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary shrink-0" }),
              " Garantie de 7 jours"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "mt-auto w-full text-sm sm:text-base py-6 rounded-full font-bold whitespace-normal h-auto leading-tight", children: /* @__PURE__ */ jsx("a", { href: "https://pay.hotmart.com/L106198721V?off=yj0j34oc&checkoutMode=10", target: "_blank", rel: "noopener noreferrer", children: "Je choisis ce plan" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-xl bg-accent/15 border border-accent/40 px-4 py-3 text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-foreground", children: "⏳ Il est encore temps de prendre le meilleur forfait" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Découvrez ce que comprend le Forfait Premium →" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl p-6 sm:p-8 text-primary-foreground shadow-[var(--shadow-glow)] flex flex-col", style: {
          background: "var(--gradient-primary)"
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-full px-4 py-1 shadow", children: "⭐ Le plus populaire" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold mb-2", children: "Forfait Premium" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90 mb-6", children: "L'expérience complète pour des résultats durables." }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-base line-through opacity-60", children: "29 €" }),
            /* @__PURE__ */ jsx("span", { className: "text-4xl sm:text-5xl font-extrabold", children: "7,99 €" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-80", children: "Paiement unique" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold opacity-95 mb-6 mt-2", children: "👥 +2 341 personnes utilisent actuellement ce forfait" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 mb-8 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 shrink-0" }),
              " Accès à vie au livre"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 shrink-0" }),
              " Mises à jour gratuites à vie"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Gift, { className: "h-5 w-5 shrink-0" }),
              " ",
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Bonus #1" }),
                " — 15 Erreurs qui T'Empêchent de Maigrir ",
                /* @__PURE__ */ jsx("em", { children: "(exclusif Premium)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Gift, { className: "h-5 w-5 shrink-0" }),
              " ",
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Bonus #2" }),
                " — 20 Exercices à la Maison ",
                /* @__PURE__ */ jsx("em", { children: "(exclusif Premium)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 shrink-0" }),
              " Garantie de 15 jours"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 shrink-0" }),
              " Support VIP prioritaire"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "secondary", className: "mt-auto w-full text-sm sm:text-base py-6 rounded-full font-bold whitespace-normal h-auto leading-tight", children: /* @__PURE__ */ jsx("a", { href: "https://pay.hotmart.com/L106198721V?checkoutMode=10", target: "_blank", rel: "noopener noreferrer", children: "Je veux le plan Premium" }) }),
          /* @__PURE__ */ jsx(UrgencyTimer, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }),
        " Paiement 100% sécurisé"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground mt-8 italic", children: "Votre prochain petit-déjeuner peut être le premier pas vers le changement que vous recherchez." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/50 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-10", children: "Questions Fréquentes" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [{
        q: "Comment vais-je recevoir mon accès ?",
        a: "Nous vous enverrons l'accès par e-mail dès la confirmation de votre achat."
      }, {
        q: "Comment fonctionne la garantie ?",
        a: "Nous avons tellement confiance en notre méthode que nous offrons une garantie de 7 jours sur le Forfait de base et de 15 jours sur le Forfait Premium. Si vous n'obtenez pas de résultats ou si vous n'êtes pas satisfait du produit, vous pouvez demander un remboursement et récupérer immédiatement votre investissement."
      }, {
        q: "À quel âge ce livre est-il recommandé ?",
        a: "Il est recommandé pour tous les âges. Ce qui compte, ce sont vos objectifs : si vous souhaitez perdre du poids, vous êtes au bon endroit."
      }].map((item, i) => /* @__PURE__ */ jsxs("details", { className: "group bg-card border border-border rounded-2xl p-5 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex justify-between items-center cursor-pointer font-semibold text-base sm:text-lg list-none", children: [
          /* @__PURE__ */ jsx("span", { children: item.q }),
          /* @__PURE__ */ jsx("span", { className: "ml-4 text-primary transition-transform group-open:rotate-45 text-2xl leading-none", children: "+" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base", children: item.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxs("footer", { className: "border-t border-border py-8 text-center text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " 100 Recettes Matinales. Tous droits réservés."
    ] })
  ] });
}
export {
  Index as component
};
