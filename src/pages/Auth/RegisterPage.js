import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'

const RegisterPage = () => {
    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center hieght-search">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">تسجيل حساب جديد</label>
                    <input
                        placeholder="اسم المستخدم..."
                        type="text"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        placeholder="الايميل..."
                        type="text"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        placeholder="كلمه السر..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button className="btn-login mx-auto mt-4">تسجيل الحساب</button>
                    <label className="mx-auto my-4">
                        لديك حساب بالفعل؟{" "}
                        <NavLink href="/login" style={{ textDecoration: "none" }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                اضغط هنا
                            </span>
                        </NavLink>
                    </label>
                </Col>
            </Row>
        </Container>)
}

export default RegisterPage