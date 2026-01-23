import { useEffect, useState } from 'react'
import './App.css'
import type { Four } from './api/Four'
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import apiClient from './api/apiClient';
import { toast } from 'react-toastify';

function App() {
  const [fours, setFours] = useState<Array<Four>>();

  useEffect(()=> {
    apiClient.get("/fours").then(r => setFours(r.data)).catch(()=> toast.error("Négyesek betöltése sikertelen"));
  },[]);

  return (
    <>
      <h1>Számnégyesek</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4>Hozzáadás</h4>
              <input type="text" className='mt-3'/>
              <Button variant='success' className='mt-3'>Hozzáadás</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
              <Card>
                <Card.Body>
                  {fours ? (<Table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Négyes</th>
                  </tr>
                </thead>
                <tbody>
                  {fours.map(x => (<tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.fours}</td>
                  </tr>))}
                </tbody>
              </Table>) : (<h4>Nincs négyes</h4>)}
                </Card.Body>
              </Card>
        </Col>
      </Row>
    </>
  )
}

export default App
