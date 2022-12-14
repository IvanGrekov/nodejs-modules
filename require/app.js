(async () => {
    const path = require('path');
    const commonJSmodule = require('./common.js');

    // console.log(require);
    // console.log(require.resolve('lodash'));

    //#region checking require.cache
    // console.log(require.cache);
    // console.log(require.cache['/Users/standarduser/projects/nodejs/require/common.js']);
    // console.log('require.resolve', require.resolve('./common.js'));
    // console.log('path.resolve', path.resolve('./common.js'));
    // console.log('require.cache[module]', require.cache[require.resolve('./common.js')]);
    // console.log('require.cache[module]', require.cache[module.filename]);
    //#endregion

    //#region checking require var
    // console.log(require);
    //#endregion

    //#region check if module launched by node
    // const isAppModuleLaunched = require.main === module;
    // console.log('isAppModuleLaunched', isAppModuleLaunched);
    //#endregion

    //#region check how many times es module executes
    // const esModule1 = await import('./esModule.mjs');
    // const esModule2 = await import('./esModule.mjs');

    // console.log(esModule1 === esModule2);

    // console.log(require.cache);
    //#endregion

    //#region check if there is es module in cache
    // const esModule = await import('./esModule.mjs');

    // console.log(require);
    //#endregion

    //#region deleting module from cache
    // delete require.cache[require.resolve('./common')];

    // console.log(require.cache);

    // const commonJSmodule2 = require('./common');

    // console.log(require.cache);
    // console.log('commonJSmodule === commonJSmodule2', commonJSmodule === commonJSmodule2);
    //#endregion

    //#region check cache by path
    // console.log(require.cache['/Users/standarduser/projects/nodejs/require/common.js']);
    //#endregion

    //#region check cache by path with help of require.resolve
    // console.log(require.resolve('./common'));
    // console.log(require.cache[require.resolve('./common.js')]);
    //#endregion

    //#region check if connected modules are equal if that's one module actually
    // const commonJSmodule2 = require('./common');
    // console.log('are modules equal:', commonJSmodule === commonJSmodule2);
    // console.log(require.cache);
    //#endregion

    //#region creating record in cache
    // console.log(require.resolve('./esModule.mjs'));

    // const esModule = await import('./esModule.mjs');
    // require.cache[require.resolve('./esModule.mjs')] = { exports: esModule };
    // console.log('cache', require.cache);
    // console.log('esModule', esModule);
    //#endregion

    //#region creating record in cache for existing external module
    // require.cache['os'] = { exports: 123 }; // NOTE: after require command we see result from module.exports
    // console.log(require.cache);
    // const os = require('os');
    // console.log('os', os);
    //#endregion

    //#region connecting real external module even if such we already have in cache
    // require.cache['os'] = { exports: 123 };
    // const os = require('node:os');
    // console.log('os', os);
    // console.log('cache', require.cache);

    // const os = require('os');
    // console.log('cache', require.cache);
    //#endregion

    //#region checking cache if we connect module lodash
    // const _ = require('lodash');
    // console.log(_);
    // console.log('cache', require.cache);
    //#endregion

    //#region checking cache if we connect module path
    // const path = require('path');
    // console.log(path);
    // console.log('cache', require.cache);
    //#endregion
})();
