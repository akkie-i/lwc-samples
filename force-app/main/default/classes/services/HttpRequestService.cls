public with sharing class HttpRequestService {

    private String url;
    private HttpRequest request;

    public HttpRequestService(String url) {
        this.url = url;
        this.request = new HttpRequest();
    }

    public HttpRequest getRequest() {
        return this.request;
    }

    public void setEndpoint(String path) {
        String endpoint = this.url + '/' + path;
        System.debug(endpoint);
        this.request.setEndpoint(endpoint);
    }

    public void setContentType(String type) {
        this.request.setHeader('Content-Type', type);
    }

    public void setMethod(String method) {
        this.request.setMethod(method);
    }

    public void setAuthorizationHeader(String secretKey) {
        this.request.setHeader('Authorization', secretKey);
    }

    public void setBody(String body) {
        this.request.setBody(body);
    }

    public Object sendRequest(HttpRequest request) {
        Http http = new Http();
        HttpResponse response = new HttpResponse();
        response = http.send(request);
        Integer statusCode = response.getStatusCode();
        if (statusCode != 200) {
            System.debug('Error : ' + statusCode + ' => ' + response.getBody());
            throw new AuraHandledException(response.getBody());
        }
        return response.getBody();
    }
}
