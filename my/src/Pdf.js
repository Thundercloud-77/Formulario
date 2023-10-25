
import React from 'react';
import QRCode from 'qrcode.react';

function PrintableQRCode({ qrContent }) {
  return (
    <div className="qr-code-container">
      <h3>Código QR para impresión:</h3>
      <QRCode value={qrContent} />
    </div>
  );
}

export default Pdfjsjs;
