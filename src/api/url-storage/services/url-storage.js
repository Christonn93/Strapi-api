'use strict';

/**
 * url-storage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::url-storage.url-storage');
