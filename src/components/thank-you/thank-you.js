import React from 'react'
import './thank-you.css'
import thanks from '../../assets/thanks.gif'
export default function ( ) {
	return (
		<div className="thank-you">
			<img role="presentation" src={thanks}/>
			<h3>Thank you for your purchase!</h3>
		</div>
	)
}
