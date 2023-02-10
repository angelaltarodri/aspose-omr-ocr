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

import path from "path";
import fs from "fs";
import { Config } from "./src/model/Config";
import { GenerateTemplate } from "./src/api/generateTemplate";
import { ApiClient } from "./src/ApiClient";
import { PageSettings } from "./src/model/pageSettings";
import { OmrGenerateTask } from "./src/model/OMRGenerateTask";
import { OMRResponse } from "./src/model/OMRResponse";
import { OmrRecognizeTask } from "./src/model/OMRRecognizeTask";
import { RecognizeTemplate } from "./src/api/recognizeTemplate";

export abstract class Demo {
  public static configFileName: string = "test_config.json";

  public static demoDataSubmoduleName: string = "aspose-omr-cloud-demo-data";

  public static templateGenerationFileName: string = "Aspose_test.txt";
  public static templateImageName: string = "Aspose_test.jpg";
  public static omrFileName: string = "Aspose_test.omr";
  public static resultFileName: string = "Aspose_test.csv";
  public static templateLogosImagesNames = [
    "logo1.jpg",
    "logo2.png",
  ];
  public static config: Config;

  public static apiClient: ApiClient;
  public static generateApi: GenerateTemplate;
  public static recognizeApi: RecognizeTemplate;

  public static async init() {
    let configFilePath: string = path.join(
      __dirname,
      "..",
      this.demoDataSubmoduleName,
      this.configFileName
    );
    this.config = Config.parseJson(await fs.readFileSync(configFilePath).toString());

    if (!this.config.basePath) {
        throw new Error("Unable to find file" + configFilePath);
    }

    this.config.dataFolder = path.join(__dirname,"..",this.demoDataSubmoduleName,this.config.dataFolder);
    this.config.resultFolder = path.join(__dirname,"..",this.demoDataSubmoduleName,this.config.resultFolder);

    this.apiClient = new ApiClient(this.config.basePath,this.config);

    this.generateApi = new GenerateTemplate(this.apiClient);
    this.recognizeApi = new RecognizeTemplate(this.apiClient);

  }

  public static async runDemo() {
    await this.init();

    /// <summary>
    /// STEP 1: Queue the template source file for generation
    /// </summary>
    console.log("\t\tGenerate template...");
    let templateId : string = await this.generateTemplate();
    
    /// <summary>
    /// STEP 2: Fetch generated printable form and recognition pattern
    /// </summary>
    console.log("\t\tGet generation result by ID...");
    let generationResult: OMRResponse = await this.getGenerationResultById(templateId);

    /// <summary>
    /// STEP 3: Save the printable form and recognition pattern into result_folder
    /// </summary>
    console.log("\t\tSave generation result...");
    await this.saveGenerationResult(generationResult);

    /// <summary>
    /// STEP 4: Queue the scan / photo of the filled form for recognition
    /// </summary>
    console.log("\t\tRecognize image...");
    let recognizeTemplateId: string = await this.recognizeImage(
        path.join(this.config.dataFolder, this.templateImageName),
        path.join(this.config.resultFolder, this.omrFileName));

    /// <summary>
    /// STEP 5: Fetch recognition results
    /// </summary>
    console.log("\t\tGet recognition result by ID...");
    let recognitionResponse:OMRResponse =
        await this.getRecognitionResultById(recognizeTemplateId);

    /// <summary>
    /// STEP 6: Save the recognition results into result_folder
    /// </summary>
    console.log("\t\tSave recognition result...");
    await this.saveRecognitionResult(recognitionResponse);
  }

  //#region  Generate Temlate
  public static async generateTemplate() : Promise<string> {
    var markupFile =
        fs.readFileSync(path.join(this.config.dataFolder, this.templateGenerationFileName));

    let images:{ [key: string]: string; } = {};
    for (let i = 0; i < this.templateLogosImagesNames.length; i++) {
      let logo: string = fs.readFileSync(path.join(this.config.dataFolder, this.templateLogosImagesNames[i])).toString("base64");
      images[this.templateLogosImagesNames[i]] = logo;
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
    return await this.generateApi.postGenerateTemplate(task);
  }

  public static async getGenerationResultById(id:string) : Promise<OMRResponse> {
    let generationResult : OMRResponse = null;
    while (true) {
        generationResult = await this.generateApi.getGenerateTemplate(id);

        if (generationResult.responseStatusCode == "Ok") {
          break;
        }
        console.log("Wait, please! Your request is still being processed");
        await new Promise(r => setTimeout(r, 5000));
    }
    return generationResult;
  }

  public static async saveGenerationResult(generationResult:OMRResponse){
    if (generationResult.error == null) {
        for (let i = 0; i < generationResult.results.length; i++) {
          let type:string = generationResult.results[i].type ?? "";
          let name: string = "Aspose_test" + "." + type.toLowerCase();
          let dirPath = path.join(this.config.resultFolder,name);
          await fs.writeFileSync(dirPath, Buffer.from(generationResult.results[i].data,"base64"))
        }
      } else {
        console.error("Error :" + generationResult.error.toString());
      }
  }
  //#endregion

  //#region Recognize Image
  public static async recognizeImage(imagePath, omrFilePath) : Promise<string> {
    // get the omr file
    let omrFile = await fs.readFileSync(omrFilePath);
    // set up recognition threshold
    let recognitionThreshold = 30;

    // get the filled template
    let image = await fs.readFileSync(imagePath);
    let images = [image.toString("base64")];

    // Set up request
    let task: OmrRecognizeTask = {
        omrFile:omrFile.toString("base64"),
        recognitionThreshold,
        images
    };

    // call image recognition
    return await this.recognizeApi.postRecognizeTemplate(task) ;
  }

  public static async getRecognitionResultById(id:string) : Promise<OMRResponse> {
    let recognitionResult : OMRResponse = null;
    while (true) {
        recognitionResult = await this.recognizeApi.getRecognizeTemplate(id);
    
        if (recognitionResult.responseStatusCode == "Ok") {
          break;
        }
        console.log("Wait, please! Your request is still being processed");
        await new Promise(r => setTimeout(r, 5000));
    }
    return recognitionResult;
  }

  public static async saveRecognitionResult(recognitionResult:OMRResponse){
    if (recognitionResult.error == null) {
        let dirPath = path.join(this.config.resultFolder, this.resultFileName);
        await fs.writeFileSync(dirPath, Buffer.from(recognitionResult.results[0].data,"base64"));
    } else {
      console.error("Error :" + recognitionResult.error.toString());
    }
  }
  //#endregion
}

Demo.runDemo().then(()=>{

})
.catch((error)=>{
    console.error("Exception: "+error);
});
