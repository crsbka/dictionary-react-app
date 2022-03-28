import React from "react";
import Synonyms from "./Synonyms.js";


export default function Meaning(props) {

    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>

            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong>{definition.definition}
                            <br/>

                            <strong>Example: </strong>{definition.example}

                            <Synonyms synonyms={definition.synonyms}/>

                        </p>
                    </div>
                )
            })}

        </div>
    );
}