import logo from './logo-50.svg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <span><img src={logo} className="App-logo" alt="logo"/>DICTIONARY</span>

                <main>
                    <Dictionary defaultKeyword="welcome"/>
                </main>

                <small>
                    <footer className="text-center">
                        Coded by Krima
                    </footer>
                </small>


            </header>
        </div>
    );
}
