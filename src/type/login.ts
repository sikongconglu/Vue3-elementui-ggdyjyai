export interface ILoginData {
    uname: string
    pwd: string
}

export class LoginData {
    loginForm: ILoginData = {
        uname: "",
        pwd: ""
    }
}
