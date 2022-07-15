import { apiUrl } from "../config/Environments"

class Api {

  async post(endpoint, data, token) {
    let isFormData = data instanceof FormData

    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'POST',
      body: isFormData ? data : JSON.stringify(data),
      headers: isFormData ?
        { "Authorization": `Bearer ${token}` }
        :
        {
          "Accept": "application/json",
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
    })

    const body = await response.json()
    if (response.status === 200 || response.status === 201) {
      return body
    } else if (response.status === 401) {
      throw Error(body.message)
    } else {
      throw Error(body.message)
    }
  }

  async put(endpoint, data, token) {
    let isFormData = data instanceof FormData

    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'PUT',
      body: isFormData ? data : JSON.stringify(data),
      headers: isFormData ?
        { "Authorization": `Bearer ${token}` }
        :
        {
          "Accept": "application/json",
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
    })

    const body = await response.json()
    if (response.status === 200 || response.status === 201) {
      return body
    } else if (response.status === 401) {
      throw Error(body.message)
    } else {
      throw Error(body.message)
    }
  }

  async delete(endpoint, data, token) {

    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    const body = await response.json()
    if (response.status === 200 || response.status === 201) {
      return body
    } else if (response.status === 401) {
      throw Error(body.message)
    } else {
      throw Error(body.message)
    }
  }

  async patch(endpoint, data, token) {
    endpoint = new URL(`${apiUrl}${endpoint}`)

    if (data)
      Object.keys(data).forEach(key => endpoint.searchParams.append(key, data[key]))
    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    const body = await response.json()
    if (response.status === 200 || response.status === 201) {
      return body
    } else if (response.status === 401) {
      throw Error(body.message)
    } else {
      throw Error(body.message)
    }
  }

  async get(endpoint, data, token) {
    endpoint = new URL(`${apiUrl}${endpoint}`)

    if (data)
      Object.keys(data).forEach(key => endpoint.searchParams.append(key, data[key]))

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    const body = await response.json()
    if (response.status === 200 || response.status === 201) {
      return body
    } else if (response.status === 401) {
      throw Error(body.message)
    } else {
      throw Error(body.message)
    }
  }

  convertFormData(data) {
    let dataBody = new FormData()
    Object.keys(data).forEach(key => {
      if (!Array.isArray(data[key])) {
        const isFile = data[key] && data[key].size
        const isJson = typeof data[key] === 'object'
        dataBody.append(key, isFile || !isJson ? data[key] : JSON.stringify(data[key]))
      } else {
        data[key].forEach(item => {
          dataBody.append(key, JSON.stringify(item))
        })
      }
    })
    return dataBody
  }
}

export default new Api()