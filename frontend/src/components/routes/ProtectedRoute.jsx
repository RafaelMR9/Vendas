import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '@/contexts/authContext'

export default function ProtectedRoute(props) {
  const { user } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (props.isProtected && !user)
      router.push('/authentication')
    else if (props.isAuthPage && user)
      router.push('/')
    else if (props.isAdminOnly && user && !user.is_superuser)
      router.push('/')
  }, [user])

  if (!user && props.isProtected)
    return null

  return props.children
}