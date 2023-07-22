import Image from 'next/image'
import { useRouter } from 'next/router'
import { BiChevronsDown } from 'react-icons/bi'

import * as S from './styles'
import { ComparisonCard } from '@/components/molecules/ComparisonCard'
import { Footer } from '@/components/organisms/Footer'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="overflow-x-hidden">
      <main className="w-screen">
        <S.HeaderSection>
          <S.PosterWrapper>
            <S.Poster src="https://c1.wallpaperflare.com/preview/557/1021/152/lightshow-live-stage-show.jpg" />
          </S.PosterWrapper>

          <header className="w-screen h-20 flex items-center justify-center absolute top-0 left-0 right-0">
            <div className="flex items-center">
              <div onClick={() => router.push('/')}>
                <Image
                  width={180}
                  height={50}
                  className="cursor-pointer"
                  src="/images/white-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </header>

          <h1 className="z-10 text-white text-[4.8vw] text-center font-bold">
            Produza eventos e conteúdos.
            <br />
            Crie o agora!
          </h1>

          <p className="z-10 text-white text-lg text-center font-medium max-w-4xl mt-10">
            Junte-se à maior plataforma de eventos para criar diferentes jeitos
            de viver, com soluções completas para a publicação, gestão, venda e
            entrega das suas produções
          </p>

          <div className="absolute bottom-0 flex items-center justify-center">
            <img src="https://www.sympla.com.br/static/assets/icons/wave-shape.svg" />
            <BiChevronsDown className="absolute z-10" color="#000" size={40} />
          </div>
        </S.HeaderSection>

        <S.ComparisonTableSection>
          <h2 className="text-4xl font-bold mb-12 text-primary">
            Quanto custa?
          </h2>

          <S.ComparisonCardsWrapper>
            <ComparisonCard
              schema="green"
              title="Gratuito"
              description="Para produtores com eventos presenciais e conteudos digitais gratuitos"
              buttonLabel="COMECE AGORA"
              bullets={{
                presential: ['Um ou mais ingressos'],
                digital: [
                  'Transmissão externa',
                  'Upload de arquivos, links e textos'
                ]
              }}
              services={['Atendimento em nossos canais de comunicação']}
            />
            <ComparisonCard
              schema="blue"
              title="Taxa de 10%"
              label="Mínimo de R$ 2,50 sobre a venda"
              description="Para vender na Bilheteca com todas as possibilidades de monetização"
              buttonLabel="COMECE AGORA"
              bullets={{
                presential: ['Um ou mais ingressos'],
                digital: [
                  'Transmissão externa',
                  'Upload de arquivos, links e textos'
                ]
              }}
              services={['Atendimento em nossos canais de comunicação']}
            />
            <ComparisonCard
              schema="purple"
              title="Customizado"
              description="Para empresas e eventos necessidades customizadas"
              buttonLabel="FALE COM UM CONSULTOR"
              bullets={{
                presential: [
                  'Um ou mais ingressos',
                  'Ingresso com lugar marcado'
                ],
                digital: [
                  'Transmissão externa',
                  'Upload de arquivos, links e textos'
                ]
              }}
              services={[
                'Atendimento direto com especialistas Bilheteca',
                'Atendimento em nossos canais de comunicação',
                'Necessidades customizadas'
              ]}
            />
          </S.ComparisonCardsWrapper>
        </S.ComparisonTableSection>

        <S.StatisticsSession>
          <h2 className="text-4xl font-bold mb-12 text-primary">
            A maior e melhor plataforma
          </h2>

          <S.StatisticsList>
            <S.StatisticsWrapper>
              <S.StatisticsNumbersWrapper>
                <span className="text-primary text-7xl">+</span>
                <h4 className="text-primary text-7xl mt-2">200</h4>
              </S.StatisticsNumbersWrapper>

              <p className="text-lg font-bold text-primary">
                eventos já realizados
              </p>
            </S.StatisticsWrapper>

            <S.StatisticsWrapper>
              <S.StatisticsNumbersWrapper>
                <span className="text-primary text-7xl">+</span>
                <h4 className="text-primary text-7xl mt-2">1500</h4>
              </S.StatisticsNumbersWrapper>

              <p className="text-lg font-bold text-primary">
                ingressos já vendidos
              </p>
            </S.StatisticsWrapper>
          </S.StatisticsList>

          <S.StatisticsButton>COMECE AGORA MESMO!</S.StatisticsButton>

          <Image
            width={250}
            height={100}
            className="cursor-pointer mt-40"
            src="/images/purple-logo.png"
            alt="Logo"
          />
        </S.StatisticsSession>
      </main>

      <Footer />
    </div>
  )
}
