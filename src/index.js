'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Hapi = require('hapi');
const routes = require('./routes');
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const htmlUtils = require('./util/htmlUtil');
require('source-map-support').install();
const server = Hapi.server({
    port: 3001,
    host: 'localhost'
});
server.route(routes);
const init = () => __awaiter(this, void 0, void 0, function* () {
    yield server.register(require('inert'));
    yield server.register(require('vision'));
    const defaultContext = {
        title: 'Animal Tracking System',
        standardImports: htmlUtils.standardImports
        // imports: htmlHelpers.getImports,
        // standardPadding: htmlHelpers.standardPadding
    };
    server.views({
        engines: {
            html: handlebars
        },
        context: defaultContext,
        relativeTo: 'src',
        path: ['public/html', ' private/html'],
        layoutPath: 'public/templates',
        layout: 'default'
        //,
        //helpersPath: 'views/helpers',
        //partialsPath: 'views/partials'
    });
    let uri = 'mongodb+srv://nodedba:XgMVIPBaxmKJ464j@cluster0-loln2.mongodb.net/AnimalTrackingSystem?retryWrites=true';
    mongoose.Promise = global.Promise;
    yield mongoose.connect(uri);
    yield server.start();
    console.log(`Server running at: ${server.info.uri}`);
});
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();
//# sourceMappingURL=index.js.map