import router from '@/router/index'
import allRoutes from '@/router/route'


export function roleMapRoutes(role:string){
  if(role==='admin'){
    return allRoutes 
  }
  if(role==='user'){
    return ;
  }
}

export function getRoutes(role:string){
  let routes = roleMapRoutes(role)
  routes?.forEach(route=>{
    router.addRoute(route)
  })
}