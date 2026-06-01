// html2pdf.js ships no type definitions; this minimal shim is enough for our use.
declare module 'html2pdf.js' {
  interface Html2PdfWorker {
    set(opt: Record<string, unknown>): Html2PdfWorker;
    from(element: HTMLElement | string): Html2PdfWorker;
    save(filename?: string): Promise<void>;
    then(onFulfilled: () => void): Html2PdfWorker;
  }
  function html2pdf(): Html2PdfWorker;
  export default html2pdf;
}
