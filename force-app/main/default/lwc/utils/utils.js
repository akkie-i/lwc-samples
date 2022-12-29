import { Buffer } from "c/buffer";
import { _ } from "c/lodash";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { jsonschema } from "c/jsonschema";
const Validator = jsonschema.Validator;

/**
 * @param  {...string} parts
 * @returns {string}
 */
const base64Encode = (...parts) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const offset = reader.result.indexOf(",") + 1;
      resolve(reader.result.slice(offset));
    };
    reader.readAsDataURL(new Blob(parts));
  });
};

/**
 *
 * @param {string} text
 * @returns {string}
 */
const base64Decode = (text) => {
  return Buffer.from(text, "base64").toString();
};

/**
 * @param {object} fileObject
 * @returns {Array<string>}
 */
const convertCsvToArray = (fileObject) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
      // テキスト化したCSVの中身を取得
      const textFromFileLoaded = fileLoadedEvent.target.result;
      resolve(textFromFileLoaded.split(/[\r|\n|\r\n]+/).filter((v) => v));
    };
    // ファイルオブジェクトをテキストで読み込み
    fileReader.readAsText(fileObject, "UTF-8");
  });
};

/**
 *
 * @param {Array<string | number | boolean | null | undefined>} array
 * @param {number} size
 * @returns {Array<Array<string | number | boolean | null | undefined>>}
 */
const arrayChunk = (array, size) => {
  return _.chunk(array, size).map((v) => [...v]);
};

/**
 *
 * @param {string} input
 * @returns {boolean}
 */
const sfCustomObjectNameRule = (input) => {
  return (
    // 先頭が英字で始まる
    input.match(/^[a-zA-Z].*$/) &&
    // 半角英数字_以外は使えない
    input.match(/^[a-zA-Z0-9\\_]*?$/) &&
    // _で終わらない
    input.match(/^(?!.*_$).*$/)
  );
};

/**
 *
 * @param {string} funcName
 * @param {() => boolean} func
 * @return {void}
 */
const extendValidator = (funcName, func) => {
  Validator.prototype.customFormats[funcName] = func;
};

/**
 *
 * @param {object} target
 * @param {object} schema
 * @returns {boolean}
 */
const isValidJsonFormat = (target, schema) => {
  const validator = new Validator();
  return validator.validate(target, schema).valid;
};

/**
 *
 * @param {number} second
 * @returns {Promise<any>}
 */
const delay = (second) => {
  const ms = second * 1000;
  // eslint-disable-next-line @lwc/lwc/no-async-operation
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 *
 * @param {any} that
 * @param {string} title
 * @param {string} message
 * @param {info | success | warning | error} variant
 * @returns
 */
const showToastMessage = (that, title, message, variant) => {
  that.dispatchEvent(new ShowToastEvent({ title, message, variant }));
};

export {
  base64Encode,
  base64Decode,
  convertCsvToArray,
  arrayChunk,
  showToastMessage,
  sfCustomObjectNameRule,
  extendValidator,
  isValidJsonFormat,
  delay
};
