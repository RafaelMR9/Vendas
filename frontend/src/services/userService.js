import { apiUsersUrl } from '../config'

export const updateUser = async (formData, uId) => {
  if ('endereco' in formData) {
    formData.address = formData.endereco
    delete formData.address
  }

  const options = {
    method: 'put',
    headers: new Headers({ 
      'Content-Type': 'application/json' }),
    body: JSON.stringify({ 
      ...formData
    })
  }
  const response = await fetch(`${apiUsersUrl}/${uId}/update/`, options)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else {
    const data = await response.json()
    const modifiedData =  Object.keys(data).reduce((acc, key) => {
      acc[key] = data[key].join('\n');
      return acc;
    }, {})
    throw new Error(JSON.stringify(modifiedData))
  }
}