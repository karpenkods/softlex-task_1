import Card from '../Card/Card'
import './List.scss'

const List = ({ users, statuses, onStatusChange }) => {
  return (
    <section>
      <div className="list">
        {users.map((user) => (
          <Card
            user={user}
            key={user.userId}
            onStatusChange={onStatusChange}
            statuses={statuses}
          />
        ))}
      </div>
    </section>
  )
}

export default List
