public with sharing class FolderController {
    @AuraEnabled(cacheable=true)
    public static List<Folder> getFolders() {
        return [
            SELECT
                Id,
                Name,
                Type,
                DeveloperName,
                IsReadonly
            FROM
                Folder
            WHERE
                Type='Insights'
        ];
    }
}