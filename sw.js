// Cache all css
// 
const raw = [

    "/",
    "https://ghbtns.com/github-btn.html?user=dfahlander&repo=Dexie.js&type=star&count=true",
    "https://buttons.github.io/buttons.js",
    "https://unpkg.com/dexie",
    "https://www.google-analytics.com/analytics.js",
    
    "/docs/API-Reference",
    
    "/docs/Tutorial/Best-Practices",
    
    "/docs/Tutorial/Building-Addons",
    
    "/docs/Collection/Collection.and()",
    
    "/docs/Collection/Collection.clone()",
    
    "/docs/Collection/Collection.count()",
    
    "/docs/Collection/Collection.delete()",
    
    "/docs/Collection/Collection.desc()",
    
    "/docs/Collection/Collection.distinct()",
    
    "/docs/Collection/Collection.each()",
    
    "/docs/Collection/Collection.eachKey()",
    
    "/docs/Collection/Collection.eachPrimaryKey()",
    
    "/docs/Collection/Collection.eachUniqueKey()",
    
    "/docs/Collection/Collection.filter()",
    
    "/docs/Collection/Collection.first()",
    
    "/docs/Collection/Collection.keys()",
    
    "/docs/Collection/Collection.last()",
    
    "/docs/Collection/Collection.limit()",
    
    "/docs/Collection/Collection",
    
    "/docs/Collection/Collection.modify()",
    
    "/docs/Collection/Collection.offset()",
    
    "/docs/Collection/Collection.or()",
    
    "/docs/Collection/Collection.primaryKeys()",
    
    "/docs/Collection/Collection.raw()",
    
    "/docs/Collection/Collection.reverse()",
    
    "/docs/Collection/Collection.sortBy()",
    
    "/docs/Collection/Collection.toArray()",
    
    "/docs/Collection/Collection.uniqueKeys()",
    
    "/docs/Collection/Collection.until()",
    
    "/docs/Compound-Index",
    
    "/docs/Tutorial/Consuming-dexie-as-a-module",
    
    "/docs/Deprecations",
    
    "/docs/DerivedWork",
    
    "/docs/Tutorial/Design",
    
    "/docs/DexieErrors/Dexie.AbortError",
    
    "/docs/DexieErrors/Dexie.BulkError",
    
    "/docs/DexieErrors/Dexie.ConstraintError",
    
    "/docs/DexieErrors/Dexie.DataCloneError",
    
    "/docs/DexieErrors/Dexie.DataError",
    
    "/docs/DexieErrors/Dexie.DatabaseClosedError",
    
    "/docs/DexieErrors/Dexie.IncompatiblePromiseError",
    
    "/docs/DexieErrors/Dexie.InternalError",
    
    "/docs/DexieErrors/Dexie.InvalidAccessError",
    
    "/docs/DexieErrors/Dexie.InvalidArgumentError",
    
    "/docs/DexieErrors/Dexie.InvalidStateError",
    
    "/docs/DexieErrors/Dexie.InvalidTableError",
    
    "/docs/DexieErrors/Dexie.MissingAPIError",
    
    "/docs/DexieErrors/Dexie.ModifyError",
    
    "/docs/DexieErrors/Dexie.NoSuchDatabaseError",
    
    "/docs/DexieErrors/Dexie.NotFoundError",
    
    "/docs/Observable/Dexie.Observable.DatabaseChange",
    
    "/docs/Observable/Dexie.Observable",
    
    "/docs/DexieErrors/Dexie.OpenFailedError",
    
    "/docs/DexieErrors/Dexie.PrematureCommitError",
    
    "/docs/DexieErrors/Dexie.QuotaExceededError",
    
    "/docs/DexieErrors/Dexie.ReadOnlyError",
    
    "/docs/DexieErrors/Dexie.SchemaError",
    
    "/docs/DexieErrors/Dexie.SubTransactionError",
    
    "/docs/Syncable/Dexie.Syncable.IDatabaseChange",
    
    "/docs/Syncable/Dexie.Syncable.IPersistedContext",
    
    "/docs/Syncable/Dexie.Syncable.ISyncProtocol",
    
    "/docs/Syncable/Dexie.Syncable.StatusTexts",
    
    "/docs/Syncable/Dexie.Syncable.Statuses",
    
    "/docs/Syncable/Dexie.Syncable.js",
    
    "/docs/Syncable/Dexie.Syncable.registerSyncProtocol()",
    
    "/docs/DexieErrors/Dexie.TimeoutError",
    
    "/docs/DexieErrors/Dexie.TransactionInactiveError",
    
    "/docs/DexieErrors/Dexie.UnknownError",
    
    "/docs/DexieErrors/Dexie.UnsupportedError",
    
    "/docs/DexieErrors/Dexie.UpgradeError",
    
    "/docs/DexieErrors/Dexie.VersionChangeError",
    
    "/docs/DexieErrors/Dexie.VersionError",
    
    "/docs/Dexie/Dexie.%5Btable%5D",
    
    "/docs/Dexie/Dexie.addons",
    
    "/docs/Dexie/Dexie.async()",
    
    "/docs/Dexie/Dexie.backendDB()",
    
    "/docs/Dexie/Dexie.close()",
    
    "/docs/Dexie/Dexie.currentTransaction",
    
    "/docs/Dexie/Dexie.debug",
    
    "/docs/Dexie/Dexie.deepClone()",
    
    "/docs/Dexie/Dexie.defineClass()",
    
    "/docs/Dexie/Dexie.delByKeyPath()",
    
    "/docs/Dexie/Dexie.delete()",
    
    "/docs/Dexie/Dexie.derive()",
    
    "/docs/Dexie/Dexie.events()",
    
    "/docs/Dexie/Dexie.exists()",
    
    "/docs/Dexie/Dexie.extend()",
    
    "/docs/Dexie/Dexie.fakeAutoComplete()",
    
    "/docs/Dexie/Dexie.getByKeyPath()",
    
    "/docs/Dexie/Dexie.getDatabaseNames()",
    
    "/docs/Dexie/Dexie.hasFailed()",
    
    "/docs/Dexie/Dexie.ignoreTransaction()",
    
    "/docs/Dexie/Dexie.isOpen()",
    
    "/docs/Dexie.js",
    
    "/docs/Dexie/Dexie",
    
    "/docs/Dexie/Dexie.name",
    
    "/docs/Dexie/Dexie.on()",
    
    "/docs/Dexie/Dexie.on.blocked",
    
    "/docs/Dexie/Dexie.on.error",
    
    "/docs/Dexie/Dexie.on.populate-(old-version)",
    
    "/docs/Dexie/Dexie.on.populate",
    
    "/docs/Dexie/Dexie.on.ready",
    
    "/docs/Dexie/Dexie.on.versionchange",
    
    "/docs/Dexie/Dexie.open()",
    
    "/docs/Dexie/Dexie.override()",
    
    "/docs/Dexie/Dexie.semVer",
    
    "/docs/Dexie/Dexie.setByKeyPath()",
    
    "/docs/Dexie/Dexie.shallowClone()",
    
    "/docs/Dexie/Dexie.spawn()",
    
    "/docs/Dexie/Dexie.table()",
    
    "/docs/Dexie/Dexie.tables",
    
    "/docs/Dexie/Dexie.transaction()-(old-version)",
    
    "/docs/Dexie/Dexie.transaction()",
    
    "/docs/Dexie/Dexie.verno",
    
    "/docs/Dexie/Dexie.version()",
    
    "/docs/Dexie/Dexie.version",
    
    "/docs/Dexie/Dexie.vip()",
    
    "/docs/Dexie/Dexie.waitFor()",
    
    "/docs/DexieErrors/DexieError",
    
    "/docs/Download",
    
    "/docs/Tutorial/Getting-started",
    
    "/docs/Tutorial/Hello-World",
    
    "/docs/IndexSpec",
    
    "/docs/Indexable-Type",
    
    "/docs/IndexedDB-on-Safari",
    
    "/docs/Tutorial/Migrating-existing-DB-to-Dexie",
    
    "/docs/MultiEntry-Index",
    
    "/docs/Promise/Promise.PSD",
    
    "/docs/Promise/Promise.catch()",
    
    "/docs/Promise/Promise.finally()",
    
    "/docs/Promise/Promise",
    
    "/docs/Promise/Promise.on.error",
    
    "/docs/Promise/Promise.onuncatched",
    
    "/docs/Questions-and-Answers",
    
    "/docs/Releasing-Dexie",
    
    "/docs/Samples",
    
    "/docs/Simplify-with-yield",
    
    "/docs/StorageManager",
    
    "/docs/Table/Table.add()",
    
    "/docs/Table/Table.bulkAdd()",
    
    "/docs/Table/Table.bulkDelete()",
    
    "/docs/Table/Table.bulkGet()",
    
    "/docs/Table/Table.bulkPut()",
    
    "/docs/Table/Table.clear()",
    
    "/docs/Table/Table.count()",
    
    "/docs/Table/Table.defineClass()",
    
    "/docs/Table/Table.delete()",
    
    "/docs/Table/Table.each()",
    
    "/docs/Table/Table.filter()",
    
    "/docs/Table/Table.get()",
    
    "/docs/Table/Table.hook('creating')",
    
    "/docs/Table/Table.hook('deleting')",
    
    "/docs/Table/Table.hook('reading')",
    
    "/docs/Table/Table.hook('updating')",
    
    "/docs/Table/Table.limit()",
    
    "/docs/Table/Table.mapToClass()",
    
    "/docs/Table/Table",
    
    "/docs/Table/Table.name",
    
    "/docs/Table/Table.offset()",
    
    "/docs/Table/Table.orderBy()",
    
    "/docs/Table/Table.put()",
    
    "/docs/Table/Table.reverse()",
    
    "/docs/Table/Table.schema",
    
    "/docs/Table/Table.toArray()",
    
    "/docs/Table/Table.toCollection()",
    
    "/docs/Table/Table.update()",
    
    "/docs/Table/Table.where()",
    
    "/docs/TableSchema",
    
    "/docs/The-Three-Main-Limitations-of-IndexedDB",
    
    "/docs/Transaction/Transaction.abort()",
    
    "/docs/Transaction/Transaction",
    
    "/docs/Transaction/Transaction.on.abort",
    
    "/docs/Transaction/Transaction.on.complete",
    
    "/docs/Transaction/Transaction.on.error",
    
    "/docs/Transaction/Transaction.table()",
    
    "/docs/Typescript",
    
    "/docs/Tutorial/Understanding-the-basics",
    
    "/docs/Version/Version",
    
    "/docs/Version/Version.stores()",
    
    "/docs/Version/Version.upgrade()",
    
    "/docs/WhereClause/WhereClause.above()",
    
    "/docs/WhereClause/WhereClause.aboveOrEqual()",
    
    "/docs/WhereClause/WhereClause.anyOf()",
    
    "/docs/WhereClause/WhereClause.anyOfIgnoreCase()",
    
    "/docs/WhereClause/WhereClause.below()",
    
    "/docs/WhereClause/WhereClause.belowOrEqual()",
    
    "/docs/WhereClause/WhereClause.between()",
    
    "/docs/WhereClause/WhereClause.equals()",
    
    "/docs/WhereClause/WhereClause.equalsIgnoreCase()",
    
    "/docs/WhereClause/WhereClause.inAnyRange()",
    
    "/docs/WhereClause/WhereClause",
    
    "/docs/WhereClause/WhereClause.noneOf()",
    
    "/docs/WhereClause/WhereClause.notEqual()",
    
    "/docs/WhereClause/WhereClause.startsWith()",
    
    "/docs/WhereClause/WhereClause.startsWithAnyOf()",
    
    "/docs/WhereClause/WhereClause.startsWithAnyOfIgnoreCase()",
    
    "/docs/WhereClause/WhereClause.startsWithIgnoreCase()",
    
    "/docs/Syncable/db.syncable.connect()",
    
    "/docs/Syncable/db.syncable.delete()",
    
    "/docs/Syncable/db.syncable.disconnect()",
    
    "/docs/Syncable/db.syncable.getOptions()",
    
    "/docs/Syncable/db.syncable.getStatus()",
    
    "/docs/Syncable/db.syncable.list()",
    
    "/docs/Syncable/db.syncable.on('statusChanged')",
    
    "/docs/Syncable/db.syncable.setFilter()",
    
    "/docs/ExportImport/dexie-export-import",
    
    "/docs/inbound",
    
    "/docs/Tutorial/",
    
    "/docs/",
    
    "/docs/Promise/unhandledrejection-event",
    
    "/docs/safari-issues",
    

    
    "/CNAME",
    
    "/LICENSE",
    
    "/README.md",
    
    "/assets/css/bootstrap-theme.css",
    
    "/assets/css/bootstrap-theme.css.map",
    
    "/assets/css/bootstrap-theme.min.css",
    
    "/assets/css/bootstrap.css",
    
    "/assets/css/bootstrap.css.map",
    
    "/assets/css/bootstrap.min.css",
    
    "/assets/css/docs.css",
    
    "/assets/css/font-awesome.min.css",
    
    "/assets/css/prism.css",
    
    "/assets/css/prism_docs.css",
    
    "/assets/css/stylesheet.css",
    
    "/assets/fonts/FontAwesome.otf",
    
    "/assets/fonts/fontawesome-webfont.eot",
    
    "/assets/fonts/fontawesome-webfont.svg",
    
    "/assets/fonts/fontawesome-webfont.ttf",
    
    "/assets/fonts/fontawesome-webfont.woff",
    
    "/assets/fonts/glyphicons-halflings-regular.eot",
    
    "/assets/fonts/glyphicons-halflings-regular.svg",
    
    "/assets/fonts/glyphicons-halflings-regular.ttf",
    
    "/assets/fonts/glyphicons-halflings-regular.woff",
    
    "/assets/images/bg.png",
    
    "/assets/images/browserstack-logo-fit-text.png",
    
    "/assets/images/browserstack-logo-fullsize.png",
    
    "/assets/images/dexie-logo-icon.png",
    
    "/assets/images/dexie-logo-icon.svg",
    
    "/assets/images/disc.jpg",
    
    "/assets/images/download-button.png",
    
    "/assets/images/favicon-db.png",
    
    "/assets/images/favicon-yuri.png",
    
    "/assets/images/favicon.pdn",
    
    "/assets/images/favicon.png",
    
    "/assets/images/favicon2.png",
    
    "/assets/images/favicon3.png",
    
    "/assets/images/favicon3b.png",
    
    "/assets/images/fireworks.png",
    
    "/assets/images/logo-dexie.svg",
    
    "/assets/images/tested-with-browserstack.png",
    
    "/assets/images/tested-with-browserstack2.png",
    
    "/assets/images/wrench-294035_640.png",
    
    "/assets/js/bootstrap.js",
    
    "/assets/js/bootstrap.min.js",
    
    "/assets/js/highlight-anchors.js",
    
    "/assets/js/jquery.min.js",
    
    "/assets/js/npm.js",
    
    "/assets/js/offline-switch.js",
    
    "/assets/js/parallax.min.js",
    
    "/assets/js/prism.js",
    
    "/docs/safari-issues.md",
    
    "/googlef37fd828a301ac31.html",
    
    "/index.html",
    
    "/manifest.webmanifest",
    
    "/start.sh",
    
    "/stop.sh",
    
    "/test/dexie-issue-565/dexie.js",
    
    "/test/dexie-issue-565/index.html",
    
    "/test/dexie-issue-565/worker.js",
    
    "/test/dexie-issue-565/worker2.js",
    
    "/test/dexie-issue-594/index.html",
    
    "/test/firefox-bug-binary-keys/index.html",
    
    "/test/firefox-bug-binary-keys/test.js",
    
    "/test/safari-dbname-constraints/index.html",
    
    "/assets/javascript/anchor-js/.eslintrc",
    
    "/assets/javascript/anchor-js/.gitattributes",
    
    "/assets/javascript/anchor-js/.npmignore",
    
    "/assets/javascript/anchor-js/.travis.yml",
    
    "/assets/javascript/anchor-js/anchor.js",
    
    "/assets/javascript/anchor-js/anchor.min.js",
    
    "/assets/javascript/anchor-js/banner.js",
    
    "/assets/javascript/anchor-js/docs/anchor.js",
    
    "/assets/javascript/anchor-js/docs/favicon.ico",
    
    "/assets/javascript/anchor-js/docs/fonts/anchorjs-extras.eot",
    
    "/assets/javascript/anchor-js/docs/fonts/anchorjs-extras.svg",
    
    "/assets/javascript/anchor-js/docs/fonts/anchorjs-extras.ttf",
    
    "/assets/javascript/anchor-js/docs/fonts/anchorjs-extras.woff",
    
    "/assets/javascript/anchor-js/docs/fonts/fonts.css",
    
    "/assets/javascript/anchor-js/docs/grunticon/grunticon.loader.js",
    
    "/assets/javascript/anchor-js/docs/grunticon/icons.data.png.css",
    
    "/assets/javascript/anchor-js/docs/grunticon/icons.data.svg.css",
    
    "/assets/javascript/anchor-js/docs/grunticon/icons.fallback.css",
    
    "/assets/javascript/anchor-js/docs/grunticon/png/grunticon-link.png",
    
    "/assets/javascript/anchor-js/docs/img/anchoring-links.png",
    
    "/assets/javascript/anchor-js/docs/img/anchorjs_logo.png",
    
    "/assets/javascript/anchor-js/docs/img/anchorlinks2.png",
    
    "/assets/javascript/anchor-js/docs/img/gh-link.svg",
    
    "/assets/javascript/anchor-js/docs/img/gh_link.svg",
    
    "/assets/javascript/anchor-js/docs/img/hyperlink.svg",
    
    "/assets/javascript/anchor-js/docs/img/link.svg",
    
    "/assets/javascript/anchor-js/docs/img/mini-logo.png",
    
    "/assets/javascript/anchor-js/docs/img/primer-md.png",
    
    "/assets/javascript/anchor-js/docs/scripts.js",
    
    "/assets/javascript/anchor-js/docs/styles.css",
    
].filter(file => !file.startsWith("/test") && !file.includes("analytics.js"));

const CACHE_NAME = 'dexiejs-offline-cache';

async function waitForAll(promises){
    return new Promise( resolve => {
        let rc = { success: 0, failure:0 };
        for (let i=0; i < promises.length; i++) {
            promises[i]
            .then(()=>{
                rc.success++;
                if (rc.success+rc.failure === promises.length) resolve(rc);
            }).catch(err => {
                rc.failure++;
                if (rc.success+rc.failure === promises.length) resolve(rc);
                console.error(`error occurred ${err}`);
            });
        }
    });
}

/*
function isCurrentSite(url){
    const u  = new URL(url);
    if (self.location.origin === u.origin){
        return true;
    }
    return false;
}

function shortIfLocal(url){
    const u  = new URL(url);
    if (isCurrentSite(u)) {
        return u.pathname;
    }
    return u.href;
}

function correctUrlForLocal(url){
    // try to construct url
    let temp;
    try{
       temp = new URL(url);
    } catch (err) {
        try {
            temp = new URL(self.location.origin+url);
        }
        catch(err2){
            temp = undefined;
        }
    } 
    if (!temp) return url;   
    if (!isCurrentSite(temp)) return temp;
    temp.pathname = temp.pathname.replace(/\/$/,'');
    return temp;
}*/

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.delete(CACHE_NAME)
        .then(() => caches.open(CACHE_NAME))
        .then(async cache => {
            console.log('Opened cache');
            const leadingSlashRemoved = raw.map(url => url);
            do {
                // cache in batches of 10
                const sliceDice = leadingSlashRemoved.splice(0, 50);
                await waitForAll(sliceDice.map(async url => {
                    const response = await fetch(url);
                    //console.log("URL", url, response);
                    await cache.put(url, response);
                }));
            } while(leadingSlashRemoved.length > 0);
            return true;
        })
    );
});

const MAX_WAIT = 300; // If network responds slower than 100 ms, respond with cache instead

self.addEventListener('fetch', function (event) {
    // Start reading from cache
    const cachedResponsePromise = caches.match(event.request);
    const fetchPromise = fetch(event.request);
    const timeoutPromise = new Promise(resolve => {
        setTimeout(()=>resolve("timedout"), MAX_WAIT);
    });
    // Start fetching in parallell
    event.respondWith(Promise.race([fetchPromise, timeoutPromise]).then(async res => {
        // Fetch successful, probably online. See if we also have the cached response:
        const cachedResponse = await cachedResponsePromise.catch(err => null);
        if (res === "timedout" || !res.ok) {
            // Fetch didn't throw but the result wasn't ok either.
            // Could be timeout, a 404, 500 or maybe offline?
            // In case we have an OK response in the cache, respond with that one instead:
            if (cachedResponse && cachedResponse.ok) {
                if (res === "timedout") console.log("URL", event.request.url, "timedout. Serving it from cache to speed up site");
                return cachedResponse;
            } else if (res === "timedout") {
                // We don't have anything in cache. Wait for fetch even if it takes time.
                res = await fetchPromise;
            } else {
                return res;
            }
        }

        if (res.ok) {
            // Should we update the cache with this fresh version?
            if (!cachedResponse || (cachedResponse.headers.get("last-modified") !== res.headers.get("last-modified"))) {
                // There were no cached response, or "last-modified" headers was changed - keep the cache up-to-date,
                // so that, when the user goes offline, it will have the latest and greatest, and not revert to old versions
                const cache = await caches.open(CACHE_NAME);
                await cache.put(event.request, res.clone());
            }
        }
        return res;
    }, async error => {
        const cachedResponse = await cachedResponsePromise.catch(err => null);
        if (cachedResponse && cachedResponse.ok) {
            return cachedResponse;
        }
        throw error;
    }));
});
