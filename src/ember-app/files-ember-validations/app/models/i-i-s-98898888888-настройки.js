import {
  defineNamespace,
  defineProjections,
  Model as НастройкиMixin
} from '../mixins/regenerated/models/i-i-s-98898888888-настройки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НастройкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
