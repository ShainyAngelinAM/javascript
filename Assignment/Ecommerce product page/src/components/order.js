
import React from 'react';
import { useNavigate} from 'react-router-dom'

function Order() {
    const navigate = useNavigate();
    const handleorder = () => {
        navigate('/');
        window.location.reload();
      };
  return (
    <div>
      <h1>Order Confirmed</h1>
      <p>Thank you for your purchase!</p>
      <button onClick={handleorder} >Confirm</button>
    </div>
  );
}

export default Order;
