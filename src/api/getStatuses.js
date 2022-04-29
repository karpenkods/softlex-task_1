const getStatuses = async () => {
  const users = await fetch('status.json').then((result) => result.json())

  return users.status
}

export default getStatuses
