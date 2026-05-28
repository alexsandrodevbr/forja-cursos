import { useState, useEffect } from "react"
import logo from "./assets/logo lobo.jpeg"
import apresentacaoVideo from "./assets/videoapresentacao/apresentacao.mp4"
import print1 from "./assets/prints/print1.jpeg"
import print2 from "./assets/prints/print2.jpeg"
import print3 from "./assets/prints/print3.jpeg"
import print4 from "./assets/prints/print4.jpeg"
import print5 from "./assets/prints/print5.jpeg"
import print6 from "./assets/prints/print6.jpeg"
import print7 from "./assets/prints/print7.jpeg"
import marketingVideo from "./assets/video/marketing.mp4"
import iaVideo from "./assets/video/ia.mp4"
import edicaoVideo from "./assets/video/edicao.mp4"
import programacaoVideo from "./assets/video/programacao.mp4"
const prints = [

  print1,
  print2,
  print3,
  print4,
  print5,
  print6,
  print7

]
export default function App() {
  const [videoAberto, setVideoAberto] = useState(false)

  const [videoAtual, setVideoAtual] = useState("")

  const [printAtual, setPrintAtual] = useState(0)
  useEffect(() => {

    const intervalo = setInterval(() => {

      setPrintAtual((prev) =>
        prev === prints.length - 1 ? 0 : prev + 1
      )

    }, 4000)

    return () => clearInterval(intervalo)

  }, [])
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

          Acesse

          <span className="text-lime-400"> +2500 Cursos </span>

          em Um Só Lugar

        </h2>

        <p className="text-zinc-400 text-base md:text-xl mt-8 max-w-2xl">

          Marketing Digital, Inteligência Artificial,
          Edição de Vídeos, Programação,
          Design e muito mais.

        </p>
        <button>
          <a
            href="#comprar"
            className="mt-12 inline-flex items-center justify-center bg-lime-400 text-black font-bold px-8 py-4 rounded-xl shadow-lg shadow-lime-400/50 border border-lime-400 hover:bg-lime-300 hover:shadow-[0_0_40px_#84cc16] transition-all duration-300 text-xl hover:scale-110 animate-pulse"
          >

            QUERO ACESSAR AGORA

          </a>
        </button>
      </section>
      {/* BARRA PREMIUM */}

      <section className="w-full py-6 px-6 bg-gradient-to-b from-black via-zinc-950 to-black mt-10">

        <div className="max-w-3xl mx-auto text-center bg-zinc-900/40 border border-lime-400/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(132,204,22,0.08)] backdrop-blur-sm">

          <p className="text-lime-400 font-extrabold tracking-[5px] text-[11px] md:text-sm uppercase drop-shadow-[0_0_12px_#84cc16] animate-pulse">

            ⚡ Vagas promocionais liberadas

          </p>

          <div className="w-full bg-black/70 rounded-full h-4 mt-5 overflow-hidden border border-zinc-800 shadow-inner">

            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-lime-300 via-lime-400 to-green-500 shadow-[0_0_25px_#84cc16] animate-pulse"></div>

          </div>

          <p className="text-zinc-300 mt-4 text-sm md:text-lg font-semibold">

            Restam apenas

            <span className="text-lime-400 font-extrabold text-lg md:text-xl drop-shadow-[0_0_12px_#84cc16]">

              {" "}25 acessos

            </span>

            nesta condição especial

          </p>

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

              <button
                onClick={() => {

                  setVideoAtual(marketingVideo)

                  setVideoAberto(true)

                }}
                className="w-full bg-lime-400 text-black py-3 rounded-xl font-bold hover:bg-lime-300 transition"
              >

                ACESSAR

              </button>
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

              <button
                onClick={() => {

                  setVideoAtual(iaVideo)

                  setVideoAberto(true)

                }}
                className="w-full bg-lime-400 text-black py-3 rounded-xl font-bold hover:bg-lime-300 transition"
              >

                ACESSAR

              </button>

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

              <button
                onClick={() => {

                  setVideoAtual(edicaoVideo)

                  setVideoAberto(true)

                }}
                className="w-full bg-lime-400 text-black py-3 rounded-xl font-bold hover:bg-lime-300 transition"
              >

                ACESSAR

              </button>

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

              <button
                onClick={() => {

                  setVideoAtual(programacaoVideo)

                  setVideoAberto(true)

                }}
                className="w-full bg-lime-400 text-black py-3 rounded-xl font-bold hover:bg-lime-300 transition"
              >

                ACESSAR

              </button>

            </div>

          </div>

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

      {/* FOOTER */}

      <footer className="border-t border-zinc-800 mt-20 px-8 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* ESQUERDA */}

          <div>

            <h2 className="text-3xl font-extrabold text-lime-400 mb-4">

              FORJA CURSOS

            </h2>

            <p className="text-zinc-400 max-w-md">

              A biblioteca definitiva para quem quer evoluir
              através do conhecimento digital.

            </p>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="text-xl font-bold mb-4">

              Contato

            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">

              <a
                href="https://www.instagram.com/forj.acursos?igsh=MTZmb3NuNHg4MGlpeg%3D%3D&utm_source=qr"
                target="_blank"
                className="hover:text-lime-400 transition"
              >

                Instagram

              </a>



              <a
                href="mailto:suporte@forjacursos.com"
                className="hover:text-lime-400 transition"
              >

                Suporte

              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500">

          © 2026 FORJA CURSOS — Todos os direitos reservados.


        </div>

        {/* SEÇÃO DE OFERTA */}

        <section className="px-6 py-24">

          <div className="max-w-5xl mx-auto bg-zinc-900 border border-lime-400 rounded-[40px] p-10 md:p-16 shadow-[0_0_60px_rgba(132,204,22,0.2)] text-center">

            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">

              Tenha Acesso à

              <span className="text-lime-400"> Biblioteca Completa</span>

            </h2>

            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto">

              Mais de 2500 cursos completos para você aprender,
              evoluir e começar a ganhar dinheiro online.

            </p>

            {/* PREÇO */}

            <div id="comprar" className="mt-12">

              <p className="text-zinc-500 line-through text-2xl">

                De R$3397,00

              </p>

              <h3 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-lime-400 mt-4">

                R$37,99

              </h3>

              <p className="text-zinc-400 mt-4">

                pagamento único • acesso vitalício

              </p>

            </div>

            {/* BENEFÍCIOS */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

              <div className="bg-black border border-zinc-800 rounded-3xl p-6">

                ✅ Acesso Imediato

              </div>

              <div className="bg-black border border-zinc-800 rounded-3xl p-6">

                ✅ Atualizações Frequentes

              </div>

              <div className="bg-black border border-zinc-800 rounded-3xl p-6">

                ✅ Cursos Premium

              </div>

            </div>

            {/* BOTÃO */}

            <a
              href="https://pay.cakto.com.br/hj6rqht_900869"
              target="_blank"
              className="mt-16 inline-flex items-center justify-center bg-lime-400 text-black font-extrabold text-xl md:text-2xl px-16 py-6 rounded-3xl hover:scale-105 transition-all duration-300 shadow-[0_0_35px_#84cc16]"
            >

              Quero entrar agora

            </a>

          </div>

        </section>
        {/* DEPOIMENTOS */}

        <section className="px-6 py-24">

          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20">

            O Que Estão Dizendo Sobre a

            <span className="text-lime-400"> FORJA CURSOS</span>

          </h2>
          <section className="px-6 py-16">

            <div className="max-w-5xl mx-auto bg-zinc-900/60 border border-zinc-800 rounded-[40px] p-8 md:p-14 shadow-[0_0_80px_rgba(132,204,22,0.08)] backdrop-blur-sm">

              <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight">

                Resultados Reais dos

                <span className="text-lime-400">

                  {" "}Nossos Alunos

                </span>

              </h2>

              <p className="text-zinc-400 mt-6 text-center text-lg max-w-2xl mx-auto leading-relaxed">

                Veja alguns prints reais de alunos aplicando os conteúdos da FORJA CURSOS
                e transformando conhecimento em resultados.

              </p>

              <div className="relative mt-14 flex items-center justify-center">

                {/* BOTÃO ESQUERDA */}

                <button
                  onClick={() =>
                    setPrintAtual(
                      printAtual === 0
                        ? prints.length - 1
                        : printAtual - 1
                    )
                  }
                  className="absolute left-[-35px] md:left-[10px] z-20 bg-lime-400 text-black w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-2xl hover:scale-110 transition-all duration-300"
                >

                  ←

                </button>

                {/* PRINT */}

                <div className="rounded-[30px] overflow-hidden border border-lime-400 shadow-[0_0_60px_rgba(132,204,22,0.18)]">

                  <img
                    src={prints[printAtual]}
                    alt="Print"
                    className="w-[250px] md:w-[290px] lg:w-[310px] rounded-[28px] border border-lime-400 shadow-[0_0_30px_rgba(132,204,22,0.12)] transition-all duration-500"
                  />

                </div>

                {/* BOTÃO DIREITA */}

                <button
                  onClick={() =>
                    setPrintAtual(
                      printAtual === prints.length - 1
                        ? 0
                        : printAtual + 1
                    )
                  }
                  className="absolute right-[-35px] md:right-[10px] z-20 bg-lime-400 text-black w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-2xl hover:scale-110 transition-all duration-300">
                  →

                </button>

              </div>

            </div>

          </section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition-all duration-300">

              <div className="text-lime-400 text-3xl mb-6">

                ⭐⭐⭐⭐⭐

              </div>

              <p className="text-zinc-300 leading-relaxed">

                “Muito conteúdo top. Consegui aprender edição
                e marketing tudo no mesmo lugar.”

              </p>

              <h4 className="mt-6 font-bold text-white">

                — Carlos Henrique

              </h4>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition-all duration-300">

              <div className="text-lime-400 text-3xl mb-6">

                ⭐⭐⭐⭐⭐

              </div>

              <p className="text-zinc-300 leading-relaxed">

                “A plataforma parece Netflix de cursos.
                Valeu muito a pena.”

              </p>

              <h4 className="mt-6 font-bold text-white">

                — Matheus Silva

              </h4>

            </div>

            {/* CARD */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition-all duration-300">

              <div className="text-lime-400 text-3xl mb-6">

                ⭐⭐⭐⭐⭐

              </div>

              <p className="text-zinc-300 leading-relaxed">

                “Muito mais barato do que comprar cursos separados.”

              </p>

              <h4 className="mt-6 font-bold text-white">

                — Rafael Costa

              </h4>

            </div>

          </div>

        </section>
        {/* FAQ */}

        <section className="px-6 pb-24">

          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20">

            Perguntas Frequentes

          </h2>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">

            {/* ITEM */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <h3 className="text-2xl font-bold text-lime-400">

                O acesso é vitalício?

              </h3>

              <p className="text-zinc-400 mt-4">

                Sim. Você terá acesso completo sem mensalidade.

              </p>

            </div>

            {/* ITEM */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <h3 className="text-2xl font-bold text-lime-400">

                Como recebo acesso?

              </h3>

              <p className="text-zinc-400 mt-4">

                Após o pagamento você recebe imediatamente.

              </p>

            </div>

            {/* ITEM */}

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
      </footer>
      {videoAberto && (

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

      )}
    </div>
  );

}