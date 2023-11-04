// Write your code here.
import './index.css'

const TechnologyCard = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={className + ' card'}>
      <div>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <img src={imgUrl} className="img-size" alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCard
