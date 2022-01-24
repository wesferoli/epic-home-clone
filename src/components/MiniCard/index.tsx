import '../../styles/components/MiniCard/MiniCard.sass'

interface Props {
  image: string;
  title: string;
}

const MiniCard: React.FC<Props> = ({ image, title }) => {
  return(
    <div className="mini-card-container">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  )
}

export default MiniCard;