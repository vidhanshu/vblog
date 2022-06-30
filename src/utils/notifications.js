import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const successUpdating = () => toast("updated successfully", { type: "success", autoClose: 1000 })
export const successDeletion = () => toast("deleted successfully", { type: "success", autoClose: 1000 })
export const warningDeletion = () => toast("deleted successfully", { type: "warning", autoClose: 1000 })
export const failedUpdating = () => toast("updating failed", { type: "error", autoClose: 1000 })
export const failedDeletion = () => toast("deletion failed", { type: "error", autoClose: 1000 })
export const successLogout = () => toast("logged out successfully", { type: "success", autoClose: 1000 })
export const failedLogout = () => toast("logged out failed", { type: "error", autoClose: 1000 })
export const successLogin = () => toast("logged in successfully", { type: "success", autoClose: 1000 })
export const failedLogin = () => toast("logged in failed", { type: "error", autoClose: 1000 })
export const successRegister = () => toast("registered successfully", { type: "success", autoClose: 1000 })
export const failedRegister = () => toast("registration failed", { type: "error", autoClose: 1000 })
export const fillAllDetails = () => toast("please fill all details", { type: "info", autoClose: 1000 })
export const successCustom = (txt) => toast(txt, { type: "success", autoClose: 1000 })
export const failureCustom = (txt) => toast(txt, { type: "error", autoClose: 1000 })
export const warningCustom = (txt) => toast(txt, { type: "warning", autoClose: 1000 })
export const infoCustom = (txt) => toast(txt, { type: "info", autoClose: 1000 })