import service from "@/request/index";
import { ILoginData } from "@/type/login";

// 登录接口
export function login(data: string) {
    return service({
        url: "/user/users-service/user/login",
        method: "POST",
        data
    })
}