import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { companyInfo } from '@/lib/data'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Decoração de fundo */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-blue-900/20 to-purple-900/20" />
        <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Informações da empresa */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <h3 className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-xl font-bold text-transparent">
                {companyInfo.name}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="group flex items-start space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="leading-relaxed text-blue-100">
                    {companyInfo.address.street}
                    <br />
                    CEP {companyInfo.address.cep}, {companyInfo.address.city} – {companyInfo.address.state}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h4 className="mb-4 text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-4">
              <div className="group flex items-center space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-blue-500 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  {companyInfo.contact.phone}
                </span>
              </div>
              <div className="group flex items-center space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  {companyInfo.contact.email}
                </span>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="space-y-6">
            <h4 className="mb-4 text-lg font-semibold text-white">Redes Sociais</h4>
            <div className="space-y-3">
              {companyInfo.socialMedia.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group flex transform items-center space-x-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-sm font-bold text-white">{social.name === 'Instagram' ? '📸' : '💬'}</span>
                  </div>
                  <span className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                    {social.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-blue-100">&copy; 2025 {companyInfo.name}. Todos os direitos reservados.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-blue-100 transition-colors duration-300 hover:text-white hover:underline">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-blue-100 transition-colors duration-300 hover:text-white hover:underline">
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
