import GitHubIcon from "../components/icons/GitHubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import MailIcon from "../components/icons/MailIcon";
import SocialPill from "../components/SocialPill";
import MainLayout from "../layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function QuienesSomos(){
  return(
    <>
      <Head title="Quienes somos?" />  
      <MainLayout>
            <div className="grid grid-cols-2 place-content-center gap-10 p-3 sm:p-0">
                {/* <h1 className="place-self-center col-span-2 text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Quiénes Somos
                </h1> */}
                <section className="w-full mx-auto lg:w-[740px] min-h-[calc(100vh-3.5rem)] flex justify-center items-center">
                  <div>
                    <img
                      className="rounded-full size-12 mb-4"
                      src="/imgs/juanma.webp"
                      alt="Foto de Juan María Mancedo"
                    />
                    <h1
                      className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10"
                      >
                      <span>
                        Hola, soy Juan María Mancedo
                      </span>
                      <a
                        href="https://linkedin.com/in/juan-maría-mancedo"
                        target="_blank"
                        rel="noopener"
                        className="flex justify-center items-center"
                      >
                          <span
                              className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-300"
                          >
                              Disponible para trabajar
                          </span>
                      </a>
                    </h1>
                    <h2
                      className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white"
                    >
                      <span
                        className="text-yellow-800 dark:text-yellow-200">
                          Desarrollador web
                          </span>
                          . <span className="text-red-800 dark:text-red-200">
                        De Corrientes, Argentina
                        </span>
                        . <span className="text-sky-800 dark:text-sky-200">
                        Especializado en crear páginas webs únicas.
                        </span>
                    </h2>

                    <nav className="flex gap-4 mt-8 flex-wrap">
                      <SocialPill href="https://linkedin.com/in/juan-maría-mancedo">
                        <>
                          <LinkedinIcon className="size-4 md:size-6" />
                          LinkedIn
                        </>
                      </SocialPill>
                      <SocialPill href="https://github.com/juan-maría-mancedo">
                        <>
                          <GitHubIcon className="size-4 md:size-6" />
                          GitHub
                        </>
                      </SocialPill>
                      <SocialPill href="mailto:juanmariamancedo@icloud.com">
                        <>
                          <MailIcon className="size-4 md:size-6" />
                              juanmariamancedo@icloud.com
                        </>
                      </SocialPill>
                    </nav>
                  </div>
                </section>
                <div className="col-span-2 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                    <p className="text-sm/6 font-medium">
                      En <span className="font-bold">FlowTech Performance</span> nos especializamos en la comercialización de downpipes para autos y camionetas, ofreciendo soluciones orientadas a mejorar el rendimiento y la eficiencia del sistema de escape.
                    </p>
                    <p className="text-sm/6 font-medium">
                      Nuestro objetivo es brindar productos confiables junto con información clara, para que cada cliente pueda tomar decisiones informadas según las necesidades de su vehículo.
                    </p>
                </div>
                <section className="col-span-2 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                    <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                        Nuestra misión
                    </h2>
                    <p className="text-sm/6 font-medium">
                        Ofrecer productos de calidad en el ámbito automotriz, acompañados de asesoramiento básico que facilite la correcta elección e instalación de los mismos.
                    </p>
                </section>
                <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                    <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                        Nuestra visión
                    </h2>
                    <p className="text-sm/6 font-medium">
                      Ser una referencia en la comercialización de componentes de escape, destacándonos por la claridad, la seriedad y la atención al cliente.
                    </p>
                </section>
                <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                    <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                      Trayectoria
                    </h2>
                    <p className="text-sm/6 font-medium">
                        Este proyecto surge como una iniciativa académica dentro del ámbito de la programación web, con el propósito de simular el funcionamiento de una tienda online especializada.
                    </p>
                    <p className="text-sm/6 font-medium">
                      A pesar de su carácter formativo, se busca representar de manera realista los procesos de comercialización y la interacción con el cliente en el rubro automotriz.
                    </p>
                </section>
                <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                    <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                        Nuestro equipo
                    </h2>
                    <p className="text-sm/6 font-medium">
                        El equipo está conformado por estudiantes con formación técnica, enfocados en el desarrollo de soluciones digitales y con interés en el mundo automotriz.
                    </p>
                    <ul className="list-disc list-inside text-sm/6 font-medium">
                        <li>
                            <span className="font-bold">Juan Mancedo </span> - Desarrollo y diseño del sitio web
                        </li>
                    </ul>
                </section>
                <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                    <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">Compromiso</h2>
                    <p className="text-sm/6 font-medium">
                      Nos comprometemos a ofrecer información clara, transparente y útil para cada visitante, priorizando la confianza y la coherencia en cada sección del sitio.
                    </p>
                </section>
                
            </div>
      </ MainLayout>
    </>
  )
}