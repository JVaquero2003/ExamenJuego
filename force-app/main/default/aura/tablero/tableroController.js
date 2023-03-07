({
    myAction : function(component, event, helper) {

    },
    callApex : function(component, event, helper){
        

        var action = component.get("c.generar");
        var numIntento = event.getParam("numero");

        component.set("v.numIntento", numIntento);
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
    },
    aumentarContador : function(component, event){
        var acierto = event.getParam("sumar");
        if (acierto){
            var numScore = component.get("v.score");
            component.set("v.score", numScore+1);
        }
        else{
            alert("GameOver")
            component.set("v.score", 0);
        }
    }
})
