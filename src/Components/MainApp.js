import React from 'react'
import Password from '../Components/Password/Password';
import UserPasswordState from '../State/User password/UserPasswordState';

export default function MainApp() {

    return (
        <>
            <UserPasswordState>
                <Password></Password>
            </UserPasswordState>
        </>
    )
}
