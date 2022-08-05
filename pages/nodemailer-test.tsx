import React from 'react'
import { useSession } from 'next-auth/react'

const NodemailerTest = () => {
    const { data: session } = useSession();

    const testNodeMailer = async () => {
        const data = await fetch('/api/mail/even-registration-mail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : session?.user.id,
                email : session?.user.email,
                image : session?.user.image,
                name : session?.user.name
            })
        })
    }

    return (
        <button className=' btn-blue' onClick={testNodeMailer}>nodemailerTest Button</button>
    )
}

export default NodemailerTest