import React from 'react'
import { NavLink } from 'react-bootstrap'


const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <NavLink href="/admin/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        اداره الطلبات
                    </div>
                </NavLink>
                <NavLink href="/admin/allproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اداره المنتجات
                    </div>
                </NavLink>
                <NavLink href="/admin/addbrand" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اضف ماركه
                    </div>
                </NavLink>

                <NavLink href="/admin/addcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اضف تصنيف
                    </div>
                </NavLink>

                <NavLink href="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اضف تصنيف فرعي
                    </div>
                </NavLink>
                <NavLink href="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اضف منتج
                    </div>
                </NavLink>

            </div>
        </div>
    )
}

export default AdminSideBar
