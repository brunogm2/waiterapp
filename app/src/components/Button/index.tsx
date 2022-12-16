import { Text } from '../Text';
import { Contaier } from './styles';

interface ButtonProps {
    onPress: () => void;
    children: string;
    disabled?: boolean;
}

export function Button({ onPress, children, disabled }: ButtonProps) {
  return(
    <Contaier onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">{children}</Text>
    </Contaier>
  );
}
