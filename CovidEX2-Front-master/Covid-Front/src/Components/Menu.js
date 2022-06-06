import * as React from 'react';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <nav>
                <div className="row">
                    <div className="col-4">
                        <Link to="/" className="btn btn-primary">Register Page</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/summary" className="btn btn-primary">Summary Page</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/learn" className="btn btn-primary">Learning Journey</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Menu;
