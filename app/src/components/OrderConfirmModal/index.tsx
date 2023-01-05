import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

interface OrderConfirmModal {
    visible: boolean;
    onOk: () => void;
}

export function OrderConfirmModal({ visible, onOk }: OrderConfirmModal) {
  return(
    <Modal
      visible={visible}
      animationType="fade"
    >
      <Container>
        <CheckCircle />
        <Text size={20} weight="600" color="#FFF" style={{ marginTop: 12 }}>Pedido confirmado!</Text>
        <Text color="#FFF" opacity={0.9} style={{ marginTop: 4 }}>O pedido já entrou em produção!</Text>
        <OkButton onPress={onOk}>
          <Text weight="600" color="#D73035">Ok</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
