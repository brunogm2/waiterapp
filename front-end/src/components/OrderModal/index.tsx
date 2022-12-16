import React from 'react';

import closeIcon from '../../assets/images/close-icon.svg';
import pizza from '../../assets/images/pizza.svg';

import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + (product.price * quantity);
  }, 0);

  return(
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>{order.status == 'WAITING' && '🕑'}</span>
            <span>{order.status == 'IN_PRODUCTION' && '👩‍🍳'}</span>
            <span>{order.status == 'DONE' && '✅'}</span>

            <strong>{order.status == 'WAITING' && 'Fila de espera'}</strong>
            <strong>{order.status == 'IN_PRODUCTION' && 'Em preparação'}</strong>
            <strong>{order.status == 'DONE' && 'Pronto!'}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img src={pizza} alt="" width={48} height={40}/>

                <div className="quantity">{quantity}</div>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>

        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>👩‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button type="button" className="secondary">
            <strong>Cancelar pedidoo</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
