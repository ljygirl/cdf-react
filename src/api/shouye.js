import axios from "axios";

export const ShouYeApi=()=>axios({
    method:"get",
    url:"/api/overseas/index",
})