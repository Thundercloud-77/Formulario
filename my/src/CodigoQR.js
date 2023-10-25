import React from 'react';
import QRCode from 'qrcode.react';
import { useReactToPrint } from 'react-to-print'; // Importa useReactToPrint

function QRCodeDisplay({ qrContent }) {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="qr-code-container">
      <h3>Código QR con la información:</h3>
      <QRCode value={qrContent} />
      <button onClick={handlePrint}>Imprimir en PDF</button> {/* Botón de impresión */}
      <PrintableQRCode ref={componentRef} qrContent={qrContent} />
    </div>
  );
}

export default CodigoQRjs;
