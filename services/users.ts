
import http from './http'

export const user = (id:number) => http.get(`/users/${id}`)