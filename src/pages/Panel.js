import React, {useEffect} from 'react';
import { Button,Toast } from 'react-bootstrap';
import DbHook from '../hooks/DbHook';

const Panel = () => {
    const {readOrders, orders} = DbHook()

    useEffect(() => {
        readOrders()
    }, [])

    return (
        <div className="container">
            <div className="row text-center text-white ">
                <div className="col-lg-7 mx-auto">
                    <h1 className="display-4 text-secondary">Product List</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto">

                    <ul className="list-group shadow">
                        {orders.length > 0 && orders.map(item => (
                            <li key={item.id} className="list-group-item">
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">{item.title}</h5>
                                        <p className="font-italic text-muted mb-0 small">{item.description}</p>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <h6 className="font-weight-bold my-2">${item.price}</h6>
                                            <Button variant="success" size="sm">Enviar</Button>
                                        </div>
                                    </div><img
                                        src={item.image}
                                        alt="Generic placeholder image"
                                        width="150"
                                        className="ml-lg-5 order-1 order-lg-2"/>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Panel;