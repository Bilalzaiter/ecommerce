import React from 'react'
import { NavLink} from 'react-bootstrap'

const Subtitle = ({btntitle,pathText,title }) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-tile">{title}</div>
            {btntitle ? (
                <NavLink href={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <div className="shopping-now">{btntitle}</div>
                </NavLink>
            ) : null}
        </div>
    )
}

export default Subtitle
