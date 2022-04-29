import { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './Filter.scss'

const UserFilter = ({ setFilter }) => {
  const [temporalFilter, setTemporalFilter] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault()

    setFilter({ query: temporalFilter })
  }

  const clearFilter = () => {
    setTemporalFilter('')

    setFilter({ query: '' })
  }

  return (
    <div>
      <h1 className="heading">Kлиенты:</h1>
      <form className="filter" onSubmit={onFormSubmit}>
        <Input
          value={temporalFilter}
          onChange={(e) => setTemporalFilter(e.target.value)}
          placeholder="Введите текст для поиска"
        />
        <Button type="button" onClick={clearFilter}>
          Сброс
        </Button>
        <Button>Поиск</Button>
      </form>
    </div>
  )
}

export default UserFilter
