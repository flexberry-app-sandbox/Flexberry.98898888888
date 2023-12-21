import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  режим: DS.attr('i-i-s-98898888888-режим-сервера'),
  расположение: DS.belongsTo('i-i-s-98898888888-расположение', { inverse: null, async: false }),
  сервер: DS.belongsTo('i-i-s-98898888888-сервер', { inverse: null, async: false })
});

export let ValidationRules = {
  режим: {
    descriptionKey: 'models.i-i-s-98898888888-отчет-о-сервере.validations.режим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расположение: {
    descriptionKey: 'models.i-i-s-98898888888-отчет-о-сервере.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сервер: {
    descriptionKey: 'models.i-i-s-98898888888-отчет-о-сервере.validations.сервер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОСервереE', 'i-i-s-98898888888-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 })
  });

  modelClass.defineProjection('ОтчетОСервереL', 'i-i-s-98898888888-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 })
  });
};
