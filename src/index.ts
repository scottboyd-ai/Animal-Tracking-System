'use strict';

const Hapi = require('hapi');
const routes = require('./routes');
const mongoose = require('mongoose');
const handlebars = require('handlebars');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route(routes);

const init = async () => {

    await server.register(require('inert'));
    await server.register(require('vision'));

    const defaultContext = {
        title: 'Animal Tracking System'
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
    await mongoose.connect(uri);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();