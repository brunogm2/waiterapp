import { FlatList, Modal, RefreshControl } from 'react-native';
import { Product } from '../../@types/product';
import { PizzaImg } from '../../assets/images/PizzaImg';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';

import { Text } from '../Text';
import {
  CloseButton,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  Footer,
  FooterContainer,
  PriceContainer
} from './styles';

interface PorductModalProps {
    visible: boolean;
    onClose: () => void;
    product: null | Product;
    onAddToCart: (product: Product) => void;
}

export function ProductModal({ visible, onClose, product, onAddToCart }: PorductModalProps) {
  if (!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return(
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: 'https://img.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?w=826&t=st=1672878601~exp=1672879201~hmac=11001959a02f1001db98c7e61b80a3ef0d728f2289f290f4dd0d5bf5f0e131a0'
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">Ingredientes</Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}

      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={24} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={handleAddToCart}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
