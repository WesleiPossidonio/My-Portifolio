import axios from 'axios'

export const apiSendEmail = axios.create({
  baseURL: 'https://back-end-my-portifolio.vercel.app/'
})
