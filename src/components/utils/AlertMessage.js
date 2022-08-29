import Alert from 'react-bootstrap/Alert'

export const ErrorMessage = (msg) => {
	return msg === null ? null : (
		<Alert variant='danger' className='col-sm-6 m-auto'>{msg}</Alert>
	)
}

export const SuccessMessage = (msg) => {
	return msg === null ? null : (
		<Alert variant='info' className='col-sm-6 m-auto'>{msg}</Alert>
	)
}

