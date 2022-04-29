import { useEffect, useState } from 'react'
import { useFetching } from './hooks/useFetching'
import { useUsers } from './hooks/useUsers'
import getUsers from './api/getUsers'
import getStatuses from './api/getStatuses'
import setUserStatus from './api/setUserStatus'
import UserList from './components/List/List'
import Filter from './components/Filter/Filter'
import Loader from './components/Loader/Loader'
import Pagination from './components/Pagination/Pagination'
import Navbar from './components/Navbar/Navbar'
import './index.scss'

const limit = 5
const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

function App() {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ query: '' })
  const [statuses, setStatuses] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const [fetchUsers, isUsersLoading] = useFetching(async () => {
    const { users, total } = await getUsers(page, limit)
    setUsers(users)
    setTotalPages(getPageCount(total, limit))
  })

  const selectOptions = (statuses) => {
    return statuses.map((status) => {
      return {
        label: status.statusText,
        value: String(status.code),
      }
    })
  }

  const [fetchStatuses, isStatusesLoading] = useFetching(async () => {
    const response = await getStatuses()
    setStatuses(selectOptions(response))
  })

  const [setStatus] = useFetching(async (value, id) => {
    const changedData = await setUserStatus({ userId: id, value })

    setUsers([
      ...users.map((user) => {
        if (user.userId === changedData.userId) {
          return {
            ...user,
            status: changedData.value,
          }
        }
        return user
      }),
    ])
  })

  const filteredUsers = useUsers(users, filter.query)

  const onStatusChange = (value, id) => {
    setStatus(value, id)
  }

  useEffect(() => {
    fetchUsers().then()
    fetchStatuses().then()
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [page])

  return (
    <div>
      <Navbar />
      <div className="container">
        <Filter setFilter={setFilter} />
        <div>
          {isUsersLoading || isStatusesLoading ? (
            <div className="container__position">
              <Loader />
            </div>
          ) : (
            <div>
              <UserList
                statuses={statuses}
                users={filteredUsers}
                onStatusChange={onStatusChange}
              />
              <Pagination
                totalPages={totalPages}
                page={page}
                setPage={setPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
