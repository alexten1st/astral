import {
    LOG_IN,
    LOG_OUT,
    SELECT
  } from "./actionTypes";


export function loginUserAC(payload: string){
    return {type: LOG_IN, payload}
  }

export function logoutUserAC(payload: string){
    return {type: LOG_OUT, payload}
  }
export function selectItemAC(payload: {id:string, value:string}){
    return {type: SELECT, payload}
  }