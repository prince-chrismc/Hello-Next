import regeneratorRuntime from 'regenerator-runtime' // required for async

export const LoadUsers = async () => {
  const requestOptions = {
    headers: {
      Accept: 'application/json'
    }
  }
  // console.log('/api/um/v1/users')
  return await fetch('/api/um/v1/users', requestOptions)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
}

export const AddUser = async (name, email) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, email: email })
  }
  return await fetch('/api/um/v1/users', requestOptions)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
}
