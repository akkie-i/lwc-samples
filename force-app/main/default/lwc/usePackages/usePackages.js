import { LightningElement } from "lwc";
import { dayjs } from "c/dayjs";
import { isSameOrBefore } from "c/dayjs";
import Pdfmake from "@salesforce/resourceUrl/Pdfmake";
import PdfmakeVfsFonts from "@salesforce/resourceUrl/PdfmakeVfsFonts";
import { loadScript } from "lightning/platformResourceLoader";
import { convert } from "c/xmlJs";

export default class UsePackages extends LightningElement {
  dayjsResult;
  isSameOrBeforeResult;
  xmlJsResult;

  style =
    "font-size: 1.4;font-weight: bold;border-bottom: 1px solid lightgrey;margin-top: 16px; margin-bottom: 16px;";

  async connectedCallback() {
    dayjs.extend(isSameOrBefore);
    this.dayjsResult = dayjs().format();
    this.isSameOrBeforeResult = dayjs("2020-01-01").isSameOrBefore(
      dayjs("2020-01-02")
    );

    await Promise.all([
      loadScript(this, Pdfmake),
      loadScript(this, PdfmakeVfsFonts)
    ])
      .then(() => {
        console.log("pdfmake load complete");
      })
      .catch((e) => console.error("componentMessage", e));

    const xmlObj = {
      declaration: {
        attributes: {
          version: "1.0",
          encoding: "utf-8"
        }
      },
      elements: [
        {
          type: "element",
          name: "parent",
          attributes: {
            attr: "attr_val"
          },
          elements: [
            {
              type: "element",
              name: "chid",
              elements: [
                {
                  type: "text",
                  text: "55.0"
                }
              ]
            }
          ]
        }
      ]
    };
    this.xmlJsResult = convert.js2xml(xmlObj, {
      compact: false,
      ignoreComment: true,
      spaces: 4
    });
  }

  download() {
    try {
      const docDef = {
        content: "This is an sample PDF printed with pdfMake."
      };
      window.pdfMake.createPdf(docDef).download("test.pdf");
    } catch (e) {
      console.error("pdfmakeError", JSON.stringify(e));
    }
  }
}
