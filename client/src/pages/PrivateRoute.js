// Packages and Variables
import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

// Function Component
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
// Rendering
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/signin" />
      }}
    ></Route>
  )
}