// WhatsAppButton.js
import React from 'react';


const WhatsAppButton = () => {
    const handleWhatsAppShare = () => {
        const phoneNumber = '917863884525'; // Replace with your business phone number
        const deepLink = `whatsapp://send?phone=${encodeURIComponent(phoneNumber)}`;
        window.open(deepLink, '_blank');
      };

  return (
    <button
    className="whatsapp-button"
    onClick={handleWhatsAppShare}
    >
      Share on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
