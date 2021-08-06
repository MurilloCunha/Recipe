import React, { useCallback, useState } from 'react'

import Logo from '../logo'
import Button from '../button'
import TextInput from '../TextInput'
import Loader from '../loader'
import Avatar from '../avatar'

function Header() {
  const [user,setUser] = useState({logged:false, trying:false, error:false,name:"",password:""})
  const [animation,setAnimation] = useState(false)

  const resetError = () => setUser({...user,error:false})

  const handleLogin = useCallback((event)=>{
    event.preventDefault()
    const form = new FormData(event.target)

    setUser({...user, trying:true})
    //in future apply user service to login
      //teste com erro
      if(form.get('user') === 'teste'){
        setTimeout(()=>{
          setAnimation('login')
          setTimeout(()=>{
            setUser({...user,logged:true, trying:false})},200)
        },2000)
      }else{
        setTimeout(()=>{
          setUser({...user,logged:false, trying:false,error:true,name:form.get('user'), password:form.get('password')})
        },2000)
      }

    //teste sem erro
      /**/
  },[])
  const handleLogout = useCallback(()=> {
      setAnimation('logout')
      setTimeout(()=>{
        setUser({...user,logged:false, trying:false,error:false})
      },200)
  },[user])

  return (
      <header>
        <Logo />
          {!user.logged &&
          <form className={`header__nav`}  onSubmit={handleLogin}>
            {!user.trying &&
              <div className="header__login">
                <TextInput onInput={resetError}type="text" placeholder="usuário" name="user" defaultValue={user.name} maxlength="10" error={user.error} required/>
                <TextInput type="password" placeholder="senha" name="password" maxlenght="12" defaultValue={user.password}  error={user.error} srequired/>
                {user.error && <p className="header__error">usuário ou senha inválido.</p>}
              </div>
            }
            <Button  variant="primary" type="submit">
              {user.trying ? <Loader /> : "Entrar"}
              </Button>
          </form>
          }
          {user.logged &&
          <div className="header__nav"> 
            <Avatar />
            <Button variant="secondary" onClick={handleLogout}>Sair</Button>
          </div>
          }
      <span className={`animate ${animation}`}></span>
      </header>
  )
}

export default Header
