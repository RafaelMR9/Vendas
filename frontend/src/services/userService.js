import { apiUsersUrl } from '../config'

export const updateUser = async (formData, id, username) => {
  if ('endereco' in formData) {
    formData.address = formData.endereco
    delete formData.address
  }
  const options = {
    method: 'put',
    headers: new Headers({ 
      'Content-Type': 'application/json' }),
    body: JSON.stringify({ 
      ...formData,
      username
    })
  }
  const response = await fetch(`${apiUsersUrl}/${id}/update/`, options)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else {
    const data = await response.json()
    console.log(JSON.stringify(data))
    const modifiedData =  Object.keys(data).reduce((acc, key) => {
      acc[key] = data[key].join('\n')
      return acc
    }, {})
    throw new Error(JSON.stringify(modifiedData))
  }
}

export const getUser = async (id) => {
  const response = await fetch(`${apiUsersUrl}/${id}/detail/`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else
    throw new Error("Erro ao obter usuário.")
}