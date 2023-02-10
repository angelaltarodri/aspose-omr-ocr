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

import {Config} from  "../src/model/Config";
import fs from "fs";
import path from "path";

export class Common {
    demoDataSubmoduleName: string = "aspose-omr-cloud-demo-data";
    configFileName: string = "test_config.json";
    basePath: string = "";
    DataFolderName: string = "Data";
    ResultFolderName:string = "Temp";
    config:Config;
  
    async init() {
        let configFilePath: string = path.join(
            __dirname,
            "..",
            "..",
            this.demoDataSubmoduleName,
            this.configFileName
          );
          this.config = Config.parseJson(await fs.readFileSync(configFilePath).toString());

      this.basePath = path.join(
        __dirname,
        "..",
        "..",
        this.demoDataSubmoduleName);
  
    }
  
    GetDataFolderDir(): string {
      return path.join(this.basePath, this.config.dataFolder);
    }
  
    GetResultFolderDir(): string {
      return path.join(this.basePath, this.config.resultFolder);
    }
  
    GetURL(): string {
      return this.config.basePath;
    }
  }
  