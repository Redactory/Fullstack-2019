import React from 'react';

import Part from './Part';

function listCourseParts(props) {
    const courseParts = props.course.parts;

    const parts = courseParts.map(coursePart=> {
        return <Part key={coursePart.id} part={coursePart.name} exercises={coursePart.exercises}/>
    });

    return parts;
}

export default function Content(props) {
    return (
        <div>
            {listCourseParts(props)}
        </div>
    );
}