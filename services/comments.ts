
import http from './http'

export const comments = (userId: number) => http.get(`/comments/${userId}`)