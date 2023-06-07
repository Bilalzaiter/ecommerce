import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auhref title-login">تسجيل الدخول</label>
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
          <button className="btn-login mx-auto mt-4">تسجيل الدخول</button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟{" "}
            <NavLink href="/register" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </NavLink>
          </label>



        </Col>


        <label className="mx-auhref my-4">
          <NavLink href="/admin/allproducts" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              الدخول ادمن
            </span>
          </NavLink>

          <NavLink href="/user/allorders" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: "pointer" }} className="text-danger mx-3">
              الدخول مستخدم
            </span>
          </NavLink>
        </label>
      </Row>
    </Container>
  )
}

export default LoginPage
