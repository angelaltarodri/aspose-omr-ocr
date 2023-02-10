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

import "./model/Config";
import { Config } from "./model/Config";
import "./model/OMRResponse";
import {AuthResponse} from "./model/authResponse";
import FormData from "form-data"
import axios from 'axios';

export class ApiClient {
    basePath: string = "";
    config: Config;
    constructor (path:string, config: Config) {
      this.basePath = path;
      this.config = config;
    }
    private async getToken() : Promise<string> {
        let formData = new FormData();
        formData.append('grant_type', 'client_credentials');
        formData.append('client_id', this.config.clientId);
        formData.append('client_secret', this.config.clientSecret);

        let response = await axios.post(this.config.authPath, formData);
        let token: AuthResponse = response.data;
        return token.token_type + " " + token.access_token;
    }
    async invokeAPI ( path : string,method : string,queryParams,body,headerParams, formParams, contentType : string,  authNames)  {      
      let url: string = this.basePath + path ;
      
      if (Object.keys(headerParams).length === 0) {
        headerParams['Content-Type'] = contentType;
      }
      headerParams['Authorization'] = await this.getToken();
        var msgBody = contentType == "application/x-www-form-urlencoded"
            ? formParams
            : body;
        switch (method) {
          case "POST":
            return await axios.post(url, msgBody, { headers:headerParams, params: queryParams} );
          case "PUT":
            return await axios.put(url, msgBody, { headers:headerParams, params: queryParams});
          case "DELETE":
            return await axios.delete(url,{ headers:headerParams, params: queryParams});
          case "PATCH":
            return await axios.patch(url, msgBody, { headers:headerParams, params: queryParams});
          default:
            return await axios.get(url, { headers:headerParams, params: queryParams});        
      }
    }
  }
  