import regeneratorRuntime from 'regenerator-runtime' // required for async

export const EditUser = async (id, name, email, etag) => {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', 'If-Match': '"' + etag + '"' },
    body: JSON.stringify({ name: name, email: email })
  }
  return await fetch('/api/um/v1/users/' + id, requestOptions)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
}

export const DeleteUser = async (id, etag) => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'If-Match': '"' + etag + '"' }
  }
  return await fetch('/api/um/v1/users/' + id, requestOptions)
    .then(res => (res.status == 204 ? null : Promise.reject(res)))
}
