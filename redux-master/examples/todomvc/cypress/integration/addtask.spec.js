import {header,addtaskstextBox,filters,todolist,todolistlabels} from "../support/selectors/todomvc";
import {navigate} from "../support/commands/sharedcmds"
import {baseUrl} from "../fixtures/config";
import {addTasks} from "../support/seeddata/seeddata";

describe.skip('seeddata',()=>{
    beforeEach(()=>{
    cy
     .navigate(baseUrl)
     .get(header)
     .then(el=> expect(el.text()).to.equal('todos'))   
});
    let seedtesttasks =['lets add a test task',
'lets add another one','one more task',
'alright i got enough tasks to do',
'lets take one more',
'one last task for the day']
    it('add tasks',()=>{
        for(var i=0;i<seedtesttasks.length;i++){
            cy
                .addTasks(seedtesttasks[i]);
        }
    })
});

describe('Add tasks to todo list',()=>{

beforeEach(()=>{
    cy
     .navigate(baseUrl)
     .get(header)
     .then(el=> expect(el.text()).to.equal('todos'))   
});

let testtasks =['lets add a test task',
'lets add another one','one more task',
'alright i got enough tasks to do',
'lets take one more',
'one last task for the day']

    it('should be able to add a new task',()=>{ 
        cy
        for(var i=0;i<testtasks.length;i++) {
            cy.get(addtaskstextBox).type(testtasks[i]+'{enter}')
        }
                    cy
                    .get(todolist)
                     .should("have.length",testtasks.length+2)
    })
});

describe('Select tasks',()=>{
    let testtasks =['lets add a test task','lets add another one','one more task','alright i got enough tasks to do','lets take one more','one last task for the day']
    beforeEach(()=>{
    cy
     .navigate(baseUrl)
     .get(header)
     .then(el=> expect(el.text()).to.equal('todos'))   
     for(var i=0;i<testtasks.length;i++) {
            cy.get(addtaskstextBox)
            .type(testtasks[i]+'{enter}')
        }
    });
    it('should be able select tasks',()=>{
      let testdata =['lets add a test task','lets add another one','one more task','alright i got enough tasks to do','lets take one more','one last task for the day'];
      
      for(var j=0;j<testdata.length;j++)  {
        cy
        .get(todolist)
        .find('label')
        .should("contain",testdata[j])       
      }    
        cy
            .get(todolist)
            .within(()=>{
                cy
                .get('div>input[type="checkbox"]')
                .check()
            })
       cy
        .get(filters).find('a').contains('Active').click({force: true})
    })
});

describe('Show completed tasks',()=>{
    beforeEach(()=>{
    cy
     .navigate(baseUrl)
     .get(header)
     .then(el=> expect(el.text()).to.equal('todos'))   
     let testtasks =['lets add a test task','lets add another one',
     'one more task','alright i got enough tasks to do',
     'lets take one more','one last task for the day']
     for(var i=0;i<testtasks.length;i++) {
            cy.get(addtaskstextBox).type(testtasks[i]+'{enter}')
        }
});
    it('should be able to click completed tasks button',()=>{
        cy
            .get(filters).find('a')
            .should("contain",'Completed')
            .within(()=>{
                cy
                .contains('Completed')
                .click()
            })
    })
});




