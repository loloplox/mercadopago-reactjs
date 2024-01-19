import "./Producto.css"
import { Wallet } from "@mercadopago/sdk-react"
import axios from "axios"
import { useState } from "react"
import MercadoPago from "./MercadoPago.jsx"

export default function Producto() {
    const [preferenceId, setPreferenceId] = useState("")

    async function createPreference() {
        try {
            const response = await axios.post("http://localhost:8080/mercadopago/createPreference", {
                title: "Play Station 5",
                quantity: 1,
                price: 2999.00,
            })
            console.log(response.data)

            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    async function handleBuy() {
        const id = await createPreference()

        if (id) {
            setPreferenceId(id)
        }
    }

    return (
        <div className="product">
            <img
                src="https://www.lacuracao.pe/media/catalog/product/c/f/cfi-1215a_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
                alt=""/>
            <div className="product-info">
                <h1>Play Station 5</h1>
                <p>Play Station 5 de 512GB</p>
                <p className="price">S/. 2,999.00</p>
                <button onClick={ handleBuy }
                        className="btn btn-primary">Comprar
                </button>
                <MercadoPago preferenceId={ preferenceId }/>
            </div>
        </div>
    )
}