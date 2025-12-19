import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume1 = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume1" />
        <h2>Ayush_Gupta.pdf</h2>
        <a
          href="files/Ayush_Gupta.pdf"
          download
          className="cursor-pointer"
          title="Download resume1"
        >
          <Download className="icon" />
        </a>
      </div>
      <Document file="files/Ayush_Gupta.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};

const Resume1Window = WindowWrapper(Resume1, "resume1");

export default Resume1Window;
