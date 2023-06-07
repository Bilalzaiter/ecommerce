import React from 'react'
import { Row, Col, NavLink } from 'react-bootstrap'
import UserAddressCard from './UserAddressCard'

const UserAllAddress = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">دفتر العنوانين</div>
            <UserAddressCard />
            <UserAddressCard />
            <UserAddressCard />

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <NavLink href="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </NavLink>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress
