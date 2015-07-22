Package.describe({
    name: 'fullhdpixel:coinkite',
    summary: 'Coinkite methods for quick integration',
    version: '0.0.1',
    git: 'https://github.com/fullhdpixel/Coinkite'
});

Package.onUse(function(api) {
    Npm.depends({
        'coinkite-javascript': '0.0.1'
    });

    api.addFiles(['server/coinkite.js'], 'server');
    api.export('Coinkite', 'server');
});
