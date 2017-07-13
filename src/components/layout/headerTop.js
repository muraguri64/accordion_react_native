
import React from 'react';
import { Header, Body, Title } from 'native-base';

const Headertop = (props) => (
        <Header>
            <Body style={{ flex: 1, alignItems: 'center' }}>
                <Title>
                    { props.headerTitle }
                </Title>
            </Body>
        </Header>
    );

export default Headertop;
