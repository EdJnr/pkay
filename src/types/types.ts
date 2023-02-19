import {ReactNode} from "react"
import { JsxElement } from "typescript"

export interface pageTypes{
    path : string
    exact ?: boolean
    component : any
}

export interface linkTypes{
    key ?: number
    label ?: any
    id ?: number,
    name ?: string
    path ?: string
}
export interface cardTypes{
    id ?: number
    title ?: string
    message ?: string
    image ?: string
    icon ?: string
    path ?: string
}