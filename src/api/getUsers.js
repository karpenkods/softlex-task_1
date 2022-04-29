const getUsers = async (page = 1, limit) => {
  const users = await fetch('list.json').then((result) => result.json())

  const startUsersNum = (page - 1) * limit

  const convertedUsers = Object.entries(users.list).map((item) => {
    return {
      userId: item[0],
      ...item[1],
    }
  })

  return {
    users: convertedUsers.slice(startUsersNum, startUsersNum + limit),
    total: convertedUsers.length,
  }
}

export default getUsers
