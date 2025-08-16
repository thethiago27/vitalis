import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HardHat, ShieldCheck, Clipboard, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">VITALIS SSHO</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-200">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-200">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-200">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Soluções de Segurança no Trabalho</h2>
            <p className="text-xl mb-8">Proteja seu bem mais valioso: Seus funcionários</p>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">Entre em contato</Button>
          </div>
        </section>

        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<HardHat className="w-12 h-12 text-blue-600" />}
                title="Treinamentos de Segurança"
                description="Programas de treinamento abrangentes para garantir que sua equipe esteja bem preparada."
              />
              <ServiceCard
                icon={<ShieldCheck className="w-12 h-12 text-blue-600" />}
                title="Consultoria de Riscos"
                description="Compreenda e gerencie riscos no ambiente de trabalho com uma avaliação detalhada e estratégias eficazes de mitigação."
              />
              <ServiceCard
                icon={<Clipboard className="w-12 h-12 text-blue-600" />}
                title="Compliance Management"
                description="Mantenha-se sempre atualizado com as mais recentes normas e regulamentações de segurança."
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Por que escolher a VITALIS SSHO?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Expertise</h3>
                <p>Conte com a expertise da nossa equipe de profissionais certificados em segurança, com anos de experiência em diversos setores.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Soluções Costumizadas</h3>
                <p>Oferecemos soluções personalizadas para atender às necessidades exclusivas do seu negócio e ambiente de trabalho.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Histórico comprovado de excelência.</h3>
                <p>Nossos clientes comprovam: métricas de segurança aprimoradas e menos incidentes no ambiente de trabalho.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Suporte contínuo para garantir segurança e conformidade sempre.</h3>
                <p>Oferecemos suporte contínuo para garantir o sucesso duradouro da segurança em sua organização.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Fale com a gente!</h2>
            <p className="text-xl mb-8">Vamos trabalhar juntos, para criar um ambiente seguro para sua equipe.</p>
            <div className="flex justify-center items-center">
              <Phone className="w-6 h-6 mr-2" />
              <span className="text-2xl font-semibold">(11) 99254-1052</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 VITALIS SSHO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

