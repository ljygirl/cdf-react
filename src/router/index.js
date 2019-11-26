import {ShouYe,PinPai,Mine,Login,FenLei,GouWuDai} from "../pages"


export const TabBarRoute = [
    {
        path:"/shouye",
        component:ShouYe,
        text:"首页",
        meta:{
            flag:true
        },
        icon:"\ue67b",
    },
    {
        path:"/pinpai",
        text:"品牌",
        component:PinPai,
        meta:{
            flag:true
        },
        icon:"\ue70d"
    },
    {
        path:"/fenlei",
        text:"分类",
        component:FenLei,
        meta:{
            flag:true
        },
        icon:"\ue623"
    },
    {
        path:"/gouwudai",
        text:"购物袋",
        component:GouWuDai,
        meta:{
            flag:true
        },
        icon:"\ue6d7"
    },
    {
        path:"/mine",
        text:"我的中免",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue699"
    }
]


export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login
    }
]

//做路由表的遍历
export const  configRoute = TabBarRoute.concat(NoTabBarRoute);



