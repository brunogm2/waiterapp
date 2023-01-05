import { FlatList } from 'react-native';
import { CartItem } from '../../@types/CartItem';
import { Actions, Item, ProductContainer, Image } from './styles';

interface CartProps {
    cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  console.log(cartItems);
  return(
    <FlatList
      data={cartItems}
      keyExtractor={cartItem => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: cartItem.product.imagePath,
              }}
            />
          </ProductContainer>

          <Actions>

          </Actions>
        </Item>
      )}
    />
  );
}
