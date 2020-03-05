import Route from '@ember/routing/route';
import EmberObject,{set} from '@ember/object';
export default Route.extend({
    namee:'ssssss',
    
    model()
    {
        set(this.controllerFor('customers'),'cuslist',false);
        
        let obj={
            name:null,
            displayname:null,
            phonenumber:null,
        }
        return obj;
    },
   
    actions:
    {
        addCus(name,displayname,phonenumber,clearField)
        {      
           
             
            this.controllerFor('customers').arrObj.pushObject(EmberObject.create({"name":name,"displayname":displayname,"phonenumber":phonenumber}));
            
            set(clearField,"name","");
            set(clearField,"displayname","");
            set(clearField,"phonenumber","");
            console.log(this.controllerFor('customers').arrObj);
            set(this.controllerFor('customers'),'cuslist',true);
            this.transitionTo('customers');
        }

    }
});

