import logo from './logo-50.svg';
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
    return (
        <div className="App">
            <header>
                <span><img src={logo} className="App-logo" alt="logo"/>NICE DICTIONARY</span>
            </header>

            <main>
                <Dictionary defaultKeyword="welcome"/>
            </main>

            <footer className="App-footer">
                <small>Coded by <a href="https://www.linkedin.com/in/kristina-laktiushkina/">Kristina Lak </a>
                     and is open-sourced on <a href="https://github.com/crsbka/dictionary-react-app">GitHub</a> </small>
            </footer>

        </div>
    );
}
