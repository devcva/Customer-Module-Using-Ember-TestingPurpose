import Route from '@ember/routing/route';
import {set} from '@ember/object';
export default Route.extend({
    model()
    {
        return this.controllerFor('customers').singleObj;
    },
    actions:
    {
        gotoback()
        {
            set(this.controllerFor('customers'),'cuslist',true);
            this.transitionTo('customers');
        }
    }
});
