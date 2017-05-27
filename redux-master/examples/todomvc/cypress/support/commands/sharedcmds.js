
Cypress.addParentCommand("navigate",(url)=>{
    var logger =Cypress.Log.command({
        name: 'navigate',
        message:['Failed to navigate to '+url],
        onConsole:()=>{
            return{
                url
            };
        }
    });
    return cy
    .visit(url)
});

Cypress.addParentCommand("getElement",(xpath,xPathResult=xPathResult.FIRST_ORDERED_NODE_TYPE)=>{
        var logger =Cypress.Log.command({
        name: 'getElement',
        message:['Get element by xPath: '+xpath],
        onConsole:()=>{
            return{
                xPath
            };
        }
    });
})
