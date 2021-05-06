package io.dataease.commons.utils;

public class DorisTableUtils {

    public static String dorisName(String datasetId){
        return "ds_" + datasetId.replace("-", "_");
    }

    public static String dorisTmpName(String dorisName){
        return "tmp_" + dorisName;
    }

    public static String dorisDeleteName(String dorisName){
        return "delete_" + dorisName;
    }

}