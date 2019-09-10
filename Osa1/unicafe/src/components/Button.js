import React from 'react';

export default function Button(props) {
    return <button onClick={() => {props.setHandler(props.value+1)}}>{props.text}</button>;
}