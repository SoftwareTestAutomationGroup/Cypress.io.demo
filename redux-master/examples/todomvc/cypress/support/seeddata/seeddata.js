import {header,addtaskstextBox,filters,todolist,todolistlabels} from "../../support/selectors/todomvc";

Cypress.addParentCommand("addTasks",(task)=>{
    var logger=Cypress.Log.command({
        name:'addTasks',
        message:['Failed to add tasks: '+task],
        onConsole:()=>{
            return {
                task
            };
        }
    })
    return cy
        .get(addtaskstextBox)
        .type(task+'{enter}') 
    });