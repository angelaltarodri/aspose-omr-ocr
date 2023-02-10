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

export class Config {
    basePath?: string;
    authPath?: string;
    clientId?: string;
    clientSecret?: string;
    dataFolder?: string;
    resultFolder?: string;
    public static parseJson(val:string): Config{
        let c = new Config();
        let object = JSON.parse(val);
        c.basePath = object["base_path"];
        c.dataFolder = object["data_folder"];
        c.resultFolder = object["result_folder"];
        c.authPath = object["auth_url"];
        c.clientId = object["client_id"];
        c.clientSecret = object["client_secret"];
        return c;
    }
} 