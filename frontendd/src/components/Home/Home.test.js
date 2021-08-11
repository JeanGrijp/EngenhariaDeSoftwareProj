import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "./Home";

describe('Testando página de login', () => {
    test('Deve mostrar os títulos de login', () =>{
        render(<Home />);

        const login = screen.getByText('Login')

        expect(login).toBeInTheDocument();
    });

    test('Valida se o botão existe', () => {
        render(<Home />);

        const buttonLogin = screen.getByRole('button', { name: /Entrar/i});
        expect(buttonLogin).toBeInTheDocument(); 
    });

    test('Verifica se depois de clicar no botão, ele vai pra outra tela', () => {
        render(<Home />);

        const buttonLogin = screen.getByRole('button', { name: /Entrar/i});
        fireEvent.click(buttonLogin);

        expect(screen.getByText("Login")).toBeInTheDocument();
    });

    test('Valida se o clique do botão está funcionando', () => {
        render(<Home />);

        const buttonLogin = screen.getByTestId('ButtonE');
        fireEvent.click(buttonLogin);

        expect(buttonLogin).toHaveTextContent('Button Clicked');
    });

});