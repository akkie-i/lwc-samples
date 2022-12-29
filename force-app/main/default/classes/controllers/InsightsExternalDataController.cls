public with sharing class InsightsExternalDataController {

    // 検証用
    public static void executeProcess() {
        String applicationId = '00l2w0000022xFsAAI'; //サンプル: 00l2w0000022tA7AAI サンプル2: 00l2w0000022xFsAAI
        String edgemartAlias = 'sample2';
        // uniequeあり
        String encodedMetaJson = 'ew0KICAiZmlsZUZvcm1hdCI6IHsNCiAgICAiY2hhcnNldE5hbWUiOiAiVVRGLTgiLA0KICAgICJmaWVsZHNEZWxpbWl0ZWRCeSI6ICIsIiwNCiAgICAibGluZXNUZXJtaW5hdGVkQnkiOiAiXG4iDQogIH0sDQogICJvYmplY3RzIjogWw0KICAgIHsNCiAgICAgICJjb25uZWN0b3IiOiAiQ1NWIiwNCiAgICAgICJmdWxseVF1YWxpZmllZE5hbWUiOiAic2FtcGxlX2NzdiIsDQogICAgICAibGFiZWwiOiAic2FtcGxlLmNzdiIsDQogICAgICAibmFtZSI6ICJzYW1wbGVfY3N2IiwNCiAgICAgICJmaWVsZHMiOiBbDQogICAgICAgIHsNCiAgICAgICAgICAiZnVsbHlRdWFsaWZpZWROYW1lIjogIkNvbHVtbjEiLA0KICAgICAgICAgICJuYW1lIjogIkNvbHVtbjEiLA0KICAgICAgICAgICJ0eXBlIjogIlRleHQiLA0KICAgICAgICAgICJsYWJlbCI6ICLlkI3liY0iDQogICAgICAgIH0sDQogICAgICAgIHsNCiAgICAgICAgICAiZnVsbHlRdWFsaWZpZWROYW1lIjogIkNvbHVtbjIiLA0KICAgICAgICAgICJuYW1lIjogIkNvbHVtbjIiLA0KICAgICAgICAgICJ0eXBlIjogIlRleHQiLA0KICAgICAgICAgICJsYWJlbCI6ICLjg6Hjg7zjg6siLA0KICAgICAgICAgICJpc1VuaXF1ZUlkIjogdHJ1ZQ0KICAgICAgICB9LA0KICAgICAgICB7DQogICAgICAgICAgImZ1bGx5UXVhbGlmaWVkTmFtZSI6ICJDb2x1bW4zIiwNCiAgICAgICAgICAibmFtZSI6ICJDb2x1bW4zIiwNCiAgICAgICAgICAidHlwZSI6ICJUZXh0IiwNCiAgICAgICAgICAibGFiZWwiOiAi5oCn5YilIg0KICAgICAgICB9LA0KICAgICAgICB7DQogICAgICAgICAgImZ1bGx5UXVhbGlmaWVkTmFtZSI6ICJDb2x1bW40IiwNCiAgICAgICAgICAibmFtZSI6ICJDb2x1bW40IiwNCiAgICAgICAgICAidHlwZSI6ICJOdW1lcmljIiwNCiAgICAgICAgICAibGFiZWwiOiAi5bm06b2iIiwNCiAgICAgICAgICAicHJlY2lzaW9uIjogMTgsDQogICAgICAgICAgImRlZmF1bHRWYWx1ZSI6ICIwIiwNCiAgICAgICAgICAic2NhbGUiOiAwLA0KICAgICAgICAgICJmb3JtYXQiOiAiMCINCiAgICAgICAgfSwNCiAgICAgICAgew0KICAgICAgICAgICJmdWxseVF1YWxpZmllZE5hbWUiOiAiQ29sdW1uNSIsDQogICAgICAgICAgIm5hbWUiOiAiQ29sdW1uNSIsDQogICAgICAgICAgInR5cGUiOiAiVGV4dCIsDQogICAgICAgICAgImxhYmVsIjogIuWHuui6qyINCiAgICAgICAgfQ0KICAgICAgXQ0KICAgIH0NCiAgXQ0KfQ==';
        String operation = 'Overwrite';
        InsightsExternalData externalData = InsightsExternalDataController.createBody(edgemartAlias,applicationId,encodedMetaJson,operation);

        String externalDataId = externalData.Id;
        List<String> encodedCsvData = new List<String>();
        // 全データ
        encodedCsvData.add('5ZCN5YmNLOODoeODvOODqyzmgKfliKUs5bm06b2iLOWHuui6qw0KdGFybyx0YXJvQGV4YW1wbGUuY29tLOeUtywyMCzljYPokYkNCmhhbmFrbyxoYW5ha29AZXhhbXBsZS5jb20s5aWzLDIwLOadseS6rA0KaWNoaXJvLGljaGlyb0BleGFtcGxlLmNvbSznlLcsNTAs5oSb55+lDQpqaXJvLGppcm9AZXhhbXBsZS5jb20s55S3LDE4LOWNg+iRiQ0Kc2FidXJvLHNhYnVyb0BleGFtcGxlLmNvbSznlLcsMTcs5Y2D6JGJDQpzaGlybyxzaGlyb0BleGFtcGxlLmNvbSznlLcsMTYs5Y2D6JGJDQpnb3JvLGdvcm9AZXhhbXBsZS5jb20s55S3LDE1LOWNg+iRiQ0Kcm9rdXJvLHJva3Vyb0BleGFtcGxlLmNvbSznlLcsMTQs5Y2D6JGJDQpuYW5hcm8sbmFuYXJvQGV4YW1wbGUuY29tLOeUtywxMyzljYPokYk=');
        // encodedCsvData.add('5ZCN5YmNLOODoeODvOODqyzmgKfliKUs5bm06b2iLOWHuui6qw0KdGFybyx0YXJvQGV4YW1wbGUuY29tLOeUtywyMCzljYPokYkNCmhhbmFrbyxoYW5ha29AZXhhbXBsZS5jb20s5aWzLDIwLOadseS6rA0KaWNoaXJvLGljaGlyb0BleGFtcGxlLmNvbSznlLcsNTAs5oSb55+l');
        // encodedCsvData.add('DQpqaXJvLGppcm9AZXhhbXBsZS5jb20s55S3LDE4LOWNg+iRiQ0Kc2FidXJvLHNhYnVyb0BleGFtcGxlLmNvbSznlLcsMTcs5Y2D6JGJDQpzaGlybyxzaGlyb0BleGFtcGxlLmNvbSznlLcsMTYs5Y2D6JGJ');
        // encodedCsvData.add('DQpnb3JvLGdvcm9AZXhhbXBsZS5jb20s55S3LDE1LOWNg+iRiQ0Kcm9rdXJvLHJva3Vyb0BleGFtcGxlLmNvbSznlLcsMTQs5Y2D6JGJDQpuYW5hcm8sbmFuYXJvQGV4YW1wbGUuY29tLOeUtywxMyzljYPokYk=');
        InsightsExternalDataController.createParts(externalDataId,encodedCsvData,0);

        InsightsExternalDataController.updateBody(externalDataId);
        System.debug(externalDataId);
        // externalDataIdを使って以下のクエリー実行しながら結果を監視してください。
        // SELECT Id,EdgemartAlias,Operation,EdgemartContainer,Action,Status,StatusMessage,MetadataJson FROM InsightsExternalData WHERE Id='06V2w000000pJX7EAM
        // SELECT Id,EdgemartAlias,Operation,EdgemartContainer,Action,Status,StatusMessage,MetadataJson FROM InsightsExternalData Order By LastModifiedDate DESC
        // SELECT Id,PartNumber FROM InsightsExternalDataPart WHERE InsightsExternalDataId='06V2w000000pKyDEAU'
    }

    @AuraEnabled
    public static Map<String, InsightsExternalData> getEdgemartAliasesWithMetadataJson(String edgemartContainer) {
        Map<String, InsightsExternalData> response = new  Map<String, InsightsExternalData>();
        List<InsightsExternalData> externalData = new List<InsightsExternalData>();
        externalData = [
            SELECT
                Id,
                MetadataJson,
                EdgemartAlias,
                LastModifiedDate
            FROM
                InsightsExternalData
            WHERE
                EdgemartContainer =:edgemartContainer
            AND
                Status = 'Completed'
            Order By
                LastModifiedDate DESC
            LIMIT 1000
        ];

        if (externalData.size() == 0) {
            response.put('', null);
        }

        for (InsightsExternalData d : externalData) {
            String encode = System.EncodingUtil.base64Encode(d.MetadataJson);
            response.put(encode, d);
        }

        return response;
    }

    @AuraEnabled
    public static InsightsExternalData createBody(String edgemartAlias, String edgemartContainer, String metaDataJsonString, String Operation) {
        // InsightsExternalDataオブジェクトを作成
        InsightsExternalData externalData = new InsightsExternalData();
        externalData.put('Format', 'Csv');
        externalData.put('EdgemartAlias', edgemartAlias);
        if (metaDataJsonString != '') {
            // メタデータはBlob型に変換する必要がある
            Blob jsonDecode = System.EncodingUtil.base64Decode(metaDataJsonString);
            externalData.put('MetadataJson', jsonDecode);
        }
        externalData.put('Operation', Operation);
        externalData.put('Action', 'None');
        externalData.put('EdgemartContainer', edgemartContainer);
        try {
            // InsightsExternalDataを追加
            insert externalData;
            return externalData;
        } catch(DmlException e) {
            throw e;
        }
    }
    @AuraEnabled
    public static void createParts(String externalDataId, String[] csvFileString, Integer partNumberOffset) {

        try {
            List<InsightsExternalDataPart> externalDataParts = new List<InsightsExternalDataPart>();
            for (Integer i = 0; i < csvFileString.size(); i++) {
                Integer partNumber = partNumberOffset + i + 1;
                Blob csvFile = System.EncodingUtil.base64Decode(csvFileString[i]);
                InsightsExternalDataPart externalDataPart = new InsightsExternalDataPart();
                externalDataPart.put('InsightsExternalDataId', externalDataId);
                externalDataPart.put('DataFile', csvFile);
                externalDataPart.put('PartNumber', partNumber);
                externalDataParts.add(externalDataPart);
            }
            // InsightsExternalDatapartを追加
            insert externalDataParts;
        } catch(DmlException e) {
            throw e;
        }
    }

    @AuraEnabled
    public static void updateBody(String externalDataId) {
        try {
            InsightsExternalData[] processes = [
                SELECT Action FROM InsightsExternalData WHERE Id =:externalDataId
            ];
            for (InsightsExternalData externalData : processes) {
                externalData.Action = 'Process';
            }
            update processes;
        } catch(DmlException e) {
            throw e;
        }
    }
}
