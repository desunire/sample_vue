import axios from 'axios'

/*test api*/
export const test = (para) =>{
    return axios.post('/api/rooms/token',para,{headers:{
            'Content-Type':'application/json',
        }})
}


/*管理员登录 test*/
export const adminlogin = (name,pwd) =>{
  return axios.post('/api/auth/logon/admin',{
    "userName":name,
    "pwd":pwd
  },{
    "Content-Type":"application/json"
  })
}

