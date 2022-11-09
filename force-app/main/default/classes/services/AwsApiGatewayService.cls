public with sharing class AwsApiGatewayService {

    private HttpRequestService service;
    private String contentType;

    public AwsApiGatewayService(String url, String contentType) {
       this.service = new HttpRequestService(url);
       this.contentType = contentType;
    }

    public Object sendRequest(String secretKey, String path, String param, String method) {
        this.service.setEndpoint(path);
        this.service.setMethod(method);
        this.service.setContentType(this.contentType);
        if (param != '') {
            this.service.setBody(param);
        }
        HttpRequest request = this.service.getRequest();
        request.setHeader('x-api-key', secretKey);
        return this.service.sendRequest(request);
    }

    public static aws_api_gateway__c[] getApiInfo() {
        aws_api_gateway__c[] record = new List<aws_api_gateway__c>();
        record = [
            SELECT
                url__c,
                secret_key__c
            FROM
                aws_api_gateway__c
        ];
        return record;
    }
}
