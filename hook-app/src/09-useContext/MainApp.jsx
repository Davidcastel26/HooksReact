import { Routes, Route, Navigate, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { ErrorPage } from "./ErrorPage"

export const MainApp = () => {
  return (
    <>
        <h1>Main App</h1>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>

        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="about" element={ <AboutPage /> }/>
            <Route path="login" element={ <LoginPage /> }/>
            
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/cv" element={ <Navigate to="/about" />} />
        </Routes>
    </>
  )
}
