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

export type ResponseStatusCode = 'Ok' | 'PartiallyNotFound' | 'NoAnyResultData' | 'ResultDataLost' | 'TaskNotFound' | 'NotReady' | 'Error';

export const ResponseStatusCode = {
    Ok: 'Ok' as ResponseStatusCode,
    PartiallyNotFound: 'PartiallyNotFound' as ResponseStatusCode,
    NoAnyResultData: 'NoAnyResultData' as ResponseStatusCode,
    ResultDataLost: 'ResultDataLost' as ResponseStatusCode,
    TaskNotFound: 'TaskNotFound' as ResponseStatusCode,
    NotReady: 'NotReady' as ResponseStatusCode,
    Error: 'Error' as ResponseStatusCode
};