import { Col, Row, Card, Spinner } from 'react-bootstrap';
import { useEffect, useState} from 'react';
import {FaClinicMedical} from 'react-icons/fa';


const url = 'http://localhost:5000/api';

const Output = (props) => {
    
    const medicinedata = props.medicine;
    const district = props.district;
    const I =0;

    return (
        <div>
        {  
            <div style={{color: '#fff'}} className="d-flex justify-content-center mb-4">
                <Spinner animation="border" variant="success" className="mr-3"/>
                Loading
            </div>
        }
        </div>
    )
}


export default Output;
