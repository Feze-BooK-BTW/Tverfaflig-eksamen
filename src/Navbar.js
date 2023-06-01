import { Link, useMatch, useResolvedPath } from "react-router-dom"
{/* jeg importerte disse for å kunne definere ver av elementene som en tabb */}

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="slogan">
        Værmeldinger for Oslo og Trondheim{/* Her velgte jeg navnet på nettsiden og gjorde den klikkbar */}
      </Link>
      <ul>
        <CustomLink to="/Hovedside">Hovedside</CustomLink>
        <CustomLink to="/Oslo">Oslo</CustomLink>
        <CustomLink to="/Trondheim">Trondheim</CustomLink>
        {/*Her har jeg gjort slik at elementene som vises på navigasjonsbar er egen side slik at jeg kan byte mellom de */}

      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
