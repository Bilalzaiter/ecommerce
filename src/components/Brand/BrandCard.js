import React from 'react'
import { Card, Col } from 'react-bootstrap'

const BrandCard = ({img,bgvar}) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-2 d-flex justify-content-center">
            <Card
                className="my-1"
                style={{
                    width: "100%",
                    height: "151px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: bgvar,
                }}>
                <Card.Img style={{ width: "100%", height: "151px", objectFit: "contain" }} src={img} />
            </Card>
        </Col>
    )
}

export default BrandCard
