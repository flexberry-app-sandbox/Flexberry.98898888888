import {
  defineNamespace,
  defineProjections,
  Model as ОтчетОСервереMixin
} from '../mixins/regenerated/models/i-i-s-98898888888-отчет-о-сервере';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчетОСервереMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
