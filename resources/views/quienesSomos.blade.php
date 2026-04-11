@extends('layouts.app')

@section("title", "Quienes somos")

@section("content")
    <section class="py-44 pb-32 w-full mx-auto lg:w-[740px] pb-24">
      <img
        class="rounded-full size-12 mb-4"
        src="/imgs/juanma.webp"
        alt="Foto de Juan María Mancedo"
      / itemscope itemtype = "https://schema.org/Person">
      <h1
        class="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10"
        >
        <span>
          Hola, soy <span itemprop="name">Juan María</span>
            <span itemprop="familyName">
              Mancedo
            </span> 
            
        </span>
        <a
          href="https://linkedin.com/in/juan-maría-mancedo"
          target="_blank"
          rel="noopener"
          class="flex justify-center items-center"
        >
            <span
                class="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-300"
            >
                Disponible para trabajar
            </span>
        </a>
      </h1>
      <h2
        class="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white"
      >
        <span>Muy chambeador.</span>
        <span
          class="text-yellow-800 dark:text-yellow-200"
        >Desarrollador Web</span
        >.<span class="text-red-800 dark:text-red-200">
          De Corrientes, Argentina</span
        >.
        <span class="text-sky-800 dark:text-sky-200"
          >Especializado en crear páginas webs únicas.</span
        >
      </h2>

      <nav class="flex gap-4 mt-8 flex-wrap">
        <SocialPill href="https://linkedin.com/in/juan-maría-mancedo">
          <LinkedInIcon class="size-4 md:size-6" />
           LinkedIn
        </SocialPill>
        <SocialPill href="https://github.com/juan-maría-mancedo">
          <GitHubIcon class="size-4 md:size-6" />
           GitHub
        </SocialPill>
        <SocialPill href="mailto:juanmariamancedo@icloud.com">
          <MailIcon class="size-4 md:size-6" />
            <span itemprop="name">
              juanmariamancedo@icloud.com
            </span>
        </SocialPill>
      </nav>
    </section>
@endsection