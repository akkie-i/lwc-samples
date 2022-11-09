public with sharing class ApiSampleController {

    private static String ContentType = 'application/json';

    @AuraEnabled(cacheable=true)
    public static aws_api_gateway__c[] getApiInfo() {
        return AwsApiGatewayService.getApiInfo();
    }

    @AuraEnabled(cacheable=true)
    public static Object createRecord(String url, String secretKey, String path, String param) {
        
        AwsApiGatewayService service = new AwsApiGatewayService(url, ContentType);
        return service.sendRequest(secretKey, path, param, 'POST');
    }

    @AuraEnabled(cacheable=true)
    public static Object getRecords(String url, String secretKey, String path) {

        AwsApiGatewayService service = new AwsApiGatewayService(url, ContentType);
        return service.sendRequest(secretKey, path, '', 'GET');
    }

    @AuraEnabled(cacheable=true)
    public static Object getRecordById(String url, String secretKey, String path) {

        AwsApiGatewayService service = new AwsApiGatewayService(url, ContentType);
        return service.sendRequest(secretKey, path, '', 'GET');
    }

    @AuraEnabled(cacheable=true)
    public static Object updateRecord(String url, String secretKey, String path, String param) {

        AwsApiGatewayService service = new AwsApiGatewayService(url, ContentType);
        return service.sendRequest(secretKey, path, param, 'PUT');
    }

    @AuraEnabled(cacheable=true)
    public static Object deleteRecord(String url, String secretKey, String path) {

        AwsApiGatewayService service = new AwsApiGatewayService(url, ContentType);
        return service.sendRequest(secretKey, path, '', 'DELETE');
    }
}