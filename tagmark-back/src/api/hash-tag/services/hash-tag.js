'use strict';

/**
 * hash-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hash-tag.hash-tag');
