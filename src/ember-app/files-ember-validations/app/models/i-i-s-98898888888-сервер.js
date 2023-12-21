import {
  defineNamespace,
  defineProjections,
  Model as СерверMixin
} from '../mixins/regenerated/models/i-i-s-98898888888-сервер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СерверMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
