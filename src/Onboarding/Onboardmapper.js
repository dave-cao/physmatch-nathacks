import React from 'react';
import OnboardCard from './OnboardCard';

function Onboardmapper(props) {
    return (
        <div>
            {props.clients.map((client, index) => (
                <OnboardCard
                    key={index}
                    name={client.name}
                    email={client.email}
                    phone={client.phone}
                    requested={client.requested}
                    extra_details={client.extra_details}
                />
            ))}
        </div>
    );
}

export default Onboardmapper;
