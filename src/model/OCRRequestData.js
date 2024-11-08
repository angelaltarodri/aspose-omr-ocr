/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="OCRRequestData.js">
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
        define(['ApiClient'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'));
    } else {
        // Browser globals (root is window)
        if (!root.Asposeocrcloud) {
            root.Asposeocrcloud = {};
        }
        root.Asposeocrcloud.OCRRequestData = factory(root.Asposeocrcloud.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';

    /**
     * The OCRRequestData model module.
     * @module model/OCRRequestData
     * @version 20.12.0
     */

    /**
     * Constructs a new <code>OCRRequestData</code>.
     * Request data to recognize specific regions on image.
     * @alias module:model/OCRRequestData
     * @class
     * @param regions Region on image to recognize in specific format.
     * @param language Recognition language. English by default.
     * @param makeSkewCorrect Option to enable skew correction algorithm. False bt default
     */
    var exports = function(regions, language, makeSkewCorrect) {
        var _this = this;

        _this['regions'] = regions;
        _this['language'] = language;
        _this['makeSkewCorrect'] = makeSkewCorrect;
    };

    /**
     * Constructs a <code>OCRRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OCRRequestData} obj Optional instance to populate.
     * @return {module:model/OCRRequestData} The populated <code>OCRRequestData</code> instance.
     */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();

            if (data.hasOwnProperty('regions')) {
                obj['regions'] = ApiClient.convertToType(data['regions'], 'OCRRegion[]');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'Language');
            }
            if (data.hasOwnProperty('makeSkewCorrect')) {
                obj['makeSkewCorrect'] = ApiClient.convertToType(data['makeSkewCorrect'], 'boolean');
            }
        }
        return obj;
    }

    /**
     * Region on image to recognize in specific format.
     * @member {OCRRegion[]} code
     */
    exports.prototype['regions'] = undefined;
    /**
     * Recognition language. English by default.
     * @member {Language} language
     */
    exports.prototype['language'] = undefined;
    /**
     * Option to enable skew correction algorithm. False bt default
     * @member {boolean} makeSkewCorrect
     */
    exports.prototype['makeSkewCorrect'] = undefined;

    return exports;
}));
