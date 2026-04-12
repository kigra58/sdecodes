import { MY_URLS } from "./constant"

export const openMailBox=()=>{
    return  window.open("mailto:"+MY_URLS.EMAIL)
}