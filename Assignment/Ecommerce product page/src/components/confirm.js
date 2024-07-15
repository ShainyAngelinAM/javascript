
import React from 'react';
import { useNavigate} from 'react-router-dom'

function Confirm() {
    const navigate = useNavigate();
    const handleconfirm = () => {
        navigate('/');
        window.location.reload();
      };
  return (
    <div>
      <button onClick={handleconfirm} >Confirm</button>
    </div>
  );
}

export default Confirm;
