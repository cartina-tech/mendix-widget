import { createElement } from "react";
import JacketSvgIcon1 from "../components/JacketSvgIcon1";
import JacketSvgIcon2 from '../components/JacketSvgIcon2';

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ColourCount.css";

export function ColourCount({ sampleText }) {
    return (
        <div className="App">
          <header className="App-header">
            <JacketSvgIcon2 />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}
