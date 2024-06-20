import { baseAPI } from "../baseAPI";
export class SendMailApi extends baseAPI {

    constructor (page) {
        super (page);}

    async sendMail(message) {
        const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/service/soap/SendMsgRequest', {
            data: {"Body":{"SendMsgRequest":{"_jsns":"urn:zimbraMail","m":{"did":"282","su":{"_content":`${message}`},"e":[{"t":"t","a":"test174@demo.zextras.io","p":"test174"},{"t":"f","a":"test174@demo.zextras.io","p":"DEFAULT"}],"mp":[{"ct":"multipart/alternative","mp":[{"ct":"text/html","body":true,"content":{"_content":"<html><style>p {margin:0};</style><body><div style=\"font-family: arial, helvetica, sans-serif; font-size: 12pt; color: #000000\"><p></p><div class=\"signature-div\"></div></div></body></html>"}},{"ct":"text/plain","content":{"_content":"\n\n---\n"}}]}]}}},"Header":{"context":{"_jsns":"urn:zimbra","notify":{"seq":4},"session":{"id":"126749","_content":"126749"},"account":{"by":"name","_content":"test174@demo.zextras.io"},"userAgent":{"name":"CarbonioWebClient - Chrome 125.0.0.0 (Windows)","version":"24.5.0_ZEXTRAS_202405 carbonio 20240517-1011 FOSS"}}}}
            });
            await this.GetResponceBody(response);
   
    }

    async undoMail() {

    }

    }