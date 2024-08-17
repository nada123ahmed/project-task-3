
import React from 'react';
import DeveloperSocial from '../DeveloperSocial/DeveloperSocial';

function DeveloperSection() {
    return (
        <div>
            <DeveloperSocial name="GitHub" />
            <DeveloperSocial name="Frontend Mentor" />
            <DeveloperSocial name="LinkedIN" />
            <DeveloperSocial name="Twitter" />
            <DeveloperSocial name="Instagram" />
        </div>
    );
}

export default DeveloperSection;