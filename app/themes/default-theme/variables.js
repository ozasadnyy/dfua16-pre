/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var primaryColorName = 'indigo',
    accentColorName  = 'pink',
    themeMode        = 'light', // or dark

    colors           = require('./colors'),
    primaryColor     = '#607D8B';

module.exports = {
  global: {
    primaryColorName: primaryColorName,
    accentColorName: accentColorName,
    themeMode: themeMode
  },

  // Web Application Manifest - manifest.json
  manifest: {
    'theme_color': primaryColor,
    'background_color': '#fff'
  },

  // HTML Metadata in head of index.html
  metadata: {
    // Chrome for Android theme color
    chromeThemeColor: primaryColor,
    // Tile color for Win8
    msapplicationTileColor: primaryColor
  }
};
