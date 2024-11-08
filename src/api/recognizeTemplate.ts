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

import { OMRResponse } from '../model/OMRResponse';
import { OmrRecognizeTask } from '../model/OMRRecognizeTask';
import {ApiClient} from '../ApiClient2';

export class RecognizeTemplate {
    apiClient : ApiClient;
    constructor (client : ApiClient){
        this.apiClient = client;
    }
    async cancelRecognizeTemplate(id : string) {
        let postBody = null;
    
        // create path and map variables
        let path : string = "RecognizeTemplate/CancelRecognizeTemplate".replace("{format}", "json");
    
        // query params
        let queryParams = [];
        let headerParams = {};
        let formParams = {};
        if (id != null) {
          queryParams["id"] = id;
        }
    
        let contentTypes = [];
    
        let contentType =
            contentTypes.length > 0 ? contentTypes[0] : "application/json";
        let authNames = [];
      
        var response = await this.apiClient.invokeAPI(path, 'DELETE', queryParams,
            postBody, headerParams, formParams, contentType, authNames);
    
        if (response.status >= 400) {
          throw new Error(response.status + response.data);
        } else if (response.data != null) {
          return;
        } else {
          return;
        }
      }
    
      async getRecognizeTemplate  (id: string) : Promise<OMRResponse> {
        let postBody = null;
    
        // create path and map variables
        let path:string = "RecognizeTemplate/GetRecognizeTemplate".replace("{format}", "json");
    
        // query params
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        
        headerParams["Accept"] = "application/json";
    
        if (id != null) {
            queryParams["id"] = id;
        }
    
        let contentTypes = [];
    
        let contentType =
            contentTypes.length > 0 ? contentTypes[0] : "application/json";
    
        let authNames = [];
        
        var response = await this.apiClient.invokeAPI(path, 'GET', queryParams,
            postBody, headerParams, formParams, contentType, authNames);
        if (response.status >= 400) {
          throw new Error(response.status + response.data);
        } else if (response.data != null && response.data != "") {
          let res : OMRResponse = response.data; 
          return res;
        } else {
          return null;
        }
      }
    
      async postRecognizeTemplate( body: OmrRecognizeTask) : Promise<string> {
        let postBody = JSON.stringify(body);
        // verify required params are set
    
        // create path and map variables
        let path : string = "RecognizeTemplate/PostRecognizeTemplate".replace("{format}", "json");
    
        // query params
        let queryParams = [];
        let headerParams = {};
        let formParams = {};
    
        let contentTypes = ["application/json"];
    
        let contentType =
            contentTypes.length > 0 ? contentTypes[0] : "application/json";
        let authNames = [];
    
        let response = await this.apiClient.invokeAPI(path, 'POST', queryParams,
            postBody, headerParams, formParams, contentType, authNames);
    
        var result = "";
        if (response.status >= 400) {
          throw new Error(response.status + response.data);
        } else if (response.data != null) {
          result = response.data;
        }
        return result;
      }
}