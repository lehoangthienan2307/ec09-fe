import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {ErrorMessage, SuccessMessage} from '../../utils/AlertMessage'
import {Col, Container,  Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';




function ActivationEmail() {
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post(`/auth/activation`, {activation_token})
                    setSuccess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    },[activation_token])

    return (
       <>
         <div className="p-5 mb-5">
            {err && ErrorMessage(err)}
            {success && SuccessMessage(success)}
         </div>
    </>
        
    )
}

export default ActivationEmail