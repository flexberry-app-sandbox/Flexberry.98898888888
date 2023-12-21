import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IIS98898888888ДолжностьLForm from './forms/i-i-s-98898888888-должность-l';
import IIS98898888888ОтчетОСервереLForm from './forms/i-i-s-98898888888-отчет-о-сервере-l';
import IIS98898888888РасположениеLForm from './forms/i-i-s-98898888888-расположение-l';
import IIS98898888888СерверLForm from './forms/i-i-s-98898888888-сервер-l';
import IIS98898888888СотрудникLForm from './forms/i-i-s-98898888888-сотрудник-l';
import IIS98898888888ДолжностьEForm from './forms/i-i-s-98898888888-должность-e';
import IIS98898888888ОтчетОСервереEForm from './forms/i-i-s-98898888888-отчет-о-сервере-e';
import IIS98898888888РасположениеEForm from './forms/i-i-s-98898888888-расположение-e';
import IIS98898888888СерверEForm from './forms/i-i-s-98898888888-сервер-e';
import IIS98898888888СотрудникEForm from './forms/i-i-s-98898888888-сотрудник-e';
import IIS98898888888ДолжностьModel from './models/i-i-s-98898888888-должность';
import IIS98898888888НастройкиModel from './models/i-i-s-98898888888-настройки';
import IIS98898888888ОтчетОСервереModel from './models/i-i-s-98898888888-отчет-о-сервере';
import IIS98898888888ПрограммыModel from './models/i-i-s-98898888888-программы';
import IIS98898888888РасположениеModel from './models/i-i-s-98898888888-расположение';
import IIS98898888888СерверModel from './models/i-i-s-98898888888-сервер';
import IIS98898888888СотрудникModel from './models/i-i-s-98898888888-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-98898888888-должность': IIS98898888888ДолжностьModel,
    'i-i-s-98898888888-настройки': IIS98898888888НастройкиModel,
    'i-i-s-98898888888-отчет-о-сервере': IIS98898888888ОтчетОСервереModel,
    'i-i-s-98898888888-программы': IIS98898888888ПрограммыModel,
    'i-i-s-98898888888-расположение': IIS98898888888РасположениеModel,
    'i-i-s-98898888888-сервер': IIS98898888888СерверModel,
    'i-i-s-98898888888-сотрудник': IIS98898888888СотрудникModel
  },

  'application-name': '98898888888',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '98898888888',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '98898888888',
          title: '98898888888'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-98898888888-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            },
            'i-i-s-98898888888-должность-l': {
              caption: 'Должность',
              title: ''
            }
          },
          сервера: {
            caption: 'Сервера',
            title: 'Сервера',
            'i-i-s-98898888888-расположение-l': {
              caption: 'Расположение',
              title: ''
            },
            'i-i-s-98898888888-сервер-l': {
              caption: 'Сервер',
              title: ''
            },
            'i-i-s-98898888888-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-98898888888-должность-l': IIS98898888888ДолжностьLForm,
    'i-i-s-98898888888-отчет-о-сервере-l': IIS98898888888ОтчетОСервереLForm,
    'i-i-s-98898888888-расположение-l': IIS98898888888РасположениеLForm,
    'i-i-s-98898888888-сервер-l': IIS98898888888СерверLForm,
    'i-i-s-98898888888-сотрудник-l': IIS98898888888СотрудникLForm,
    'i-i-s-98898888888-должность-e': IIS98898888888ДолжностьEForm,
    'i-i-s-98898888888-отчет-о-сервере-e': IIS98898888888ОтчетОСервереEForm,
    'i-i-s-98898888888-расположение-e': IIS98898888888РасположениеEForm,
    'i-i-s-98898888888-сервер-e': IIS98898888888СерверEForm,
    'i-i-s-98898888888-сотрудник-e': IIS98898888888СотрудникEForm
  },

});

export default translations;
