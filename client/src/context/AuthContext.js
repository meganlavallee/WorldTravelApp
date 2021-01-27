// Packages and Variables
import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
const AuthContext = React.createContext()

// Exporting useAuth
export function useAuth() {
  return useContext(AuthContext)
}

// Exporting AuthProvider
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
// Handle User SignUp
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
// User LogIn
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
// User LogOut
  function logout() {
    return auth.signOut()
  }
// Reset Password
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }
// When pages loads sets current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}