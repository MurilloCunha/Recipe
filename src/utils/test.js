export const LoginSimulator = ({userName, password}) => 
  new Promise((resolve,reject)=> {
    setTimeout(()=>{
      if(userName === "teste" && password === "000000"){
        resolve({
          logged:true,
          error:false,
          userName:"usuário",
          receitas:0,
          photo:undefined,
        })
        return
      }
      reject({
        logged:false,
        error:true,
      })
    },2000)
  })

export const publishSimulator = (newRecipe) => {
  console.log(newRecipe)
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      newRecipe.ingredients.length > 1 
        ? resolve("success")
        : reject("error")
    }, 2000)

  })
}