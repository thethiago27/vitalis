import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { companyInfo } from '@/lib/data'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-900/20 to-purple-900/20" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Informações da empresa */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {companyInfo.name}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-blue-100 leading-relaxed">
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
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                  {companyInfo.contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                  {companyInfo.contact.email}
                </span>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              {companyInfo.socialMedia.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  className="group flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">
                      {social.name === 'Instagram' ? '📸' : '💬'}
                    </span>
                  </div>
                  <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-blue-100">
              &copy; 2025 {companyInfo.name}. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="#" 
                className="text-blue-100 hover:text-white transition-colors duration-300 hover:underline"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="#" 
                className="text-blue-100 hover:text-white transition-colors duration-300 hover:underline"
              >
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
