/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="OcrApi.js">
*   Copyright (c) 2021 Aspose.OCR for Cloud
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ApiClient',
            'model/OCRResponse',
            'model/Language'
        ], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('../../../aspose-ocr-cloud-nodejs/src/ApiClient'),
            require('../../../aspose-ocr-cloud-nodejs/src/model/OCRResponse'),
            require('../../../aspose-ocr-cloud-nodejs/src/model/Language')
        );
    } else {
        // Browser globals (root is window)
        if (!root.Asposeocrcloud) {
            root.Asposeocrcloud = {};
        }
        root.Asposeocrcloud.OcrApi = factory(
            root.Asposeocrcloud.ApiClient,
            root.Asposeocrcloud.OCRResponse,
            root.Asposeocrcloud.Language
        );
    }
}(this, function(ApiClient,
                 OCRResponse, Language) {
    'use strict';

    /**
     * Document service.
     * @module api/OcrApi
     * @version 21.02.0
     */

    /**
     * Constructs a new OcrApi.
     * @alias module:api/OcrApi
     * @class
     * @param {Object} conf API client configuration implementation to use,
     */
    var exports = function(conf) {
        this.apiClient = ApiClient.instance;
        this.apiClient.setConfig(conf);




        /**
         * Callback function to receive the result of the RecognizeFromUrlAuto operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Return OCR-ed text of any image in WEB.. Function worked with recommended settings.
         * If You want to change recognition language or turn of image processing features use RecognizeFromUrl function
         * @param {String} imageUrl Source page URL.
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeFromUrlAuto = function(imageUrl, callback) {
            var postBody = null;

            // verify the required parameter 'sourceUrl' is set
            if (imageUrl === undefined || imageUrl === null) {
                throw "Missing the required parameter 'imageUrl' when calling RecognizeFromUrlAuto";
            }

            var pathParams = {};
            var queryParams = {
                'url': imageUrl
            };

            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/recognize', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };




        /**
         * Callback function to receive the result of the RecognizeFromUrl operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Return OCR-ed text of any image in WEB. Language, Skew Correction and Document Structure Recognition algorithms are optional
         * @param {String} imageUrl Source page URL.
         * @param language Recognition language. English by default.
         * @param skewCorrect Option to enable skew correction algorithm. True bt default
         * @param makeDsr Option to switch Document Structure recognition algorithm. True by default.
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeFromUrl = function(imageUrl, language = Language.English, skewCorrect = true, makeDsr = true, callback) {
            var postBody = null;

            // verify the required parameter 'sourceUrl' is set
            if (imageUrl === undefined || imageUrl === null) {
                throw "Missing the required parameter 'imageUrl' when calling RecognizeFromUrl";
            }

            var pathParams = {};
            var queryParams = {
                'url': imageUrl
            };

            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/recognize', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };




        /**
         * Callback function to receive the result of the RecognizeFromUrl operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Return OCR-ed text of image. Send an image file directly to the server.
         * @param {Object.<Buffer, ArrayBuffer>} file File to upload. Only Buffer, ArrayBuffer accepted.
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeFromContentAuto = function(file, callback) {
            var postBody = file;

            // verify the required parameter 'file' is set
            if (file === undefined || file === null) {
                throw "Missing the required parameter 'file' when calling RecognizeFromContentAuto";
            }

            var pathParams = {};
            var queryParams = {};

            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/octet-stream'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/recognize', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };


        /**
         * Callback function to receive the result of the RecognizeFromUrl operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Return OCR-ed text of image. Send an image file directly to the server.
         * Recognize Buffered file with custom configuration
         * @param {Object.<Buffer, ArrayBuffer>} file File to upload. Only Buffer, ArrayBuffer accepted.
         * @param language Recognition language. English by default.
         * @param skewCorrect Option to enable skew correction algorithm. True bt default
         * @param makeDsr Option to switch Document Structure recognition algorithm. True by default.
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeFromContent = function(file, language = Language.English, skewCorrect = true, makeDsr = true, callback) {
            var postBody = file;

            // verify the required parameter 'file' is set
            if (file === undefined || file === null) {
                throw "Missing the required parameter 'file' when calling uploadFile";
            }

            var pathParams = {};
            var queryParams = {
                language: language,
                skewCorrect: skewCorrect,
                makeDsr: makeDsr
            };

            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/octet-stream'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/recognize', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };





        /**
         * Callback function to receive the result of the RecognizeFromUrl operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Make OCR of image. Recognize image located in Aspose.Storage
         * Recognize Buffered file with custom configuration
         * @param {String} name Filename in storage
         * @param {String?} storage Your storage name
         * @param {String?} folder Folder in your storage (folder path)
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeFromStorageAuto = function(name, folder, storage, callback)
        {
            var postBody = null;

            if (name === undefined || name === null) {
                throw "Missing the required parameter 'name' when calling RecognizeFromStorage";
            }
            // storage & folder can be null

            var pathParams = {
                name: name
            };
            var queryParams = {
                storage: storage,
                folder: folder,
                language: Language.English,
                skewCorrect: true,
                makeDsr: true
            };

            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/octet-stream'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/{name}/recognize', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };





        /**
         * Callback function to receive the result of the RecognizeFromUrl operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * OCR Image located in your Aspose.Storage with optional settings
         * @param {String} name Filename in storage
         * @param {String?} storage Your storage name
         * @param {String?} folder Folder in your storage (folder path)
         * @param {Language} language Recognition language. English by default.
         * @param {Boolean} skewCorrect Option to enable skew correction algorithm. True bt default
         * @param {Boolean} makeDsr Option to switch Document Structure recognition algorithm. True by default.
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeFromStorage = function(
            name,
            folder,
            storage,
            language = Language.English,
            skewCorrect = true,
            makeDsr = true,
            callback)
        {

            var postBody = null;

            if (name === undefined || name === null) {
                throw "Missing the required parameter 'name' when calling RecognizeFromStorage";
            }
            // storage & folder can be null

            var pathParams = {
                name: name
            };
            var queryParams = {
                storage: storage,
                folder: folder,
                language: language,
                skewCorrect: skewCorrect,
                makeDsr: makeDsr
            };

            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/octet-stream'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/{name}/recognize', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };




        /**
         * Callback function to receive the result of the RecognizeFromUrl operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Recognize selected text regions of any image in WEB.
         * @param {String} imageUrl Source page URL.
         * @param {OCRRequestData} requestData
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeRegionsFromUrl = function(imageUrl, requestData, callback) {
            var postBody = null;

            // verify the required parameter 'sourceUrl' is set
            if (imageUrl === undefined || imageUrl === null) {
                throw "Missing the required parameter 'imageUrl' when calling RecognizeRegionsFromUrl";
            }

            // verify the required parameter 'sourceUrl' is set
            if (requestData === undefined || requestData === null) {
                throw "Missing the required parameter 'requestData' when calling RecognizeRegionsFromUrl";
            }

            var pathParams = {};
            var queryParams = {}

            var headerParams = {};
            var formParams = {
                'url': "\"" + imageUrl + "\"",
                'requestData': JSON.stringify(requestData)
            };

            var contentTypes = ['multipart/form-data'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/recognize-regions-url', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };


        /**
         * Callback function to receive the result of the RecognizeFromUrl operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Recognize selected text regions of image located in Aspose.Storage
         * @param {OCRRequestDataStorage} requestData
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeRegionsFromStorage = function(requestData, callback) {
            var postBody = null;

            // verify the required parameter 'sourceUrl' is set
            if (requestData === undefined || requestData === null) {
                throw "Missing the required parameter 'requestData' when calling RecognizeRegionsFromStorage";
            }

            var pathParams = {};
            var queryParams = {}

            var headerParams = {};
            var formParams = {
                'requestData': JSON.stringify(requestData)
            };

            var contentTypes = ['multipart/form-data'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/recognize-regions-storage', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };


        /**
         * Callback function to receive the result of the RecognizeFromUrl operation.
         * @callback module:api/OcrApi~PostRecognizeFromUrlCallback
         * @param {String} error Error message, if any.
         * @param {module:model/OCRResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Recognize selected text regions of any image. Send image file directly to server.
         * @param {Object.<Buffer, ArrayBuffer>} file File to upload. Only Buffer, ArrayBuffer accepted.
         * @param {OCRRequestDataStorage} requestData
         * @param {module:api/OcrApi~PostRecognizeFromUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/OCRResponse}
         */
        this.RecognizeRegionsFromContent = function(file, requestData, callback) {
            var postBody = null;

            // verify the required parameter 'sourceUrl' is set
            if (requestData === undefined || requestData === null) {
                throw "Missing the required parameter 'requestData' when calling RecognizeRegionsFromContent";
            }

            var pathParams = {};
            var queryParams = {}

            var headerParams = {};
            var formParams = {
                'requestData': JSON.stringify(requestData),
                file: file
            };

            var contentTypes = ['multipart/form-data'];
            var accepts = ['application/json'];
            var returnType = OCRResponse;

            return this.apiClient.callApi(
                '/ocr/recognize-regions-content', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

    };

    return exports;
}));
