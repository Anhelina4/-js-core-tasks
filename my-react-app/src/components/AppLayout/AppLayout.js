import React from "react"
import { Sidebar } from "../../components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { All, Flagged, Scheduled, Today } from "../../pages/App"

const AppLayout = () => {
  const allRoutes = [
    { path: "/all", element: <All /> },
    { path: "/flagged", element: <Flagged /> },
    { path: "/scheduled", element: <Scheduled /> },
    { path: "/today", element: <Today /> },
  ]
  return (
    <BrowserRouter>
      <div className="app-layout">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper">
        <Routes>
          {allRoutes.map(route => (
            <Route {...route} />
          ))}
        </Routes>
        </div>
      </div>
      </BrowserRouter>
  )
}
export default AppLayout






