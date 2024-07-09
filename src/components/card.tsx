interface CardsProps {
  nome: string;
}

const Card = (props: CardsProps) => {

  const { nome } = props

  return (
    <div>{nome}</div>
  )
}

export default Card