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

import { BubbleSize } from './bubbleSize';
import { Color } from './color';
import { FileExtension } from './fileExtension';
import { FontStyle } from './fontStyle';
import { Orientation } from './orientation';
import { PaperSize } from './paperSize';

export interface PageSettings { 
    fontFamily?: string;
    fontStyle?: FontStyle;
    fontSize?: number;
    paperSize?: PaperSize;
    bubbleColor?: Color;
    pageMarginLeft?: number;
    orientation?: Orientation;
    bubbleSize?: BubbleSize;
    outputFormat?: FileExtension;
}