export const templateMetadataJson = {
  fileFormat: {
    charsetName: "UTF-8",
    fieldsDelimitedBy: ",",
    linesTerminatedBy: "\n"
  },
  objects: [
    {
      connector: "CSV",
      fullyQualifiedName: "sample_csv",
      label: "sample.csv",
      name: "sample_csv",
      fields: [
        {
          fullyQualifiedName: "Column1",
          name: "Column1",
          type: "Text",
          label: "名前"
        }
      ]
    }
  ]
};

export const schema = {
  type: "object",
  required: ["fileFormat", "objects"],
  properties: {
    fileFormat: {
      type: "object",
      properties: {
        charsetName: {
          type: "string",
          pattern: "UTF-8",
          required: true
        },
        fieldsDelimitedBy: {
          type: "string",
          pattern: /^[,]$/,
          required: true
        },
        linesTerminatedBy: {
          type: "string",
          pattern: "\n",
          required: true
        }
      }
    },
    objects: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        required: [
          "connector",
          "fullyQualifiedName",
          "name",
          "label",
          "fields"
        ],
        properties: {
          connector: {
            type: "string",
            pattern: "CSV"
          },
          fullyQualifiedName: {
            type: "string",
            format: "sfCustomObjectNameRule"
          },
          name: {
            type: "string",
            format: "sfCustomObjectNameRule"
          },
          label: {
            type: "string"
          },
          fields: {
            type: "array",
            minItems: 1,
            items: {
              type: "object",
              required: ["fullyQualifiedName", "name", "type", "label"],
              properties: {
                fullyQualifiedName: {
                  type: "string",
                  format: "sfCustomObjectNameRule"
                },
                name: {
                  type: "string",
                  format: "sfCustomObjectNameRule"
                },
                type: {
                  type: "string",
                  pattern: /^Text$|^Numeric$|^Date$/
                },
                label: {
                  type: "string"
                }
              }
            }
          }
        }
      }
    }
  }
};
