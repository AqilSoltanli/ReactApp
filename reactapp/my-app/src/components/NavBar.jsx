import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <header>
        <div className="container">
            <div className="row left">
                <div className="col-lg-2">
                    <Link to='/'>DIM.AZ</Link>
                </div>
                <div className="col-lg-10 right text-end">
                    <Link to='/'>Home</Link>
                    <Link to='/add'>ADD</Link>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar
