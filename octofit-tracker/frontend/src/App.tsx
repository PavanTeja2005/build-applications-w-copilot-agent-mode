import { Link, Routes, Route } from 'react-router-dom'

const Home = () => (
  <div className="container py-5">
    <h1>OctoFit Tracker</h1>
    <p className="lead">Modern multi-tier fitness tracker starter.</p>
  </div>
)

const About = () => (
  <div className="container py-5">
    <h2>About OctoFit</h2>
    <p>React 19 + Vite frontend using Bootstrap styling and client-side routing.</p>
  </div>
)

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
