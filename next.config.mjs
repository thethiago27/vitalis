/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Desabilitar WebAssembly para resolver problemas de hash
  webpack: (config, { isServer }) => {
    // Desabilitar WebAssembly para evitar problemas de hash
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: false,
      syncWebAssembly: false,
    }
    
    // Configurações adicionais para estabilidade
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
    }
    
    return config
  },
  // Configurações de build para estabilidade
  experimental: {
    // Desabilitar features experimentais que podem causar problemas
    optimizePackageImports: [],
    webpackBuildWorker: false,
  },
}

export default nextConfig