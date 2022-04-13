import axio from 'axios'

const api = axio.create({
  baseURL: 'http://localhost:3000',
})

export default api
