import React from 'react'
import Subtitle from '../Utility/Subtitle'
import { Container, Row } from 'react-bootstrap'
import prod1 from '../../assets/images/prod1.png'
import prod3 from '../../assets/images/prod3.png'
import prod4 from '../../assets/images/prod4.png'
import CategoryCard from '../Category/CategoryCard'

const Homecategory = ({title,pathText,btntitle}) => {
    return (
        <Container>
            <Subtitle btntitle={btntitle} pathText={pathText} title={title} />
            <Row >
                <CategoryCard background="dodgerblue" title={"جهاز HP"} img={prod1}/>
                <CategoryCard background="gold" title={"جهاز lenovo"} img={prod1}/>
                <CategoryCard background="darkcyan" title={"طناجر tefal"} img={prod3}/>
                <CategoryCard background="orange" title={"طناجر ceramic"} img={prod3}/>
                <CategoryCard background="darkturquoise" title={"ألبسة للكبار"} img={prod4}/>
                <CategoryCard background="lightsalmon" title={"ألبسة ولادية"} img={prod4}/>
            </Row>
        </Container>
    )
}

export default Homecategory
