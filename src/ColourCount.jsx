import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ColourCount.css";

export function ColourCount({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
