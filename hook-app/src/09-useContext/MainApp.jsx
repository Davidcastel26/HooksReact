import { Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { ErrorPage } from "./ErrorPage"

export const MainApp = () => {
  return (
    <>
        <h1>Main App</h1>
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="about" element={ <AboutPage /> }/>
            <Route path="login" element={ <LoginPage /> }/>
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    </>
  )
}
