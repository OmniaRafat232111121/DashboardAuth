import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import InfoCard from 'components/dashboard/InfoCard'
import DataTableDT from 'components/DataTableDT'
import { dashboardData, ProductsColumnsDB } from 'static'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/lib/products'
import Donut from 'components/dashboard/Dount'
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
    <div className='Invoice_page'>
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
        <Col md='4'  className='mb-3'>
          <Card className='border-0 shadow-sm'>
          <Card.Body>
          <h4>Reports</h4>
              <Donut className="dount-invoice"/>
            </Card.Body>
          </Card>
        </Col> 

        <Col md='5'  className='mb-3 '>
          <Card className='border-0 shadow-sm'>
          <Card.Body>
              <h4>Analytics</h4>
              <Chartt className="chart-invoice" />
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    </div>
  )
}

export default Invoice;