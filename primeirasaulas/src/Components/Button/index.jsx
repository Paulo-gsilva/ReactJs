import './style.css';

export default function Button({ onClick }) {

    return (
        <button className="button" onClick={onClick}>Mais Cards</button>
    );
}