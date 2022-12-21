import http from './http'

export const posts = () => http.get('/posts?_limit=20')
