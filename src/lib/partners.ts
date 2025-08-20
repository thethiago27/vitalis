export interface Partner {
  id: number
  name: string
  logo: string
  description: string
  website?: string
  industry: string
}

export const partnersData: Partner[] = [
  {
    id: 1,
    name: 'ZEP',
    logo: '/bussines/dbaf1d_2e3a79768a5c49dca86378ce5677ffa2~mv2.avif',
    description: 'Instalações eletricas de baixa e alta tensão',
    industry: 'Instalações Eletricas',
  },
  {
    id: 2,
    name: 'MDS',
    logo: '/bussines/dbaf1d_45aaa98c24a94c1abe3120613a914b23~mv2.avif',
    description: 'Construção de edifícios e obras',
    industry: 'Construção',
  },
  {
    id: 3,
    name: 'Garcia',
    logo: '/bussines/dbaf1d_52cd6b6800934f77ada62a0fdfe7036d~mv2.avif',
    description: 'Manutenção e instalação de ar condicionado',
    industry: 'Ar Condicionado',
  },
  {
    id: 4,
    name: 'MDS Pinturas',
    logo: '/bussines/dbaf1d_9675c01e6eb441f0808c63824f18604e~mv2.avif',
    description: 'Pintura de edifícios e obras',
    industry: 'Pintura',
  },
  {
    id: 5,
    name: 'Seven Print Comunicação',
    logo: '/bussines/dbaf1d_d969062de6e4437d81613add4a5792c6~mv2.avif',
    description: 'Impressão de cartazes, banners, flyers, etc',
    industry: 'Impressão',
  },
  {
    id: 6,
    name: 'Lar Construtora',
    logo: '/bussines/dbaf1d_ee8189879e0643a2910d5fa584b091fc~mv2.avif',
    description: 'Construção de edifícios e obras',
    industry: 'Construção',
  },
]

export const getPartnersByIndustry = (industry: string): Partner[] => {
  return partnersData.filter((partner) => partner.industry === industry)
}

export const getPartnerById = (id: number): Partner | undefined => {
  return partnersData.find((partner) => partner.id === id)
}
