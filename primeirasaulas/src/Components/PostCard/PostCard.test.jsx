import PostCard from './index';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

const props = {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    cover: 'img/img.png'
}

describe('<PostCard />', () => {
    test('should render PostCard correctly', () => {
        //const debug = mostra os elementos renderizados
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: 'title 1' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();

    });
});