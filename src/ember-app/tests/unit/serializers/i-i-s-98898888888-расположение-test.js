import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-98898888888-расположение', 'Unit | Serializer | i-i-s-98898888888-расположение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-98898888888-расположение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-98898888888-ед-изм',
    'transform:i-i-s-98898888888-режим-сервера',
    'transform:i-i-s-98898888888-тип-настр',

    'model:i-i-s-98898888888-должность',
    'model:i-i-s-98898888888-настройки',
    'model:i-i-s-98898888888-отчет-о-сервере',
    'model:i-i-s-98898888888-программы',
    'model:i-i-s-98898888888-расположение',
    'model:i-i-s-98898888888-сервер',
    'model:i-i-s-98898888888-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
