import { useEffect, useState } from 'react'
import './App.css'
import type { Four } from './api/Four'
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import apiClient from './api/apiClient';
import { toast } from 'react-toastify';

function App() {
  const [fours, setFours] = useState<Array<Four>>();
  const [input, setInput] = useState<String>();
  const [id, setId] = useState<number>();

  const getFours = () => {
    apiClient.get("/fours").then(r => setFours(r.data)).catch(()=> toast.error("Négyesek betöltése sikertelen"));
  }

  useEffect(getFours,[]);

  return (
    <>
      <h1 className='mb-5'>Számnégyesek</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4>Hozzáadás</h4>
              <input type="text" className='mt-3' onChange={e => setInput(e.target.value)}/> <br />
              A négyest vesszővel elválasztva szóköz nélkül add meg! <br />
              <Button variant='success' className='mt-3' onClick={() => {
                apiClient.post("/fours", {four : "["+input+"]"}).then(() => toast.success("Sikeres hozzáadás")).catch(e => toast.error(e.response.data.message));
                getFours();
              }}>Hozzáadás</Button>
            </Card.Body>
          </Card>

          <Card className='mt-5'>
            <Card.Body>
              <h4>Keresés</h4>
              <input type="text" className='mt-3' onChange={e => setId(Number(e.target.value))}/> <br />
              Add meg a megkeresni kívánt azonosítójú négyes! <br />
              <Button variant='success' className='mt-3' onClick={() => {
                apiClient.get(`/fours/${id}`).then((r) => toast.success("Találat: "+r.data.fours)).catch(e => toast.error(e.response.data.message));
              }}>Hozzáadás</Button>
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
