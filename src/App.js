import logo from './logo.svg';
import './App.css';
import {ReduxMainView} from "./redux-example/redux-main";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="location-view">
                    <ReduxMainView/>
                </div>
            </header>
        </div>
    );
}

export default App;
