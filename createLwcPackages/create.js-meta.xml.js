import * as convert from "xml-js";

export const createMetaXml = () => {
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
        name: "LightningComponentBundle",
        attributes: {
          xmlns: "http://soap.sforce.com/2006/04/metadata"
        },
        elements: [
          {
            type: "element",
            name: "apiVersion",
            elements: [
              {
                type: "text",
                text: "55.0"
              }
            ]
          },
          {
            type: "element",
            name: "isExposed",
            elements: [
              {
                type: "text",
                text: "true"
              }
            ]
          }
        ]
      }
    ]
  };

  return convert.js2xml(xmlObj, {
    compact: false,
    ignoreComment: true,
    spaces: 4
  });
};
