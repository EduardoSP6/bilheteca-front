import { MdShoppingCart } from 'react-icons/md'
import * as S from './TickedGrid.styles'
import { TicketCard } from '@/components/molecules/TicketCard'

export const TicketGrid = () => {
  return (
    <S.Container>
      <S.Header>
        <p className="text-white text-base font-semibold">Ingressos</p>
        <div className="flex items-center">
          <MdShoppingCart size={18} color="#fff" />
          <span className="text-white text-base ml-2">R$ 0,00</span>
        </div>
      </S.Header>

      <S.TicketListContainer>
        <TicketCard quantity={0} />
        <TicketCard quantity={0} />
        <TicketCard quantity={0} />
        <TicketCard quantity={0} />
        <TicketCard quantity={0} />
        <TicketCard quantity={0} />
        <TicketCard quantity={0} />
        <TicketCard quantity={0} />
      </S.TicketListContainer>

      <S.Footer>
        <S.Button disabled>SELECIONE UM INGRESSO</S.Button>
      </S.Footer>
    </S.Container>
  )
}
