import React from 'react'
import { NavLink } from 'react-bootstrap'

const UserSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <NavLink href="/user/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        اداره الطلبات
                    </div>
                </NavLink>
                <NavLink href="/user/favoriteproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        المنتجات المفضلة
                    </div>
                </NavLink>
                <NavLink href="/user/addresses" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        العنوانين الشخصية
                    </div>
                </NavLink>

                <NavLink href="/user/profile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        الملف الشخصي
                    </div>
                </NavLink>


            </div>
        </div>
    )
}
export default UserSideBar
