import React from "react"
import { Navigate, useLocation } from "react-router-dom"

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const MiddleAuth = ({ children }) => {
  let location = useLocation()
  const isAuth = localStorage.getItem('isAuth')
  return isAuth ? (
    children
  ) : (
    <Navigate to="/inicio-sesion" state={{ from: location }} />
  )
}

export default MiddleAuth