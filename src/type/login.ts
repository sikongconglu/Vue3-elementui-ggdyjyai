export interface ILoginData {
    uname: string
    pwd: string
}
export interface IUserData {
    customercode: number
    token: string
    jid: number
}

export interface ILoginRetData {
    status: number
    message: string
    result: Array<IUserData>
}
export class LoginData {
    loginForm: ILoginData = {
        uname: "",
        pwd: ""
    }
}
