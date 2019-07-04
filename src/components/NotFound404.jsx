import React from 'react';

/**
 * This component will display the 404 page when routed to NotFound.
 */
export default function Page404 ({ location }) {
    return (
        <div>
            <h2>Oops no page found at <code>{location.pathname}</code></h2>
        </div>
    )
}