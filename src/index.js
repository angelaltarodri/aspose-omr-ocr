/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="index.js">
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

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            'ApiClient',
            'api/OcrApi',
            'api/StorageApi'],
            'model/OCRRect',
            'model/OCRRegion',
            'model/OCRRequestData',
            'model/OCRRequestDataStorage',
            'model/Language',
            factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('./ApiClient'),
            require('./api/OcrApi'),
            require('./api/StorageApi'),
            require('./model/OcrRect'),
            require('./model/OCRRegion'),
            require('./model/OCRRequestData'),
            require('./model/OCRRequestDataStorage'),
            require('./model/Language')
        );
    }
}(function (ApiClient, OcrApi, StorageApi, OCRRect, OCRRegion, OCRRequestData, OCRRequestDataStorage, Language) {
    'use strict';

    /**
     * Aspose.OCR Cloud SDK for Javascript source code..<br>
     * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
     * <p>
     * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
     * <pre>
     * var Asposeocrcloud = require('index'); // See note below*.
     * var xxxSvc = new Asposeocrcloud.XxxApi(); // Allocate the API class we're going to use.
     * var yyyModel = new Asposeocrcloud.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
     * and put the application logic within the callback function.</em>
     * </p>
     * <p>
     * A non-AMD browser application (discouraged) might do something like this:
     * <pre>
     * var xxxSvc = new Asposeocrcloud.XxxApi(); // Allocate the API class we're going to use.
     * var yyy = new Asposeocrcloud.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * </p>
     * @module index
     * @version 20.12.0
     */
    var exports = {
        /**
         * The ApiClient constructor.
         * @property {module:ApiClient}
         */
        ApiClient: ApiClient,

        /**
         * The OcrApi service constructor.
         * @property {module:api/OcrApi}
         */
        OcrApi: OcrApi,

        /**
         * The StorageApi service constructor.
         * @property {module:api/StorageApi}
         */
        StorageApi: StorageApi,

        OCRRect: OCRRect,
        OCRRegion: OCRRegion,
        OCRRequestData: OCRRequestData,
        OCRRequestDataStorage: OCRRequestDataStorage,
        Language: Language

    };

    return exports;
}));
