import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iP: DS.attr('string'),
  порт: DS.attr('number'),
  протокол: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-98898888888-сотрудник', { inverse: null, async: false }),
  программы: DS.hasMany('i-i-s-98898888888-программы', { inverse: 'сервер', async: false }),
  настройки: DS.hasMany('i-i-s-98898888888-настройки', { inverse: 'сервер', async: false })
});

export let ValidationRules = {
  iP: {
    descriptionKey: 'models.i-i-s-98898888888-сервер.validations.iP.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  порт: {
    descriptionKey: 'models.i-i-s-98898888888-сервер.validations.порт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  протокол: {
    descriptionKey: 'models.i-i-s-98898888888-сервер.validations.протокол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-98898888888-сервер.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  программы: {
    descriptionKey: 'models.i-i-s-98898888888-сервер.validations.программы.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  настройки: {
    descriptionKey: 'models.i-i-s-98898888888-сервер.validations.настройки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СерверE', 'i-i-s-98898888888-сервер', {
    протокол: attr('Протокол', { index: 0 }),
    iP: attr('IP', { index: 1 }),
    порт: attr('Порт', { index: 2 })
  });

  modelClass.defineProjection('СерверL', 'i-i-s-98898888888-сервер', {
    протокол: attr('Протокол', { index: 0 }),
    iP: attr('IP', { index: 1 }),
    порт: attr('Порт', { index: 2 })
  });
};
