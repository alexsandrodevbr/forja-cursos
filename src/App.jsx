import { useState, useEffect } from "react";
import logo from "./assets/logo lobo.jpeg";
import apresentacaoVideo from "./assets/videoapresentacao/apresentacao.mp4";

import print1 from "./assets/prints/print1.jpeg";
import print2 from "./assets/prints/print2.jpeg";
import print3 from "./assets/prints/print3.jpeg";
import print4 from "./assets/prints/print4.jpeg";
import print5 from "./assets/prints/print5.jpeg";
import print6 from "./assets/prints/print6.jpeg";
import print7 from "./assets/prints/print7.jpeg";

import marketingVideo from "./assets/video/marketing.mp4";
import iaVideo from "./assets/video/ia.mp4";
import edicaoVideo from "./assets/video/edicao.mp4";
import programacaoVideo from "./assets/video/programacao.mp4";

export default function App() {

  const [videoAberto, setVideoAberto] = useState(false);
  const [videoAtual, setVideoAtual] = useState("");

  const [printAtual, setPrintAtual] = useState(0);

  const prints = [
    print1,
    print2,
    print3,
    print4,
    print5,
    print6,
    print7
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPrintAtual((prev) =>
        prev === prints.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* FUNDO GLOW */}

      <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-lime-400 opacity-10 blur-[70px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-green-500 opacity-10 blur-[70px] rounded-full"></div>


      {/* HEADER */}

      <header className="flex items-center justify-center p-6 border-b border-zinc-800">

        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="Logo"
            className="wolf-logo w-14 h-14 rounded-full shadow-[0_0_20px_#84cc16] hover:scale-110 transition-all duration-500"
          />

          <h1 className="text-3xl font-extrabold text-lime-400 hover:scale-110 transition-all duration-500 animate-pulse drop-shadow-[0_0_15px_#84cc16]">

            FORJA CURSOS

          </h1>

        </div>

      </header>



      {/* HERO SECTION */}

      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold max-w-5xl leading-tight">

          TENHA ACESSO

          <span className="text-lime-400"> +2500 Cursos </span>

          POR APENAS
          <span className="text-lime-400"> R$ 19,90 </span>
        </h2>

        <p className="text-zinc-400 text-base md:text-xl mt-8 max-w-2xl">

          Marketing Digital, Inteligência Artificial,
          Edição de Vídeos, Programação,
          Design e muito mais.

        </p>
        <a href="#checkout">

          <button
            className="
      bg-lime-400
      hover:bg-lime-300
      text-black
      font-black
      text-xl
      px-10
      py-5
      rounded-2xl
      transition-all
      duration-300
      hover:scale-110
      active:scale-95
      animate-pulse
      shadow-[0_0_40px_rgba(132,204,22,0.65)]
    "
          >

            QUERO MEU ACESSO POR R$ 19,90

          </button>

        </a>
      </section>
      {/* VIDEO PRINCIPAL */}

      <div className="mt-20 w-full flex flex-col items-center px-4">

        <div className="relative w-full max-w-4xl rounded-[28px] overflow-hidden border border-lime-400/30 bg-zinc-900 shadow-[0_0_50px_rgba(132,204,22,0.12)]">

          <video
            src={apresentacaoVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="none"
            className="w-full rounded-[28px]"
          />

        </div>

        {/* BARRA PREMIUM */}

        < div className="w-full max-w-3xl mt-12">

          <div className="bg-[#080808] border border-lime-400/20 rounded-[32px] p-8 shadow-[0_0_40px_rgba(132,204,22,0.08)]">

            <p className="text-lime-400 font-extrabold tracking-[6px] text-[11px] md:text-sm uppercase text-center drop-shadow-[0_0_10px_#84cc16]">

              ⚡ Vagas promocionais liberadas

            </p>

            {/* FUNDO DA BARRA */}

            <div className="w-full bg-zinc-900 rounded-full h-4 mt-6 overflow-hidden border border-zinc-800">

              {/* BARRA VERMELHA */}

              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 shadow-[0_0_25px_rgba(255,0,0,0.7)] animate-pulse"></div>

            </div>

            <p className="text-zinc-300 mt-5 text-center text-sm md:text-lg font-semibold leading-relaxed">

              Restam apenas

              <span className="text-red-500 font-extrabold text-lg md:text-2xl drop-shadow-[0_0_10px_red] animate-pulse">

                {" "}25 acessos{" "}

              </span>
              

              nesta condição especial

            </p>

          </div>

        </div>
      </div>

      {/* O QUE TEM DENTRO DA Biblioteca */}

      <section className="w-full px-6 py-28 bg-gradient-to-b from-black via-zinc-950 to-black">

        <div className="max-w-7xl mx-auto">

          {/* TOPO */}

          <div className="mb-20 text-center">

            <div className="inline-flex items-center px-6 py-3 rounded-full border border-lime-400/20 bg-zinc-900/50 shadow-[0_0_25px_rgba(132,204,22,0.08)]">

              <span className="text-lime-400 text-xs md:text-sm font-extrabold tracking-[5px] uppercase">

                ⚡ Tudo que você recebe

              </span>

            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-10 leading-tight">

              O Que Existe

              <br />

              <span className="text-lime-400 drop-shadow-[0_0_18px_#84cc16]">

                Dentro da Biblioteca FORJA CURSOS

              </span>

            </h2>

            <p className="text-zinc-400 text-lg mt-8 max-w-4xl mx-auto leading-relaxed">

              Uma biblioteca completa criada para acelerar seus resultados
              no digital com conteúdos premium, ferramentas profissionais
              e bônus exclusivos.

            </p>

          </div>

          {/* CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD */}

            <div className="bg-zinc-900/50 border border-lime-400/10 rounded-[32px] p-8 hover:scale-[1.03] hover:border-lime-400/40 transition-all duration-300 shadow-[0_0_40px_rgba(132,204,22,0.06)]">

              <div className="text-5xl mb-6">🎥</div>

              <h3 className="text-4xl font-extrabold text-lime-400">

                2500+

              </h3>

              <h4 className="text-2xl font-bold text-white mt-4">

                Cursos Premium

              </h4>

              <p className="text-zinc-400 mt-5 leading-relaxed">

                Marketing Digital, Inteligência Artificial,
                Programação, Design, Edição de Vídeo,
                Social Media, Tráfego Pago e muito mais.

              </p>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900/50 border border-lime-400/10 rounded-[32px] p-8 hover:scale-[1.03] hover:border-lime-400/40 transition-all duration-300 shadow-[0_0_40px_rgba(132,204,22,0.06)]">

              <div className="text-5xl mb-6">📚</div>

              <h3 className="text-4xl font-extrabold text-lime-400">

                300+

              </h3>

              <h4 className="text-2xl font-bold text-white mt-4">

                eBooks Exclusivos

              </h4>

              <p className="text-zinc-400 mt-5 leading-relaxed">

                Materiais completos para estudo,
                estratégias de vendas, mentalidade,
                marketing e crescimento financeiro.

              </p>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900/50 border border-lime-400/10 rounded-[32px] p-8 hover:scale-[1.03] hover:border-lime-400/40 transition-all duration-300 shadow-[0_0_40px_rgba(132,204,22,0.06)]">

              <div className="text-5xl mb-6">🤖</div>

              <h3 className="text-4xl font-extrabold text-lime-400">

                IA Premium

              </h3>

              <h4 className="text-2xl font-bold text-white mt-4">

                Inteligência Artificial

              </h4>

              <p className="text-zinc-400 mt-5 leading-relaxed">

                Ferramentas, prompts e conteúdos
                sobre IA para produtividade,
                automação e criação de conteúdo.

              </p>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900/50 border border-lime-400/10 rounded-[32px] p-8 hover:scale-[1.03] hover:border-lime-400/40 transition-all duration-300 shadow-[0_0_40px_rgba(132,204,22,0.06)]">

              <div className="text-5xl mb-6">💻</div>

              <h3 className="text-4xl font-extrabold text-lime-400">

                Ferramentas

              </h3>

              <h4 className="text-2xl font-bold text-white mt-4">

                Recursos Profissionais

              </h4>

              <p className="text-zinc-400 mt-5 leading-relaxed">

                Plataformas, apps, templates,
                softwares e recursos utilizados
                pelos maiores profissionais.

              </p>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900/50 border border-lime-400/10 rounded-[32px] p-8 hover:scale-[1.03] hover:border-lime-400/40 transition-all duration-300 shadow-[0_0_40px_rgba(132,204,22,0.06)]">

              <div className="text-5xl mb-6">🎁</div>

              <h3 className="text-4xl font-extrabold text-lime-400">

                Bônus VIP

              </h3>

              <h4 className="text-2xl font-bold text-white mt-4">

                Conteúdos Extras

              </h4>

              <p className="text-zinc-400 mt-5 leading-relaxed">

                Packs exclusivos, estratégias secretas,
                atualizações constantes e conteúdos
                adicionados frequentemente.

              </p>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900/50 border border-lime-400/10 rounded-[32px] p-8 hover:scale-[1.03] hover:border-lime-400/40 transition-all duration-300 shadow-[0_0_40px_rgba(132,204,22,0.06)]">

              <div className="text-5xl mb-6">♾️</div>

              <h3 className="text-4xl font-extrabold text-lime-400">

                Vitalício

              </h3>

              <h4 className="text-2xl font-bold text-white mt-4">

                Acesso Completo

              </h4>

              <p className="text-zinc-400 mt-5 leading-relaxed">

                Pagamento único com acesso vitalício
                a toda plataforma sem mensalidades
                e sem limites.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ÁREA DOS CURSOS */}

      <section className="px-8 pb-20">

        <h3 className="text-4xl font-extrabold mb-10 text-lime-400">

          Uma Pequena Amostra do Que Você Vai Receber

        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD */}

          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 backdrop-blur-md bg-black/60 sticky top-0 z-50 hover:border-lime-400 hover:scale-[1.03] hover:-translate-y-2 transition duration-300 shadow-[0_0_20px_rgba(132,204,22,0.2)]">

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <h4 className="text-2xl font-bold mb-4">

                Marketing Digital

              </h4>


            </div>

          </div>

          {/* CARD */}

          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400 hover:scale-[1.03] hover:-translate-y-2 transition duration-300 shadow-[0_0_20px_rgba(132,204,22,0.2)]">

            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <h4 className="text-2xl font-bold mb-4">

                Inteligência Artificial

              </h4>



            </div>

          </div>

          {/* CARD */}

          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400 hover:scale-[1.03] hover:-translate-y-2 transition duration-300 shadow-[0_0_20px_rgba(132,204,22,0.2)]">

            <img
              src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop"
            />

            <div className="p-6">

              <h4 className="text-2xl font-bold mb-4">

                Edição de Vídeo

              </h4>



            </div>

          </div>

          {/* CARD */}

          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400 hover:scale-[1.03] hover:-translate-y-2 transition duration-300 shadow-[0_0_20px_rgba(132,204,22,0.2)]">

            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <h4 className="text-2xl font-bold mb-4">

                Programação

              </h4>



            </div>

          </div>

        </div>

      </section>

     {/* OFERTA FINAL PREMIUM */}

<section className="w-full py-20 px-4 bg-black">

  <div className="max-w-5xl mx-auto rounded-[32px] border border-lime-400/20 bg-[#0a0a0a] p-10 md:p-16 text-center shadow-[0_0_30px_rgba(132,204,22,0.08)]">

    <p className="text-red-500 font-bold text-lg animate-pulse">
      ⚠️ Oferta promocional por tempo limitado
    </p>

    <h2 className="text-white font-black leading-tight text-4xl md:text-7xl mt-4">
      Tenha Acesso à
      <span className="text-lime-400 drop-shadow-[0_0_15px_#84cc16]">
        {" "}Biblioteca Completa
      </span>
    </h2>

    <p className="text-zinc-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
      Mais de 2500 cursos completos para você aprender,
      evoluir e começar a ganhar dinheiro online.
    </p>

    <div className="mt-8">
      <p className="text-zinc-500 line-through text-2xl">
        De R$ 4.780,00
      </p>

      <h1 className="text-lime-400 font-black text-6xl md:text-8xl drop-shadow-[0_0_25px_rgba(132,204,22,0.4)]">
        R$ 19,90
      </h1>

      <p className="text-zinc-400 mt-2">
        pagamento único • acesso vitalício
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

      <div className="bg-black border border-lime-400/20 rounded-2xl py-5 px-4">
        <p className="text-lime-400 font-bold">
          ✅ Acesso imediato
        </p>
      </div>

      <div className="bg-black border border-lime-400/20 rounded-2xl py-5 px-4">
        <p className="text-lime-400 font-bold">
          🔄 Atualizações Frequentes
        </p>
      </div>

      <div className="bg-black border border-lime-400/20 rounded-2xl py-5 px-4">
        <p className="text-lime-400 font-bold">
          🚀 Cursos Premium
        </p>
      </div>

    </div>

    <a
      id="checkout"
      href="https://pay.cakto.com.br/hj6rqht_900869"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-12"
    >

      <button
        className="
        bg-gradient-to-r
        from-lime-400
        to-green-500
        hover:scale-105
        text-black
        font-black
        text-lg
        md:text-2xl
        px-10
        md:px-16
        py-5
        rounded-full
        transition-all
        duration-300
        shadow-[0_0_35px_rgba(132,204,22,0.5)]
        "
      >
        🚀 TENHA ACESSO AGORA POR R$ 19,90
      </button>

    </a>

  </div>

</section>

      {/* ÁREA PREMIUM */}

      <section className="px-8 py-20">

        <div className="bg-zinc-900 border border-lime-400 rounded-[40px] p-10 shadow-[0_0_40px_rgba(132,204,22,0.2)]">

          <h2 className="text-5xl font-extrabold text-center mb-16">

            Por Que Escolher a

            <span className="text-lime-400"> FORJA CURSOS</span>?

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* ITEM */}

            <div className="bg-black rounded-3xl p-8 border border-zinc-800 hover:border-lime-400 transition">

              <h3 className="text-2xl font-bold text-lime-400 mb-4">

                🚀 Acesso Imediato

              </h3>

              <p className="text-zinc-400">

                Entrou, acessou. Sem espera e sem complicação.

              </p>

            </div>

            {/* ITEM */}

            <div className="bg-black rounded-3xl p-8 border border-zinc-800 hover:border-lime-400 transition">

              <h3 className="text-2xl font-bold text-lime-400 mb-4">

                ♾️ Atualizações

              </h3>

              <p className="text-zinc-400">

                Novos cursos adicionados frequentemente.

              </p>

            </div>

            {/* ITEM */}

            <div className="bg-black rounded-3xl p-8 border border-zinc-800 hover:border-lime-400 transition">

              <h3 className="text-2xl font-bold text-lime-400 mb-4">

                💎 Conteúdo Premium

              </h3>

              <p className="text-zinc-400">

                Cursos completos do básico ao avançado.

              </p>

            </div>

            {/* ITEM */}

            <div className="bg-black rounded-3xl p-8 border border-zinc-800 hover:border-lime-400 transition">

              <h3 className="text-2xl font-bold text-lime-400 mb-4">

                🔥 Suporte Exclusivo

              </h3>

              <p className="text-zinc-400">

                Tire dúvidas e evolua mais rápido.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* BOTÃO WHATSAPP FLUTUANTE */}

      <a
        href="https://wa.me/+553182951288"
        target="_blank"
        className="fixed bottom-6 right-6 bg-lime-400 text-black px-6 py-4 rounded-full font-bold shadow-[0_0_30px_#84cc16] hover:scale-110 transition z-50"
      >

        WhatsApp

      </a>
    {/* DEPOIMENTOS */}

<section className="px-8 py-24">

  <div className="text-center mb-12">

  <p className="text-lime-400 font-bold tracking-[5px] uppercase">
    ⭐ RESULTADOS REAIS
  </p>

  <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-4">
    Mais de 500 Alunos
  </h2>

  <h2 className="text-5xl md:text-7xl font-extrabold text-lime-400 drop-shadow-[0_0_25px_#84cc16]">
    Já Entraram Para
    <br />
    a FORJA CURSOS
  </h2>

  <p className="text-zinc-400 mt-6 text-lg max-w-3xl mx-auto">
    Veja alguns feedbacks de quem já garantiu o acesso e começou a aproveitar os conteúdos da biblioteca.
  </p>

</div>

<div className="relative max-w-lg mx-auto">

   <div className="bg-zinc-900 border-2 border-lime-400 rounded-[30px] overflow-hidden shadow-[0_0_40px_rgba(132,204,22,0.3)]">

    <img
  src={prints[printAtual]}
  alt="Depoimento"
  className="w-full max-h-[400px] object-contain transition-all duration-500"
/>
    </div>

   <button
  onClick={() =>
    setPrintAtual(
      printAtual === 0
        ? prints.length - 1
        : printAtual - 1
    )
  }
  className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-lime-400 text-black w-14 h-14 rounded-full text-2xl font-bold shadow-[0_0_25px_#84cc16]"
>
  ←
</button>

   <button
  onClick={() =>
    setPrintAtual(
      printAtual === prints.length - 1
        ? 0
        : printAtual + 1
    )
  }
  className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-lime-400 text-black w-14 h-14 rounded-full text-2xl font-bold shadow-[0_0_25px_#84cc16]"
>
  →
</button>
  </div>

  <div className="flex justify-center gap-3 mt-8">

    {prints.map((_, index) => (
      <button
        key={index}
        onClick={() => setPrintAtual(index)}
        className={`w-3 h-3 rounded-full ${
          printAtual === index
            ? "bg-lime-400"
            : "bg-zinc-700"
        }`}
      />
    ))}

  </div>

</section>
      {/* FAQ */}

      <section className="px-6 pb-24">

        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20">
          Perguntas Frequentes
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-lime-400">
              O acesso é vitalício?
            </h3>

            <p className="text-zinc-400 mt-4">
              Sim. Você terá acesso completo sem mensalidade.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-lime-400">
              Como recebo acesso?
            </h3>

            <p className="text-zinc-400 mt-4">
              Após o pagamento você recebe imediatamente.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-lime-400">
              Preciso aparecer?
            </h3>

            <p className="text-zinc-400 mt-4">
              Não. Muitos métodos funcionam sem aparecer.
            </p>

          </div>

        </div>

      </section>

{/* CTA FINAL */}
<section className="py-20 px-6 text-center bg-black">

  <div className="max-w-4xl mx-auto">

    <p className="text-red-500 font-bold text-lg md:text-xl animate-pulse">
      ⚠️ Oferta promocional por tempo limitado
    </p>

    <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-4">
      Garanta Seu Acesso Hoje
    </h2>

    <h3 className="text-5xl md:text-7xl font-extrabold text-lime-400 mt-6 drop-shadow-[0_0_20px_#84cc16]">
      R$ 19,90
    </h3>

    <p className="text-zinc-400 mt-6 text-lg">
      Mais de 2500 cursos, eBooks, ferramentas, IA Premium e acesso vitalício.
    </p>

    <a
      href="https://pay.cakto.com.br/hj6rqht_900869"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xl px-12 py-5 rounded-full shadow-[0_0_35px_#84cc16] transition-all duration-300 hover:scale-105"
    >
      🚀 QUERO ENTRAR AGORA
    </a>

  </div>

</section>

      {/* FOOTER PREMIUM */}

     <footer className="relative mt-0 bg-gradient-to-b ...">

        {/* GLOW */}

        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-lime-400/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

          {/* LOGO + NOME */}

          <div className="flex flex-col items-center justify-center text-center">

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 rounded-full shadow-[0_0_25px_#84cc16]"
              />

              <h2 className="text-3xl md:text-4xl font-extrabold text-lime-400 drop-shadow-[0_0_15px_#84cc16]">

                FORJA CURSOS

              </h2>

            </div>

            <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed text-sm md:text-base">

              A biblioteca definitiva para quem deseja evoluir,
              aprender habilidades digitais e transformar conhecimento
              em resultados reais.

            </p>

          </div>

          {/* LINKS */}

          <div className="w-full flex justify-center mt-10">

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-zinc-400 font-medium text-sm md:text-[17px] tracking-wide px-4 text-center">

              <a
                href="#"
                className="hover:text-lime-400 transition whitespace-nowrap"
              >
                Política
              </a>

              <a
                href="#"
                className="hover:text-lime-400 transition whitespace-nowrap"
              >
                Termos
              </a>

              <a
                href="https://www.instagram.com/forj.acursos"
                target="_blank"
                className="hover:text-lime-400 transition whitespace-nowrap"
              >
                Instagram
              </a>

              <a
                href="mailto:suporte@forjacursos.com"
                className="hover:text-lime-400 transition whitespace-nowrap"
              >
                Suporte
              </a>

            </div>

          </div>

          {/* LINHA */}

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400/20 to-transparent mt-14"></div>

          {/* COPYRIGHT */}

          <div className="text-center text-zinc-500 text-sm mt-10">

            © 2026 FORJA CURSOS — Todos os direitos reservados.

          </div>

        </div>

      </footer>
      {
        videoAberto && (

          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-6">

            <div className="bg-zinc-900 p-4 rounded-3xl max-w-md md:max-w-lg lg:max-w-xl w-full relative border border-lime-400">

              {/* FECHAR */}

              <button
                onClick={() => setVideoAberto(false)}
                className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-lime-400 transition"
              >

                ✕

              </button>

              {/* VIDEO */}

              <video
                src={videoAtual}
                controls
                autoPlay
                className="w-full rounded-2xl max-h-[80vh] object-contain"
              ></video>
            </div>

          </div>

        )
      }
    </div >
  );

}