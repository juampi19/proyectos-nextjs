import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Pagina about de la aplicacion'
}


export default function  AboutPage() {
    
    return (
        <span className="text-7xl">About page</span>
    )
}