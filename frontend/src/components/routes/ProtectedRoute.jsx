import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useRouter } from 'next/router'

export default function ProtectedRoute(props) {
    const currentUser = useContext(AuthContext);
    const router = useRouter()
    const isAuthorized = props.isAuthenticated && (!props.isProtected || props.isAdminOnly && currentUser?.role === 'admin')
    
    if (props.isProtected && !props.isAuthenticated) {
        router.push('/login')
        return null
    }

    if (isAuthorized)
        return props.children
    else {
        router.push('/')
        return null
    }
}