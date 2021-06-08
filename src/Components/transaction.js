import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
export const Transaction = () => {

    const [amount, setAmount] = useState();
    const [remark, setRemark] = useState("");


    return (
        <form >
            <input 
                type="number" 
                value={amount} 
                onChange={ (e) => setAmount(e.target.value)}
                placeholder="Amount"
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Amount"} 
                />
            <input 
                type="text" 
                value={remark} 
                onChange={ (e) => setRemark(e.target.value)}
                placeholder="Remark"
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Remark"}
                />
            <Button variant="primary" size="lg" block>Save</Button>
        </form>
    )
}
