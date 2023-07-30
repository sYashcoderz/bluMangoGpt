import styled from '@emotion/styled';
import { Col, Typography, Button, Card } from 'antd';

export const SubmitButton = styled(Button)`
    &:hover { background-color: #565656 !important; }
    width: 100%;
    color: #F2F1F0;
    font-size: 1rem;
    font-weight: 600;
    background-color: #2C2C2C;
    height: 49px;
    margin-top: 0.2rem;
`;

export const CustomCol = styled(Col)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CustomColumnContent = styled(Col)`
    margin-top: 2rem;
`;

export const CustomHeadTitle = styled('h3')`
    font-size: 1.5rem;
    font-weight: 700;
    color:#2C2C2C;
    line-height: 26.66px;
`;

export const CustomTypographyText = styled(Typography.Text)`
    color: #2C2C2C;
`;

export const CustomCard = styled(Card)`
.ant-card-body {
    margin:-2px;
    padding:0;
}
`;