import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { linkName, paragraph, linkRoute } = props;

    return (
        <div className="d-flex justify-content-between align-items-center p-4"  style={{
                        backgroundColor: 'rgba(139, 69, 19, 1)',
                        
                    }}>
            <h1 className="text-center w-100 text-white ">{paragraph}</h1>
                <Link
                    className="btn btn-secondary border border-dark border-2" style={{ width: '150px' }}
                    to={linkRoute}
                   
                >
                    {linkName}
                </Link>
          
        </div>
    );
}

export default Header;
