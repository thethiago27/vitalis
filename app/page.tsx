import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HardHat, ShieldCheck, Clipboard, Phone, Mail, MapPin, CheckCircle, Users, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-poppins">VITALIS SSHO</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="#inicio" className="hover:text-blue-200 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-blue-200 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-blue-200 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#treinamentos" className="hover:text-blue-200 transition-colors">
                  Treinamentos
                </Link>
              </li>
              <li>
                <Link href="#documentos" className="hover:text-blue-200 transition-colors">
                  Documentos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-blue-200 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="inicio" className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins leading-tight">
              Soluções Integradas em Segurança e Saúde Ocupacional
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-inter max-w-4xl mx-auto">
              Treinamentos, Documentação Legal e Consultoria Personalizada para Empresas que Valorizam a Vida!
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-100 text-lg px-8 py-3 font-poppins font-semibold">
              Fale conosco
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-poppins">SERVIÇOS</h2>
              <p className="text-xl text-gray-600 font-inter">
                Soluções completas para Segurança, Saúde e Higiene Ocupacional (SSHO)
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                number="01"
                title="Cursos e Treinamentos NRs"
                description="Capacitação certificada em NRs (NR-10, NR-35, NR-33, etc.), primeiros socorros e combate a incêndios. Instrutores especializados garantem conformidade e redução de riscos."
                icon={<HardHat className="w-12 h-12 text-blue-600" />}
              />
              <ServiceCard
                number="02"
                title="Elaboração de Documentos Técnicos"
                description="Criação de PGR, PCMSO, LTCAT, laudos e permissões com validade legal. Evite multas e regularize sua empresa de forma ágil."
                icon={<Clipboard className="w-12 h-12 text-blue-600" />}
              />
              <ServiceCard
                number="03"
                title="Programas de Prevenção e Gestão"
                description="Implantação de PGR, PCMSO e CIPA com ações personalizadas. Reduza acidentes e promova um ambiente seguro e produtivo."
                icon={<ShieldCheck className="w-12 h-12 text-blue-600" />}
              />
              <ServiceCard
                number="04"
                title="Consultoria em SSHO"
                description="Adequação às NRs, auditorias e gestão de riscos. Soluções estratégicas para compliance e cultura de segurança sustentável."
                icon={<Users className="w-12 h-12 text-blue-600" />}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-poppins">SOBRE</h2>
              <h3 className="text-2xl font-semibold text-blue-700 font-poppins">Tudo sobre a Vitalis SSHO</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8 text-gray-700 font-inter leading-relaxed">
                Na Vitalis SSHO, dedicamos nossos esforços a promover a segurança, saúde e higiene ocupacional com
                excelência, inovação e comprometimento. Somos especialistas em desenvolver soluções personalizadas que
                garantem ambientes de trabalho mais seguros, saudáveis e produtivos, alinhados às normas regulatórias e
                às necessidades de cada empresa.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-blue-700 mb-4 font-poppins">NOSSA MISSÃO</h4>
                    <p className="text-gray-700 font-inter">
                      Promover a segurança, saúde e higiene ocupacional nas empresas, assegurando ambientes de trabalho
                      saudáveis, seguros e produtivos, através de soluções inovadoras e personalizadas.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-blue-700 mb-4 font-poppins">NOSSA VISÃO</h4>
                    <p className="text-gray-700 font-inter">
                      Ser referência no mercado de segurança, saúde e higiene ocupacional, reconhecida pela excelência
                      de nossos serviços e impacto positivo na vida dos trabalhadores.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-blue-800 mb-6 font-poppins text-center">
                  VALORES DA VITALIS SSHO
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ValueItem title="Compromisso com a Segurança" description="A segurança é nossa prioridade máxima." />
                  <ValueItem
                    title="Responsabilidade Social"
                    description="Contribuímos para a melhoria da qualidade de vida."
                  />
                  <ValueItem title="Sustentabilidade" description="Promovemos práticas sustentáveis." />
                  <ValueItem title="Excelência" description="Buscamos sempre a melhoria contínua." />
                  <ValueItem title="Integridade" description="Atuamos com transparência e ética." />
                  <ValueItem title="Inovação" description="Desenvolvemos soluções criativas e eficientes." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-poppins">ABORDAGEM</h2>
              <h3 className="text-2xl font-semibold text-blue-700 font-poppins">
                Protegemos Pessoas e Negócios com Excelência em SST
              </h3>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8 font-inter leading-relaxed">
                Na Vitalis SSHO, acreditamos que segurança no trabalho vai além do cumprimento de normas – é sobre
                proteger vidas, preservar famílias e fortalecer empresas. Somos especialistas em Saúde, Segurança e
                Higiene Ocupacional (SSHO), oferecendo soluções completas e personalizadas para transformar ambientes de
                trabalho em espaços seguros, saudáveis e produtivos.
              </p>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 font-poppins font-semibold">
                Fale conosco
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-poppins">BENEFÍCIOS</h2>
              <h3 className="text-2xl font-semibold text-blue-700 font-poppins">
                Juntos, vamos construir um futuro mais seguro!
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard
                title="Segurança"
                description="Implementamos soluções que previnem falhas e protegem sua equipe, diminuindo afastamentos e custos com multas."
                icon={<ShieldCheck className="w-12 h-12 text-blue-600" />}
              />
              <BenefitCard
                title="Conformidade"
                description="Documentos e treinamentos sempre atualizados conforme as NRs, evitando autuações e processos trabalhistas."
                icon={<CheckCircle className="w-12 h-12 text-blue-600" />}
              />
              <BenefitCard
                title="Eficiência"
                description="Ambientes mais seguros motivam colaboradores, reduzem paralisações e aumentam a eficiência operacional."
                icon={<Target className="w-12 h-12 text-blue-600" />}
              />
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section id="treinamentos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-poppins">Treinamentos</h2>
              <h3 className="text-2xl font-semibold text-blue-700 font-poppins">
                Capacitação que transforma conhecimento em segurança!
              </h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <TrainingItem name="CIPAMIN" hours="40h" />
                <TrainingItem name="Noções de Primeiros Socorros" hours="2h" />
                <TrainingItem name="NR 05 – CIPA [Grau de Risco 1]" hours="8h" />
                <TrainingItem name="NR 05 – CIPA [Grau de Risco 2]" hours="8h" />
                <TrainingItem name="NR 06 – Equipamentos de Proteção Individual" hours="4h" />
                <TrainingItem name="NR 10 – Segurança em Instalações Elétricas" hours="40h" />
                <TrainingItem name="NR 10 – Reciclagem Bienal" hours="16h" />
                <TrainingItem name="NR 11 – Transporte e Movimentação" hours="6h" />
                <TrainingItem name="NR 12 – Segurança em Máquinas" hours="4h" />
                <TrainingItem name="NR 20 – Curso Básico" hours="4h" />
                <TrainingItem name="NR 23 – Prevenção e Combate a Incêndio" hours="8h" />
                <TrainingItem name="NR 33 – Espaços Confinados" hours="16h" />
                <TrainingItem name="NR 35 – Trabalho em Altura" hours="8h" />
                <TrainingItem name="NR 38 – Limpeza Urbana" hours="7h" />
              </div>
              <div className="text-center">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 font-poppins font-semibold">
                  Quero saber mais!
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documentos" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-poppins">
                Elaboração de Documentos
              </h2>
              <h3 className="text-2xl font-semibold text-blue-700 font-poppins">
                Documentação segura, empresa protegida!
              </h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <DocumentItem name="AEP - Avaliação Ergonômica Preliminar" />
                <DocumentItem name="AET - Análise Ergonômica do Trabalho" />
                <DocumentItem name="APR - Análise Preliminar de Risco" />
                <DocumentItem name="LIP - Laudo de Insalubridade e Periculosidade" />
                <DocumentItem name="LTCAT - Laudo Técnico das Condições do Ambiente" />
                <DocumentItem name="OS - Ordem de Serviço" />
                <DocumentItem name="PCA - Programa de Conservação Auditiva" />
                <DocumentItem name="PCMSO - Programa de Controle Médico" />
                <DocumentItem name="PET - Permissão de Entrada e Trabalho" />
                <DocumentItem name="PGR - Programa de Gerenciamento de Riscos" />
                <DocumentItem name="PPR - Programa de Proteção Respiratória" />
                <DocumentItem name="PPP - Perfil Profissiográfico Previdenciário" />
              </div>
              <div className="text-center">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 font-poppins font-semibold">
                  Quero saber mais!
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Entre em contato</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome*"
                    className="w-full px-4 py-3 rounded-md text-gray-900 font-inter"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Sobrenome*"
                    className="w-full px-4 py-3 rounded-md text-gray-900 font-inter"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 rounded-md text-gray-900 font-inter"
                  required
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full px-4 py-3 rounded-md text-gray-900 font-inter"
                />
                <input
                  type="text"
                  placeholder="Nome da empresa/organização"
                  className="w-full px-4 py-3 rounded-md text-gray-900 font-inter"
                />
                <textarea
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md text-gray-900 font-inter"
                ></textarea>
                <Button className="w-full bg-white text-blue-700 hover:bg-blue-100 py-3 font-poppins font-semibold">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins">VITALIS SSHO</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-inter">
                    Av. Paulista, 777, sala 102, parte 946, Bela Vista
                    <br />
                    CEP 01311-914, São Paulo – SP.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-poppins">CONTATO</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-inter">(11) 99254-1052</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="font-inter">comercial.01@vitalisssho.org</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-poppins">REDES SOCIAIS</h4>
              <div className="space-y-2">
                <Link href="#" className="block hover:text-blue-200 font-inter">
                  Instagram
                </Link>
                <Link href="#" className="block hover:text-blue-200 font-inter">
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="font-inter">&copy; 2025 por Vitalis SSHO. Orgulhosamente criado por EX Digital Solution</p>
            <div className="mt-2 space-x-4">
              <Link href="#" className="hover:text-blue-200 font-inter">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-blue-200 font-inter">
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ number, title, description, icon }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-3xl font-bold text-blue-600 font-poppins">{number}</div>
          <div className="flex-1">
            <div className="flex items-center mb-3">
              {icon}
              <h3 className="text-xl font-semibold text-blue-700 ml-3 font-poppins">{title}</h3>
            </div>
            <p className="text-gray-600 font-inter">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ValueItem({ title, description }) {
  return (
    <div className="text-center">
      <h5 className="font-semibold text-blue-700 mb-2 font-poppins">{title}</h5>
      <p className="text-sm text-gray-600 font-inter">{description}</p>
    </div>
  )
}

function BenefitCard({ title, description, icon }) {
  return (
    <Card className="text-center h-full">
      <CardContent className="p-6">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-blue-700 font-poppins">{title}</h3>
        <p className="text-gray-600 font-inter">{description}</p>
      </CardContent>
    </Card>
  )
}

function TrainingItem({ name, hours }) {
  return (
    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
      <span className="font-inter text-sm">{name}</span>
      <span className="font-semibold text-blue-700 font-poppins">{hours}</span>
    </div>
  )
}

function DocumentItem({ name }) {
  return (
    <div className="p-3 bg-white rounded-lg shadow-sm">
      <span className="font-inter text-sm">{name}</span>
    </div>
  )
}
