import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Para evitar erro 404 na Vercel, este arquivo deve estar em:
// app/page.jsx (Next.js) ou pages/index.jsx

export default function HomePage() {
  const artistas = [
    {
      nome: "Matheus & Kauan",
      imagem: "https://images.unsplash.com/photo-1501612780327-45045538702b",
    },
    {
      nome: "Zé Neto & Cristiano",
      imagem: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    },
    {
      nome: "Henrique & Juliano",
      imagem: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    },
    {
      nome: "Jorge & Mateus",
      imagem: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    },
    {
      nome: "Luan Santana",
      imagem: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    },
    {
      nome: "Gusttavo Lima",
      imagem: "https://images.unsplash.com/photo-1508973379184-7517410fb0fb",
    },
  ];

  const programacao = [
    "20:00 – Abertura + Matheus & Kauan",
    "21:00 – Zé Neto & Cristiano",
    "22:00 – Henrique & Juliano",
    "23:00 – Jorge & Mateus",
    "00:00 – Luan Santana",
    "01:00 – Encerramento com Gusttavo Lima",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0d05] to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-orange-500/20 bg-black/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-extrabold tracking-wide text-orange-400">
            Sunset Vibes Fest
          </h1>

          <div className="flex gap-6 text-sm font-semibold uppercase tracking-wide md:text-base">
            <a href="#inicio" className="hover:text-orange-400">Início</a>
            <a href="#sobre" className="hover:text-orange-400">Sobre</a>
            <a href="#programacao" className="hover:text-orange-400">Programação</a>
            <a href="#local" className="hover:text-orange-400">Local</a>
            <a href="#contato" className="hover:text-orange-400">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative px-6 py-24 text-center"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-orange-300"
          >
            Festival Sertanejo Premium
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-5xl font-extrabold uppercase md:text-7xl"
          >
            Sunset <span className="text-orange-400">Vibes</span> Fest
          </motion.h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/80 md:text-xl">
            As maiores vozes do sertanejo em uma noite inesquecível no
            Villa Country – São Paulo.
          </p>

          <div className="mb-10 rounded-2xl border border-orange-500/30 bg-black/50 p-6 shadow-2xl">
            <p className="text-2xl font-bold uppercase text-orange-400">
              Algo muito grande está chegando...
            </p>
            <p className="mt-2 text-lg">Começa às 20h</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="rounded-2xl px-8 py-6 text-base font-bold uppercase">
              Garantir Ingresso
            </Button>
            <Button variant="outline" className="rounded-2xl px-8 py-6 text-base font-bold uppercase text-black">
              Ver Line-up
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <Card className="rounded-3xl border-orange-500/20 bg-black/50 text-white shadow-2xl">
            <CardContent className="p-8">
              <h3 className="mb-4 text-3xl font-bold uppercase text-orange-400">
                Sobre o Evento
              </h3>
              <p className="leading-relaxed text-white/80">
                O Sunset Vibes Fest reúne os maiores nomes da música sertaneja
                em uma experiência completa de entretenimento, emoção e conexão.
                Um evento criado para proporcionar uma noite premium, com shows
                inesquecíveis e estrutura de alto nível.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-orange-500/20 bg-black/50 text-white shadow-2xl">
            <CardContent className="p-8">
              <h3 className="mb-4 text-3xl font-bold uppercase text-orange-400">
                Line-up Oficial
              </h3>
              <ul className="space-y-3 text-lg text-white/80">
                {artistas.map((artista) => (
                  <div
                    key={artista.nome}
                    className="flex items-center gap-4 rounded-2xl border border-orange-500/10 bg-white/5 p-3"
                  >
                    <img
                      src={artista.imagem}
                      alt={artista.nome}
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <span className="text-base font-medium">★ {artista.nome}</span>
                  </div>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programação */}
      <section id="programacao" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-10 text-center text-4xl font-bold uppercase text-orange-400">
            Programação Oficial
          </h3>

          <div className="grid gap-5">
            {programacao.map((item) => (
              <Card
                key={item}
                className="rounded-2xl border-orange-500/20 bg-black/50 text-white shadow-lg"
              >
                <CardContent className="p-6 text-lg font-semibold uppercase tracking-wide">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local */}
      <section id="local" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-center text-4xl font-bold uppercase text-orange-400">
            Local do Evento
          </h3>

          <p className="mb-8 text-center text-lg text-white/80">
            Villa Country – São Paulo/SP
          </p>

          <div className="overflow-hidden rounded-3xl border border-orange-500/20 shadow-2xl">
            <iframe
              title="Mapa Villa Country"
              src="https://www.google.com/maps?q=Villa+Country+São+Paulo&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-orange-500/20 bg-black/50 p-10 text-center shadow-2xl">
          <h3 className="mb-6 text-4xl font-bold uppercase text-orange-400">
            Contato
          </h3>
          <p className="mb-2 text-lg">contato@sunsetvibesfest.com</p>
          <p className="mb-2 text-lg">(11) 99999-9999</p>
          <p className="text-lg">@sunsetvibesfest</p>
        </div>
      </section>

      <footer className="border-t border-orange-500/20 px-6 py-8 text-center text-sm text-white/60">
        © 2026 Sunset Vibes Fest — Todos os direitos reservados.
      </footer>
    </div>
  );
}
