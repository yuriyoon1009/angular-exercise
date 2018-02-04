// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyD9C9t_p-LFQhB0HZnG_3IYEhAbMD3wKtI',
        authDomain: 'todolist-6d8d9.firebaseapp.com',
        databaseURL: 'https://todolist-6d8d9.firebaseio.com',
        projectId: 'todolist-6d8d9',
        storageBucket: 'todolist-6d8d9.appspot.com',
        messagingSenderId: '143069797142'
    }
};
