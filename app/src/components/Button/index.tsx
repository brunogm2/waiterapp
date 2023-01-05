import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Contaier } from './styles';

interface ButtonProps {
    onPress: () => void;
    children: string;
    disabled?: boolean;
    loading?: boolean;
}

export function Button({ onPress, children, disabled, loading }: ButtonProps) {
  return(
    <Contaier onPress={onPress} disabled={disabled}>
      {!loading && (
        <Text weight="600" color="#fff">{children}</Text>
      )}

      {loading && (
        <ActivityIndicator />
      )}
    </Contaier>
  );
}
