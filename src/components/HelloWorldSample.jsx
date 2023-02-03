import { createElement } from "react";

export function HelloWorldSample({ sampleText }) {
    return (
        <div className="widget-hello-world">
            <div className="title" >No kommmmt</div>
            Hello my friend: {sampleText}
        </div>
    )
}
