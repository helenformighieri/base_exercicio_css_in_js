import { H3Vaga, LinkVaga, LiVaga } from './styles'

type Props = {
    vagas: {
        titulo: string
        localizacao: string
        nivel: string
        modalidade: string
        salarioMin: number
        salarioMax: number
        requisitos: string[]
    }[]
}

const ListaVagas = (props: Props) => (
    <ul>
        {props.vagas.map((vaga, index) => (
            <LiVaga key={index}>
                <H3Vaga>{vaga.titulo}</H3Vaga>
                <ul>
                    <li>Localizacao: {vaga.localizacao}</li>
                    <li>Senioridade: {vaga.nivel}</li>
                    <li>Tipo de contratacao: {vaga.modalidade}</li>
                    <li>
                        Salário: {vaga.salarioMin} - {vaga.salarioMax}
                    </li>
                    <li>Requisitos: {vaga.requisitos.join(', ')}</li>
                </ul>
                <LinkVaga href="#">Ver detalhes e candidatar-se</LinkVaga>
            </LiVaga>
        ))}
    </ul>
)

export default ListaVagas
