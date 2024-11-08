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


const AsposeOcrCloudv50Api = require('@asposecloud/aspose-ocr-cloud');
const axios = require('axios')
const clientId = "25a8dba1-100b-438d-924c-844b7bdb8548";
const clientSecret = "89fcd0b0e0356b15cae2f665620eeaeb";

var api

// Get your credentials from Aspose Dashboard and insert them below:
const getTokenData = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials"
};

export class Demo {
  public configFileName: string = "test_config.json";

  public templateGenerationFileName: string = "Aspose_test.txt";
  
  public templateImageName: string;
  public omrFileName: string = "Aspose_test.omr";
  public resultFileName: string;
  public templateLogosImagesNames = [
    "logo1.jpg",
    "logo2.png",
  ];
  public config: Config;

  public apiClient: any;
  public generateApi: GenerateTemplate;
  public recognizeApi: RecognizeTemplate;

  constructor(templateImageName: string) {
    this.templateImageName = `${templateImageName}.jpg`;
    this.resultFileName = `${templateImageName}.csv`;
  }

  public async connect() {
    return new Promise(function(resolve, reject) {
        //console.log(`Authentificating...`);
        axios.post(
            "https://api.aspose.cloud/connect/token",
            new URLSearchParams(getTokenData),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json;charset=UTF-8",
                }
            }
        )
        .then(response => {
            //console.log(`Status: ${response.status}`);
            //console.log(response.data);
            resolve(response.data);
            //console.log(`Authentification done`);
        })
        .catch(error => {
            reject(error);
        });
    });
  }

  public async callPostImageRecognizeFunction (body) {
    return new Promise(async (resolve, reject) => {
      let configFilePath: string = path.join(
        this.configFileName
      );

      this.config = Config.parseJson(await fs.readFileSync(configFilePath).toString());

      if (!this.config.basePath) {
          throw new Error("Unable to find file" + configFilePath);
      }

      api = new AsposeOcrCloudv50Api.RecognizeImageApi()
      api.apiClient.basePath = "https://api.aspose.cloud"
      // var body_res = JSON.parse(body)
      api.apiClient.authentications = {
          'JWT': {
              type: 'oauth2',
              accessToken: body['access_token']
          }
      }
      api.apiClient.defaultHeaders = {
          "User-Agent": "NodeJS  demo project"
      }

      var img_path = path.join(this.config.dataFolder, this.templateImageName);
      var filePath = path.normalize(img_path);
      var buffer = Buffer.alloc(1024 * 50) as { encoding?: null; flag?: string; };
      var fileData = fs.readFileSync(filePath, buffer);
      let settings = new AsposeOcrCloudv50Api.OCRSettingsRecognizeImage()
      let requestData = new AsposeOcrCloudv50Api.OCRRecognizeImageBody(fileData.toString('base64'), settings)
      api.postRecognizeImage(requestData, (err, res, body) => {
          if (err) {
              reject(err)
          }
          resolve(res)
      })
    })
  }

  public async callGetImageFunction(id){
    //console.log('Writing id...')
    //console.log(id)
    return new Promise(function(resolve, reject){
        api.getRecognizeImage(id, (err, res, body) => {
            if (err) {
                reject(err)
            }
            //console.log(`Success`)
            resolve(body)
        })
    })
  }

  public async processResult(body): Promise<string>{
    //console.log('Processing results...')
    const json_res = JSON.parse(body['text']);
    let numericPart: string = '';
    for (const key in json_res['results']){
      const text = Buffer.from(json_res['results'][key]['data'], 'base64').toString('utf-8');
      const lines = text.split('\n');
      const firstLine = lines[0];
      const numberString = firstLine.split(' ');
      numericPart = numberString[numberString.length - 1];
    }
    return numericPart;
  }

  public async init() {
    let configFilePath: string = path.join(
      this.configFileName
    );
    this.config = Config.parseJson(await fs.readFileSync(configFilePath).toString());

    if (!this.config.basePath) {
        throw new Error("Unable to find file" + configFilePath);
    }

    this.config.dataFolder = path.join(this.config.dataFolder);
    this.config.resultFolder = path.join(this.config.resultFolder);

    this.apiClient = new ApiClient(this.config.basePath,this.config);

    this.generateApi = new GenerateTemplate(this.apiClient);
    this.recognizeApi = new RecognizeTemplate(this.apiClient);

  }

  public async runDemo(): Promise<string> {
    await this.init();

    /// <summary>
    /// STEP 1: Queue the template source file for generation
    /// </summary>
    if (false) {
      //console.log("\tGenerate template...");
      let templateId : string = await this.generateTemplate();
      
      /// <summary>
      /// STEP 2: Fetch generated printable form and recognition pattern
      /// </summary>
      //console.log("\tGet generation result by ID...");
      let generationResult: OMRResponse = await this.getGenerationResultById(templateId);

      /// <summary>
      /// STEP 3: Save the printable form and recognition pattern into result_folder
      /// </summary>
      //console.log("\tSave generation result...");
      await this.saveGenerationResult(generationResult);
    }
    //return;
    /// <summary>
    /// STEP 4: Queue the scan / photo of the filled form for recognition
    /// </summary>
    //console.log("\tRecognize image...");
    let recognizeTemplateId: string = await this.recognizeImage(
        path.join(this.config.dataFolder, this.templateImageName),
        path.join(this.config.resultFolder, this.omrFileName));

    /// <summary>
    /// STEP 5: Fetch recognition results
    /// </summary>
    //console.log("\tGet recognition result by ID...");
    let recognitionResponse:OMRResponse =
        await this.getRecognitionResultById(recognizeTemplateId);

    /// <summary>
    /// STEP 6: Save the recognition results into result_folder
    /// </summary>
    //console.log("\tSave recognition result...");
    const res = await this.saveRecognitionResult(recognitionResponse);

    return res;
  }

  //#region  Generate Temlate
  public async generateTemplate() : Promise<string> {
    var markupFile =
        fs.readFileSync(path.join(this.config.dataFolder, this.templateGenerationFileName));

    let images:{ [key: string]: string; } = {};
    for (let i = 0; i < this.templateLogosImagesNames.length; i++) {
      let logo: string = fs.readFileSync(path.join(this.config.dataFolder, this.templateLogosImagesNames[i])).toString("base64");
      images[this.templateLogosImagesNames[i]] = logo;
    }

    let settings:PageSettings = {
        fontFamily: "Arial",
        fontSize: 9,
        paperSize:"A4",
        bubbleColor:"Black",
        pageMarginLeft:190,
        pageMarginRight:190,
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

  public async getGenerationResultById(id:string) : Promise<OMRResponse> {
    let generationResult : OMRResponse = null;
    while (true) {
        generationResult = await this.generateApi.getGenerateTemplate(id);
    
        if (generationResult.responseStatusCode == "Error"){
          throw new Error(generationResult.error.messages[0]);
        }

        if (generationResult.responseStatusCode == "Ok") {
          break;
        }
        //console.log("Wait, please! Your request is still being processed");
        await new Promise(r => setTimeout(r, 0));
    }
    return generationResult;
  }

  public async saveGenerationResult(generationResult:OMRResponse){
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
  public async recognizeImage(imagePath, omrFilePath) : Promise<string> {
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

  public async getRecognitionResultById(id:string) : Promise<OMRResponse> {
    let recognitionResult : OMRResponse = null;
    while (true) {
        recognitionResult = await this.recognizeApi.getRecognizeTemplate(id);
    
        if (recognitionResult.responseStatusCode == "Error"){
          throw new Error(recognitionResult.error.messages[0]);
        }

        if (recognitionResult.responseStatusCode == "Ok") {
          break;
        }
        //console.log("Wait, please! Your request is still being processed");
        await new Promise(r => setTimeout(r, 0));
    }
    return recognitionResult;
  }

  public async saveRecognitionResult(recognitionResult:OMRResponse): Promise<string> {
    if (recognitionResult.error == null) {
      const results = await Buffer.from(recognitionResult.results[0].data,"base64");
      return results.toString();
    } else {
      console.error("Error :" + recognitionResult.error.toString());
      return '';
    }
  }
  //#endregion
}

//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-

const csvToJson = (csvString) => {
  const lines = csvString.split('\n');
  const result = {};
  
  // Saltamos la primera línea ya que son los encabezados
  lines.slice(1).forEach(line => {
    const [key, value] = line.split(',');
    if (key) {
      result[key.trim()] = value.replace(/"/g, '').trim(); // Quitamos las comillas de las respuestas
    }
  });

  return result;
};

const cartillas = [
  'Aspose_test_1',
  'Aspose_test_2'
]

const processCartilla = async (archivo: string) => {
  try {
    const demo = new Demo(archivo);
    const results = await demo.runDemo();
    const accessToken = await demo.connect();
    const x = await demo.callPostImageRecognizeFunction(accessToken);
    const id = await new Promise(resolve => setTimeout(() => resolve(x), 0));
    const body = await demo.callGetImageFunction(id);
    const dni = await demo.processResult(body);

    const data = {
      results: csvToJson(results),
      dni
    }
    let dirPath = path.join('Temp',`${archivo}.json`);
    await fs.writeFileSync(dirPath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

Promise.all(cartillas.map((archivo: string) => processCartilla(archivo)))
  .then(() => {
    console.log('Todas las cartillas han sido procesadas.');
  })
  .catch(error => {
    console.log('Ocurrió un error al procesar las cartillas:', error);
  });