import Button from './index';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
    test('should render the button with text', () => {
        render(<Button text={"Load More"} />);

        const button = screen.getByRole('button', { name: /load more/i }); //captura o botão
        expect(button).toBeInTheDocument(); //espero que o botão esteja na tela
    });

    test('should call function on button click', () => {
        const func = jest.fn(); //cria uma função
        render(<Button text={"Load More"} onClick={func} />);

        const button = screen.getByRole('button', { name: /load more/i }); //captura o botão
        userEvent.click(button); //a biblioteca aciona o click USEREVENT É MAIS RECOMENDADO
        //fireEvent.click(button); //a biblioteca aciona o click


        expect(func).toHaveBeenCalled();
        expect(func).toHaveBeenCalledTimes(1); //espera-se 1 click no botão
    });
});