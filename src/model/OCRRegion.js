/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="OCRRegion.js">
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
        root.Asposeocrcloud.OCRRegion = factory(root.Asposeocrcloud.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';

    /**
     * The OCRRegion model module.
     * @module model/OCRRegion
     * @version 20.12.0
     */

    /**
     * Constructs a new <code>OCRRegion</code>.
     * Represents information about strict regions to recognize text
     * @alias module:model/OCRRegion
     * @class
     * @param rect Coordinates of a rectangle to recognize
     * @param order  The serial number of the region for the formation of the text
     */
    var exports = function(order, rect) {
        var _this = this;

        _this['rect'] = rect;
        _this['order'] = order;
    };

    /**
     * Constructs a <code>OCRRegion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OCRRegion} obj Optional instance to populate.
     * @return {module:model/OCRRegion} The populated <code>OCRRegion</code> instance.
     */
    exports.constructFromObject = function(data, obj) {
        if (regions) {
            obj = obj || new exports();

            if (data.hasOwnProperty('rect')) {
                obj['rect'] = ApiClient.convertToType(data['rect'], 'OCRRect');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Integer');
            }
        }
        return obj;
    }

    /**
     * Coordinates of a rectangle to recognize
     * @member {OCRRect} rect
     */
    exports.prototype['rect'] = undefined;
    /**
     * The serial number of the region for the formation of the text
     * @member {Integer} order
     */
    exports.prototype['order'] = undefined;

    return exports;
}));
