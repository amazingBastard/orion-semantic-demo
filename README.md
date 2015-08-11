# Orion Semantic-UI Demo

[DEMO](http://orion-semantic-ui.meteor.com)

## Packages Used

* Meteor Core
  * [meteor-platform](https://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Routing
  * [iron:router](https://github.com/EventedMind/iron-router)
* Collections
  * [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/)
* Accounts
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
  * [useraccounts:semantic-ui](https://github.com/meteor-useraccounts/semantic-ui)
  * [nicolaslopezj:roles](https://github.com/nicolaslopezj/roles)
* CMS
  * [orionjs:core](https://github.com/orionjs/orion)
  * [dvz:orion-semantic-ui](https://github.com/amazingBastard/orion-semantic-ui)
  * [orionjs:file-attribute](https://github.com/orionjs/orion/tree/master/packages/file-attribute)
  * [orionjs:froala](https://github.com/orionjs/orion/tree/master/packages/froala)
  * [orionjs:filesystem](https://github.com/orionjs/orion/tree/master/packages/filesystem)
  * [orionjs:s3](https://github.com/orionjs/orion/tree/master/packages/s3)
  * [orionjs:pages](https://github.com/orionjs/orion/tree/master/packages/pages)
* UI and UX
  * [fastclick](https://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [semantic:ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS/)
* SEO
  * [manuelschoebel:ms-seo](https://github.com/DerMambo/ms-seo)
* Development
  * [flemay:less-autoprefixer](https://github.com/flemay/less-autoprefixer/)
  * [momentjs:moment](https://github.com/moment/moment/)
  * [msavin:mongol](https://github.com/msavin/Mongol)

## Folder structure

  ```
  client/             # Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    templates/          # Contains all templates
      layouts/            # Router layouts
      views/              # All the views
      modules/            # UI elements and components (i.e. forms, actions, etc...)
  orion/              # Orion CMS files
    dictionary/         # Orion dictionary definitions
    lib/                # Configs or files you want loaded first
    roles/              # CMS user roles
  models/             # Model files, for each Meteor.Collection
  private/            # Private files
  public/             # Public files
  router/             # All router related things
  server/             # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    methods/            # Server methods
    lib/                # Server side library folder
    publications/       # Collection publications
    startup/            # On server startup
  tests/              # All tests
    client/             # client tests
      integration/        # integration tests
      unit/               # unit tests
    server/             # server tests
      integration/        # integration tests
      unit/               # unit tests
  ```
