# Servus: Default Theme v1.3

[Servus][servus] is a Mac app to make quick-fire sharing via your [Dropbox account][dropbox] easier and more comfortable.  Its preferences allow you to specify a custom theme for rendering your shared files' preview pages.

This repository contains the most recent version of Servus' built-in default theme.  Feel free to fork and build your own custom themes to make your shared preview pages more personal.  **If you're looking for a quicker way to get started, you'll probably want
[servus-theme-boilerplate][boilerplate-github] instead.**

Please note that this repository contains _everything_ related to the default theme:

  1. the theme's [`index.html`][index-html]
  2. the theme's supporting [asset files][assets] (CSS, images etc.)
  3. the [Heroku][heroku]-related code running the built-in theme's supporting assets server `assets.servus.io`

If you're only interested in seeing the themeing example serving as the default theme, number (1) on the above list is all that you need.

For starters, here's a screenshot of the default theme in action.

![Screenshot of Servus default theme (v1.3)](https://github.com/carlo/servus-default-theme/raw/master/screenshot-v1.3.jpg)


## Documentation

To learn more about Servus' templating process and what you can do 
with it, see [the documentation](http://documentup.com/carlo/servus-theme-boilerplate).


## Build Notes

For the time being, my "master files" are the HAML/SASS source files residing in `src/`.  These are compiled to HTML/CSS (created in `build/` and `assets/`, respectively) by [LiveReload][livereload].


## Legal

The Servus Default Theme is copyright © 2012-2013 Carlo Zottmann, [municode.de](http://municode.de/), carlo@municode.de.

3rd party libraries and code (listed below) expressively excluded, the Servus Default Theme (this here repository) is licensed under the WTFPL v2.

               DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                       Version 2, December 2004
    
    Copyright (C) 2004 Sam Hocevar
     14 rue de Plaisance, 75014 Paris, France
    Everyone is permitted to copy and distribute verbatim or modified
    copies of this license document, and changing it is allowed as long
    as the name is changed.
    
               DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
      TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
    
     0. You just DO WHAT THE FUCK YOU WANT TO.


### Font: Font Awesome

Servus default theme is using the rather nice glyphs of [Font Awesome][font-awesome].  Copyright (C) 2012 by Dave Gandy, released under a [CC BY 3.0][license-cc-by-30] license.


### Font: Arimo

Servus main display font is [Arimo][arimo], released under the [SIL Open Font License v1.1][license-sil].


### Basic CSS: Bootstrap by Twitter

The basic CSS structure is [Bootstrap by Twitter][bootstrap], release under the Apache License v2.0.


### Background: Debut Light

The default theme's background image is [Debut Light][debut-light] by [Subtle Patterns][subtle-patterns], released under a [CC BY 3.0][license-cc-by-30] license.



[arimo]: http://www.google.com/webfonts/specimen/Arimo
[assets]: https://github.com/carlo/servus-default-theme/tree/master/assets
[boilerplate-github]: https://github.com/carlo/servus-theme-boilerplate
[bootstrap]: http://twitter.github.com/bootstrap/
[debut-light]: http://subtlepatterns.com/debut-light/
[dropbox]: http://db.tt/T84kkEv
[font-awesome]: http://fortawesome.github.com/Font-Awesome/
[heroku]: http://heroku.com
[index-html]: https://github.com/carlo/servus-default-theme/blob/master/build/index.html
[jquery]: http://jquery.com/
[license-cc-by-30]: http://creativecommons.org/licenses/by/3.0/
[license-sil]: http://scripts.sil.org/OFL
[livereload]: http://livereload.com/
[mustache]: http://mustache.github.com/
[servus]: http://servus.io
[subtle-patterns]: http://subtlepatterns.com/
