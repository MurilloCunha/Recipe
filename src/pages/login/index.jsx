import React, { useCallback } from 'react'
import Box from '../../components/box'

import TextInput from '../../components/TextInput'
import Button from '../../components/button'
import Logo from '../../components/header/logo'
import Loader from '../../components/loader'

import { LoginSimulator } from '../../utils/test'
import { useHistory } from 'react-router-dom'

function LoginPage({user,setUser}) {
  const history = useHistory()
  const handleFormSubmit = useCallback((event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const userName = formData.get('userName')
    const password = formData.get('password')

    setUser({trying:true})
    LoginSimulator({userName, password})
      .then(userData => {
        setUser(userData)
        history.push('/home')
      })
      .catch(userData => setUser(userData))
  }, [])

  const resetError = useCallback(()=>{setUser({...user,error:false})},[])

  return (
    <div className="login-page">
      <figure className="login-page__background">
        <div role="img" aria-label="chef cooking on large pan"></div>
        <figcaption>
          <a href='https://br.freepik.com/fotos/alimento'>foto criado por valeria_aksakova <br /> br.freepik.com</a>
        </figcaption>
      </figure>
      <form onSubmit={handleFormSubmit}>
        <Box dir="column" style="glass">
          <div className="login-page__presentation">
            <Logo size="large" />
          </div>
          <div className="login-page__inputs">
            <TextInput type="text" placeholder="usuário" name="userName" error={user.error} onChange={resetError} required/>
            <TextInput type="password" placeholder="senha" name="password" error={user.error} onChange={resetError} required/>
            {user.error && <p className="login-page__error">usuário ou senha inválidos</p>}
          </div>
          <div className="login-page__control">
            <a href="/subscribe" className="login-page__subscribe" variant="primary">Cadastrar</a>
            <Button variant="secondary">
              {user.trying ? <Loader /> : "Entrar"}
            </Button>
          </div>
        </Box>
      </form>
    </div>
  )
}

export default LoginPage
