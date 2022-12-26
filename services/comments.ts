import http from './http'

export const comments = () => http.get(`/comments`)
