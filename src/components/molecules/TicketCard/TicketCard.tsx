import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import * as S from './TicketCard.styles'

interface TicketCardProps {
  quantity: number
}

export const TicketCard = ({ quantity }: TicketCardProps) => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <p className="text-sm font-semibold">ARENA COMUM | INTEIRO - Lote 1</p>
        <p className="text-sm">R$ 100,00 (+R$ 15,00 taxa)</p>
        <p className="text-xs text-zinc-400">Vendas até 12/10/2023</p>
      </S.ContentWrapper>

      <S.QuantityWrapper>
        <button>
          <AiOutlineMinusCircle
            size={22}
            color={quantity ? '#320D4C' : '#babaca'}
          />
        </button>
        <span className="text-sm">{quantity}</span>
        <button>
          <AiOutlinePlusCircle size={22} />
        </button>
      </S.QuantityWrapper>
    </S.Container>
  )
}
