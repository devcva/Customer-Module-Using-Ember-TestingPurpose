import Controller from '@ember/controller';
import {set} from '@ember/object';
import {A} from '@ember/array';


export default Controller.extend({
   
    cuslist:true,
    singleObj:null,
    arrObj:A(
        [
            {
             name:"sivalingam",
             displayname:"Cva",
             phonenumber:"1234567899"
            },
            {
             name:"lingamsiva",
             displayname:"siva",
             phonenumber:"765432456"
            } 
        ]),
    myObj1:A([]),

     
        read()
        {
            var myProm=new Promise((resolve,reject)=>{
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                 resolve(JSON.parse(this.responseText));
            }
            };
            xmlhttp.open("GET", "sample.json", true);
            xmlhttp.send();

            });

            myProm.then(function(myobj)
            {
                console.log(myobj);
                return myobj;
            }).catch((err)=>{
                console.log('Error: '+err);
                return false;
            });

            return myProm;
        },
 

    actions:
    {
        showSingleObj(obj)
        {
           this.singleObj=obj;
           set(this,'cuslist',false);
           this.transitionToRoute('customers.customer');
        }
       
        
    }

});



