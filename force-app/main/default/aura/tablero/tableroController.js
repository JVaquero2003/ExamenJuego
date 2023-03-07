({
    myAction : function(component, event, helper) {

    },
    callApex : function(component, event, helper){
        var action = component.get("c.generar");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var numero = response.getReturnValue()
                component.set("v.numero", numero);
                switch (numero){
                    case 1:
                        component.find("1").set("v.colorear", "color");
                        component.find("2").set("v.colorear", "limpia");
                        component.find("3").set("v.colorear", "limpia");
                        component.find("4").set("v.colorear", "limpia");
                        break;
                    case 2:
                        component.find("1").set("v.colorear", "limpia");
                        component.find("2").set("v.colorear", "color");
                        component.find("3").set("v.colorear", "limpia");
                        component.find("4").set("v.colorear", "limpia");
                        break;
                    case 3:
                        component.find("1").set("v.colorear", "limpia");
                        component.find("2").set("v.colorear", "limpia");
                        component.find("3").set("v.colorear", "color");
                        component.find("4").set("v.colorear", "limpia");
                        break;
                    case 4:
                        component.find("1").set("v.colorear", "limpia");
                        component.find("2").set("v.colorear", "limpia");
                        component.find("3").set("v.colorear", "limpia");
                        component.find("4").set("v.colorear", "color");
                        break;
                        }
            }
        });
        $A.enqueueAction(action);
    }
})
