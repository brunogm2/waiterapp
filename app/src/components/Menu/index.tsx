import { FlatList } from 'react-native';
import { PizzaImg } from '../../assets/images/PizzaImg';

import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { Text } from '../Text';

import { Product, ProductImage, ProductDetails } from './styles';
// import { pizza } from '../../assets/images/pizza.svg';

export function Menu() {
  return(
    <FlatList
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      data={products}
      keyExtractor={product => product._id}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={require('../../assets/images/pizza.svg')}
          />

          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight='600' color='#333'>{formatCurrency(product.price)}</Text>
          </ProductDetails>
        </Product>
      )}
    />
  );
}
