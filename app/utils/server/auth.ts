import axios from "axios";
import { ApiResponse, HomeownerRes } from "../../types";
import Axios from "../axios"
import config from "../../config";

type LoginUserInput = {
    email: string
    password: string
}

export type ChangePasswordInput = {
    email: string
    oldPassword: string
    newPassword: string
}

type ResetPasswordInput = Pick<ChangePasswordInput, "newPassword"> & {
    email: string
}

type SendCodeInput = Pick<LoginUserInput, "email">

type VerifyCodeInput = SendCodeInput & {
    code: string
}


export const LOGIN_USER = async(info: LoginUserInput) => {
    try {
        const response:  ApiResponse<HomeownerRes> = await Axios({
            method: "POST",
            url: `/auth/driver/login`,
            data: info
        })

        if (response.status === 200) {
            return response.data.data
        } else {
            throw new Error("oops")
        } 
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const RESET_PASSWORD = async (info: ResetPasswordInput) => {
    try {
        // const response:  ApiResponse<HomeownerRes> = await Axios({
        //     method: "POST",
        //     url: `/auth/driver/reset-password`,
        //     data: info
        // })

        const response:any = await axios.post(`https://wastify-server.onrender.com/api/auth/driver/reset-password`, info)

        if (response.status === 200) {
            return response.data.data
        } else {
            throw new Error("oops")
        } 
    } catch (error) {
        throw error
    }
}

export const SEND_VERIFICATION_CODE = async (info: SendCodeInput) => {
    try {
        // const response:  ApiResponse<HomeownerRes> = await Axios({
        //     method: "POST",
        //     url: `/auth/driver/send-code`,
        //     data: info
        // })

        const response:any = await axios.post(`https://wastify-server.onrender.com/api/auth/driver/send-code`, info)

        console.log("response", response)

        if (response) {
            return response?.data?.data
        } else {
            throw new Error("oops")
        } 
    } catch (error) {
        // console.error(error)

        throw error
    }
}

export const VERIFY_CODE = async (info: VerifyCodeInput) => {
    try {
        // const response:  ApiResponse<HomeownerRes> = await Axios({
        //     method: "POST",
        //     url: `/auth/driver/verify-code`,
        //     data: info
        // })

        const response:any = await axios.post(`https://wastify-server.onrender.com/api/auth/driver/verify-code`, info)

        if (response.status === 200) {
            return response.data.data
        } else {
            throw new Error("oops")
        } 
    } catch (error) {
        throw error
    }
}