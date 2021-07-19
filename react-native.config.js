
'use strict';

//  const web = require('@react-native-community/cli-platform-web');

const web = {
    commands: [
        {
            name: 'run-web',
            // description: 'builds your app and starts it on iOS simulator',
            func: (_, ctx, args) => {
                // console.log(_, ctx, args)
            }
        }
    ]
}
 
module.exports = {
    commands: web.commands,
    platforms: {
        web: {
            npmPackageName: "react-native-web-rewired",
            linkConfig: () => null,
            projectConfig: () => null,
            dependencyConfig: () => null,
        },
    },
};
 