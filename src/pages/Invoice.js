import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Charts2 from 'components/dashboard/Chart2'
import Charts1 from 'components/dashboard/Charts1'
import InfoCard from 'components/dashboard/InfoCard'
import DataTableDT from 'components/DataTableDT'
import { dashboardData, ProductsColumnsDB } from 'static'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/lib/products'
import Donut from 'components/dashboard/Dount'
import Chart from 'components/dashboard/Chart3'
import Chartt from 'components/dashboard/Chart3'
const Invoice = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])

  const products = useSelector(state => state?.products?.products[0]?.products)
  console.log(products);
  const {cards} = dashboardData
  return (
    <div>
    <h2 className='fw-bold mb-3 text-dark'>Invoice</h2>
      <Row>
        {
          cards.map(card => {
            return(
              <Col key={card.id} md='6' lg='3'>
              <InfoCard {...card} />
            </Col>
            )
          })
        }
        <Col md='7' sm="12" className='mb-3'>
          <Card className='border-0 shadow-sm'>
          <Card.Body>
          <h4>Reports</h4>
              <Donut/>
            </Card.Body>
          </Card>
        </Col> 
        <Col md='5' sm="12"  className='mb-3'>
          <Card className='border-0 shadow-sm'>
          <Card.Body>
              <h4>Analytics</h4>
              <Chartt/>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    </div>
  )
}

export default Invoice;