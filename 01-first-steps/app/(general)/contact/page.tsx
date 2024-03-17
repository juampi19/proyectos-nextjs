import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Pagina de contacto de la aplicacion',
    keywords: ['Contacto', 'formulario', 'datos']
}


export default function ContactPage() {
    return (
        <span className="text-5xl">Contact Page</span>
    )
}