import React from 'react'
import "./purchaseOrValidate.scss"

const PurchaseOrValidate = () => {
  
   const handlePurchase = () => {

   }
   
  return (
    <div className="purchaseOrValidate">
      <div className="purchasewrapper">
        <div className="purchase" onClick={handlePurchase}>
          <span>Purchase</span>
        </div>
  
        <div className="validate">
          <span>Validate</span>
        </div>
        <div className="or">
          <span>Or</span>
        </div>
        
      </div>

    </div>
  )
}

export default PurchaseOrValidate
