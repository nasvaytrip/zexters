import { baseAPI } from "../baseAPI";
export class DeleteMailApi extends baseAPI {

    constructor (page) {
        super (page);}

    async deleteMail() {
        const response = await this.page.request.post('https://gb-auto-u-srv2.demo.zextras.io/service/soap/ConvActionRequest', {
            data: {"Body":{"MsgActionRequest":{"_jsns":"urn:zimbraMail","action":{"id":"320","op":"delete"}}},"Header":{"context":{"_jsns":"urn:zimbra","session":{"id":"126769","_content":"126769"},"account":{"by":"name","_content":"test174@demo.zextras.io"},"userAgent":{"name":"CarbonioWebClient - Chrome 88.0.4324.188 (Chromecast)","version":"24.5.0_ZEXTRAS_202405 carbonio 20240517-1011 FOSS"}}}}
            });
            await this.GetResponceBody(response);
        }
    
        }