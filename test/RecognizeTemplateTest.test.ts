/*
 * Copyright (C) 2022 Aspose Pty Ltd. All Rights Reserved.
 *
 * Licensed under the MIT License (hereinafter the "License");
 * you may not use this file except in accordance with the License.
 * You can obtain a copy of the License at
 *
 *      https://github.com/aspose-omr-cloud/aspose-omr-cloud-dotnet/blob/master/LICENSE
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';
import {Common} from "./Common";
import {ApiClient} from "../src/ApiClient";
import {RecognizeTemplate} from "../src/api/recognizeTemplate";
import {OmrRecognizeTask} from "../src/model/OmrRecognizeTask";
import {OMRResponse} from "../src/model/OMRResponse";
import fs from "fs";
import path from "path";
_chai.expect;

@suite class RecognizeTemplateTest {
     @test async "RecognizeTemplateApiTest" () {
        let common: Common = new Common();
        await common.init();
        let url: string = common.GetURL();
        let apiClient: ApiClient = new ApiClient(url,common.config);
        let instance = new RecognizeTemplate(apiClient);

        // get the omr file
        let omrFile = await fs.readFileSync(path.join(common.GetResultFolderDir(), "Aspose_test.omr"));
        // set up recognition threshold
        let recognitionThreshold = 30;

        // get the filled template
        let image = await fs.readFileSync(path.join(common.GetDataFolderDir(), "Aspose_test.jpg"));
        let images = [image.toString("base64")];

        // Set up request
        let task: OmrRecognizeTask = {
            omrFile:omrFile.toString("base64"),
            recognitionThreshold,
            images
        };

        // call image recognition
        let templateId = await instance.postRecognizeTemplate(task) ;

        expect(templateId == "" || templateId == null).to.be.equal(false);

        let recognitionResult : OMRResponse = null;
        while (true) {
            recognitionResult = await instance.getRecognizeTemplate(templateId);
        
            if (recognitionResult.responseStatusCode == "Ok") {
              break;
            }
            console.log("Wait, please! Your request is still being processed");
            await new Promise(r => setTimeout(r, 5000));
        }

        expect(recognitionResult.responseStatusCode).to.be.equal("Ok");
        expect(recognitionResult.error).to.be.equal(null);
        expect(recognitionResult.results.length > 0).to.be.equal(true);
    }
}