import { HeaderT } from './style'

export type Props = {
  children: string
}

const Cabecalho = ({ children }: Props) => <HeaderT>{children}</HeaderT>

export default Cabecalho
