import { useEffect } from "react"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"

export default function MercadoPago({ preferenceId }) {


    useEffect(() => {
        initMercadoPago(
            "TEST-79a1dd0b-7b2c-4386-8d30-27ca4f5454e6",
            {
                locale: "es-PE"
            }
        )
    }, [])


    return (
        <>
            { preferenceId && (
                <Wallet
                    initialization={ { preferenceId: preferenceId } }
                    customization={ { texts: { valueProp: "smart_option" } } }/>
            ) }
        </>
    )
}