import React from 'react';
import CustomModal from '../Modal/modal';
import {
  Main,
  Slogan,
  Title,
  ContainerInputs,
  DataInput,
  ContainerOptions,
  OptionsLabel,
  OptionsInput,
  OptionsLink,
} from './styles';

function LoginForm() {
  return (
    <Main>
      <Title>Sign in</Title>
      <Slogan>Sign in and start managing your candidates!</Slogan>
      <ContainerInputs>
        <DataInput type="text" placeholder="Email" />
        <DataInput
          style={ {
            marginTop: '32px',
            borderBottom: '3px solid hsla(0, 0%, 0%, 0.507)',
          } }
          type="text"
          placeholder="Password"
        />
      </ContainerInputs>
      <ContainerOptions>
        <OptionsLabel htmlFor="remember">
          <OptionsInput type="checkbox" name="remember" id="remember" />
          Remember me
        </OptionsLabel>
        <OptionsLink href="#contact"> Forgot password?</OptionsLink>
      </ContainerOptions>
      <ContainerInputs>
        <CustomModal />
      </ContainerInputs>
    </Main>
  );
}

export default LoginForm;
