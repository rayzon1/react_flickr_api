import React from 'react';

export default function Page404 ({ location }) {


    return (
        <div>
            <h2>Oops no page found at <code>{location.pathname}</code></h2>
        </div>
    )
}