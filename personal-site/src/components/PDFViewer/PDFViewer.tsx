import { useState } from "react";
import { Document, Page } from "react-pdf";

type PDFViewerProps = {
  fileName: string;
}

const PDFViewer = ({fileName}: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }
  console.info({fileName})
  return ( 
    <div className="pdf-viewer">
      <Document file={`/assets/${fileName}`} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
   );
}
 
export default PDFViewer;