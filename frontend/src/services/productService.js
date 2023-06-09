import { apiProductsUrl } from '../config'

export const getCategories = async () => {
  const response = await fetch(`${apiProductsUrl}/categories/`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else
    throw new Error("Erro ao obter categorias.")
}

export const getCategory = async (id) => {
  const response = await fetch(`${apiProductsUrl}/categories/${id}/detail/`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else
    throw new Error("Erro ao obter categoria.")
}

export const filterCategories = async (formData) => {
  const response = await fetch(`${apiProductsUrl}/categories/filter?category=${formData}`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else
    throw new Error("Erro ao buscar categorias.")
}

export const registerCategory = async (formData) => {
  const options = {
    method: 'post',
    headers: new Headers({ 
      'Content-Type': 'application/json' }),
    body: JSON.stringify({ 
      nome: formData.name,
      categoria: formData.subCategory ? formData.subCategory : null
    })
  }
  const response = await fetch(`${apiProductsUrl}/categories/register/`, options)
  if (!response.ok) {
    const data = await response.json()
    const modifiedData = Object.values(data).flat().join('\n')
    throw new Error(modifiedData)
  }
}

export const updateCategory = async (formData, id) => {
  const options = {
    method: 'put',
    headers: new Headers({ 
      'Content-Type': 'application/json' }),
    body: JSON.stringify({ 
      nome: formData.name,
      categoria: formData.subCategory ? formData.subCategory : null
    })
  }
  const response = await fetch(`${apiProductsUrl}/categories/${id}/update/`, options)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else {
    const data = await response.json()
    const modifiedData = Object.values(data).flat().join('\n')
    throw new Error(modifiedData)
  }
}

export const removeCategory = async (id) => {
  const options = {
    method: 'delete'
  }
  await fetch(`${apiProductsUrl}/categories/${id}/delete/`, options)
}

export const getProducts = async () => {
  const response = await fetch(`${apiProductsUrl}/`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else
    throw new Error("Erro ao obter produtos.")
}

export const getProduct = async (id) => {
  const response = await fetch(`${apiProductsUrl}/${id}/detail/`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else
    throw new Error("Erro ao obter produto.")
}

export const filterProducts = async (formData) => {
  const response = await fetch(`${apiProductsUrl}/filter?product=${formData}`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else
    throw new Error("Erro ao buscar produtos.")
}

export const registerProduct = async (formData) => {
  const form = new FormData()

  form.append('nome', formData.name)
  form.append('quantidadeAtualEstoque', 0)
  form.append('visivel', true)
  form.append('precoCusto', formData.costPrice)
  form.append('precoVenda', formData.salePrice)
  form.append('descricao', formData.description)
  form.append('unidadePorEmbalagem', formData.packaging)
  form.append('categoria', formData.category)
  form.append('imagem', formData.image)

  const options = {
    method: 'post',
    body: form
  }

  const response = await fetch(`${apiProductsUrl}/register/`, options)
  if (!response.ok) {
    const data = await response.json()
    console.log(data)
    const modifiedData =  Object.keys(data).reduce((acc, key) => {
      acc[key] = data[key].join('\n')
      return acc
    }, {})
    throw new Error(JSON.stringify(modifiedData))
  }
}