import { mayorDeEdad } from "../components/Formulario";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Formulario from "../components/Formulario";

describe('funciones dentro del componente Formulario', () => {
    describe('mayorDeEdad', () => {
        test('debe retornar un boolean', () =>
        { 
            const result = mayorDeEdad(15)
            expect(typeof result).toBe('boolean')
        })
        test('debe retornar true si la entrada es 18', () =>
        { 
            const result = mayorDeEdad(18)
            expect(result).toBeTruthy()
        })
        test('debe retornar true si la entrada es mayor que 18', () =>
        { 
            const result = mayorDeEdad(20)
            expect(result).toBeTruthy()
        })
        test('debe retornar false si la entrada es menor que 18', () =>
        { 
            const result = mayorDeEdad(12)
            expect(result).toBeFalsy()
        })
        test('debe retornar null si la entrada es un numero negativo', () =>
        { 
            const result = mayorDeEdad(-1)
            expect(result).toBeNull()
        })
    })
})

describe('Componente Formulario', () => {

    let h2, avatar, textfieldNombre, textfieldEdad, button
    beforeEach(() => {
        render(<Formulario/>)
        h2 = screen.getByRole('heading', {level: 2})
        avatar = screen.getByRole('img')
        textfieldNombre = screen.getByLabelText('Nombre')
        textfieldEdad = screen.getByLabelText('Edad')
        button = screen.getByRole('button', {name: 'Enviar'})

    })

    test('La cabecera h2 se encuentra en el componente', () => {
        expect(h2).toBeInTheDocument();
    })

    test('El icono se encuentra en el componente', () => {
        expect(avatar).toBeInTheDocument();
    })

    test('El textfieldNombre se encuentra en el componente', () => {
        expect(textfieldNombre).toBeInTheDocument();
    })

    test('El  textfieldEdad se encuentra en el componente', () => {
        expect(textfieldEdad).toBeInTheDocument();
    })

    test('El boton se encuentra en el componente', () => {
        expect(button).toBeInTheDocument();
    })

    test('Enviar formulario', async() => {
        const user = userEvent.setup()
        await user.click(button)
        expect(screen.getByRole('heading', { level: 6})).toBeInTheDocument()
    })
    
})