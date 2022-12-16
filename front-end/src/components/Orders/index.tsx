import React from 'react';
import { Order } from '../../types/Order';
import { OrderBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668472896991-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbcd195b0d3d0f7f4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668473462705-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

export function Orders() {
  return(
    <Container>
      <OrderBoard
        icon="🕗"
        title="Fila de espera"
        orders={orders}
      />
      <OrderBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={[]}
      />
      <OrderBoard
        icon="✅"
        title="Em produção"
        orders={[]}
      />
    </Container>
  );
}
