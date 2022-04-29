import Select from '../Select/Select'
import './Card.scss'

const Card = ({ user, statuses, onStatusChange }) => {
  const onSelectValueChange = (value) => {
    onStatusChange(value, user.userId)
  }

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__left">
          <span className="card__user">{user.lastName}</span>
          <span className="card__user">{user.firstName}</span>
          <span className="card__user">{user.patronymic}</span>
        </div>
        <div className="card__right">
          <Select
            onValueChange={onSelectValueChange}
            currentValue={String(user.status)}
            options={statuses}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
