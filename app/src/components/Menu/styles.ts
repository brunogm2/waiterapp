import styled from 'styled-components/native';

export const Product = styled.View`
    flex-direction: row;
    align-items: center ;
`;

export const ProductImage = styled.Image`
    height: 120px;
    width: 96px;
    border-radius: 8px;
    border: 1px;
    /* background-color: red; */
`;

export const ProductDetails = styled.View`
    margin-left: 16px;
    flex: 1;
`;
