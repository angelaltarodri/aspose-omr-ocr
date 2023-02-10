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
import {GenerateTemplate} from "../src/api/generateTemplate";
import {PageSettings} from "../src/model/pageSettings";
import {OmrGenerateTask} from "../src/model/OMRGenerateTask";
import {OMRResponse} from "../src/model/OMRResponse";
import fs from "fs";
import path from "path";
_chai.expect;

@suite class GenerateTemplateTest {
     @test async "GenerateTemplateApiTest" () {
        let common: Common = new Common();
        await common.init();
        let url: string = common.GetURL();
        let apiClient: ApiClient = new ApiClient(url, common.config);
        let instance = new GenerateTemplate(apiClient);

        let templateLogosImagesNames = ["logo1.jpg", "logo2.png"];
        var markupFile =
            await fs.readFileSync(path.join(common.GetDataFolderDir(), "Aspose_test.txt"));

        let images:{ [key: string]: string; } = {};
        for (let i = 0; i < templateLogosImagesNames.length; i++) {
          let logo: string = fs.readFileSync(path.join(common.GetDataFolderDir(), templateLogosImagesNames[i])).toString("base64");
          images[templateLogosImagesNames[i]] = logo;
        }    

        let settings:PageSettings = {
            fontFamily: "Segoe UI",
            fontStyle:"Regular",
            fontSize:12,
            paperSize:"A4",
            bubbleColor:"Black",
            pageMarginLeft:210,
            orientation:"Vertical",
            bubbleSize:"Normal",
            outputFormat:"Png"
        };
        let task: OmrGenerateTask = {
            markupFile: markupFile.toString("base64"),
            settings,
            images,
        };

        let templateId: string = await instance.postGenerateTemplate(task);

        expect(templateId == "" || templateId == null).to.be.equal(false);

        let generationResult : OMRResponse = null;
        while (true) {
            generationResult = await instance.getGenerateTemplate(templateId);
        
            if (generationResult.responseStatusCode == "Ok") {
              break;
            }
            console.log("Wait, please! Your request is still being processed");
            await new Promise(r => setTimeout(r, 5000));
        }

        expect(generationResult.responseStatusCode).to.be.equal("Ok");
        expect(generationResult.error).to.be.equal(null);
        expect(generationResult.results.length > 1).to.be.equal(true);
    }
}