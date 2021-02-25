import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;

  init() {
    super.init(...arguments);
    let user = this.store.createRecord('user', {
      username: 'x',
      password: 'x',
      email: 'x',
    });
    console.log(user.validations.isValid);
  }
}
