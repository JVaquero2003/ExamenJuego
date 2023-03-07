public with sharing class generarRandom {
    public generarRandom() {

    }

    @AuraEnabled
    public static Integer generar(){
        try {
            return Math.mod(Math.abs(Crypto.getRandomInteger()), 4) + 1;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}