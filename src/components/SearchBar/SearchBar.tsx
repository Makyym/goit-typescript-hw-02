import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { FormEvent } from 'react';
const toastOptions = {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
}

type Props = {
    onSubmit: (value: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        const searchValue = (form.elements.namedItem("search") as HTMLInputElement).value.trim();
        if (searchValue === "") {
            toast.error("Please enter a search query", toastOptions);
            return;
        };
        onSubmit(searchValue);
        form.reset();
    };
    
    return (
        <header>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default SearchBar