import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { ErrorPage } from "./ErrorPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="about" element={ <AboutPage /> }/>
            <Route path="login" element={ <LoginPage /> }/>
            
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/cv" element={ <Navigate to="/about" />} />
        </Routes>
    </UserProvider>
  )
}
