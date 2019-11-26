import Loadable from "react-loadable";
import Loading from "../components/loading"

export const ShouYe = Loadable({
    loader:()=>import("./shouye"),
    loading:Loading
})

export const PinPai = Loadable({
    loader:()=>import("./pinpai"),
    loading:Loading
})

export const FenLei = Loadable({
    loader:()=>import("./fenlei"),
    loading:Loading
})

export const GouWuDai = Loadable({
    loader:()=>import("./gouwudai"),
    loading:Loading
})

export const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})


export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

