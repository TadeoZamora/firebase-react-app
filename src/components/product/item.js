import React from 'react';
import DbHook from '../../hooks/DbHook';

const ProductItem = ({...props}) => {
    const { item } = props
    const { write } = DbHook()
    return (
        <div className="product-grid2">
            <div className="product-image2">
                <a href="#">
                    <img
                        className="pic-1"
                        src={ item.image }/>
                </a>
                <ul className="social">
                    <li>
                        <a href="#" data-tip="Quick View">
                            <i className="fa fa-eye"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-tip="Enviar" onClick={ () => write(`orders/${new Date().getTime()}`,item) }>
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="product-content">
                <h3 className="title">
                    <a href="#">{ item.title }</a>
                </h3>
                <span className="price">{ item.price }</span>
            </div>
        </div>
    );
};

export default ProductItem;