import request from '@/entities/request';

export function login(payload: { username: string; password: string }) {
    return request('/login', {
        method: 'POST',
        body: payload, 
    })
}