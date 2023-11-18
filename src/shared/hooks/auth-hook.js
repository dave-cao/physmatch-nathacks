import React from 'react'
import { useState, useCallback, useEffect } from 'react'
let logouttimer

function useAuth() {
    const [token, settoken] = useState(false)
    const [userId, setUserid] = useState(false)
    const [expirationdate, setexp] = useState()
    const login = useCallback((uid, token, expirationD) => {

        settoken(token)
        const expiration = expirationD || new Date(new Date().getTime() + 1000 * 60 * 60)
        setexp(expiration)
        localStorage.setItem("userdata", JSON.stringify({ userId: uid, token: token, expiration: expiration.toISOString() }))

        setUserid(uid)
    }, [])

    const logout = useCallback(() => {
        settoken(null)
        setUserid(null)
        setexp(null)
        localStorage.removeItem("userdata")
    }, [])

    useEffect(() => {
        if (token && expirationdate) {
            const remaining_time = expirationdate.getTime() - new Date().getTime()

            logouttimer = setTimeout(logout, remaining_time)
        } else {
            clearTimeout(logouttimer)
        }
    }, [token, logout, expirationdate])
    useEffect(() => {
        const storeddata = JSON.parse(localStorage.getItem("userdata"))
        if (storeddata && storeddata.token && new Date(storeddata.expiration) > new Date()) {
            login(storeddata.userId, storeddata.token, new Date(storeddata.expiration))
        }
    }, [login])
    return { token, login, logout, userId }
}

export default useAuth