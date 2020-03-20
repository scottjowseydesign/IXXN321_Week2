import React from 'react'
import Image from '../assets/img1.jpg';

export default function ContactCard(props) {
    return (
            <div className = 'Contact-Card'>
                <img src={Image} alt = 'Profile' />
                <h2>{props.firstName} {props.lastName}</h2>
                <h4>{props.jobTitle}</h4>
                <p>{props.emailAddress}</p>
                <p>{props.phoneNumber}</p>
            </div>
    )
}
