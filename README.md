# Landinger: Default Theme v1.0

[Landinger](landinger) is a Mac app to make quick-fire sharing via your [Dropbox account][dropbox] easier and more comfortable.  Its preferences allow you to specify a custom theme for rendering your shared files' preview pages.

This repository contains the most recent version of Landinger' built-in default theme.  Feel free to fork and build your own custom themes to make your shared preview pages more personal.  **If you're looking for a quicker way to get started, you'll probably want
[landinger-theme-boilerplate][boilerplate-github] instead.**

Please note that this repository contains _everything_ related to the default theme:

  1. the theme's [`index.html`][index-html]
  2. the theme's supporting [asset files][assets] (CSS, images etc.)
  3. the [Heroku][heroku]-related code running the built-in theme's supporting assets server `assets.landingerapp.com`

If you're only interested in seeing the themeing example serving as the default theme, number (1) on the above list is all that you need.

For starters, here's a screenshot of the default theme in action.

![Screenshot of Landinger default theme (v1.0)](https://github.com/carlo/landinger-default-theme/raw/master/screenshot-v1.0.jpg)


## Templating Engine

Landinger is making use of [Mustache][mustache], a well-known logic-less templating engine.  You can find all you need to know about its syntax on the [Mustache website][mustache].


## Theme Workflow

The templating process goes like this:

  1. All non-`.html` files will be copied verbatim to the target folder (`~/Dropbox/Public/share/YYYY-MM/…/`).
  2. All `.html` will be run through the templating engine, the resulting files will be written to the target folder (using their original names, i.e. an `index.html` with placeholders in your theme folder will result in an `index.html` filled with live data in the target folder).
  3. The shared file will be copied to a `f` subfolder in the target directory; its name will be normalized a bit.
  
A few notes:

  - Your theme **must** contain an `index.html`.
  - Landinger will ignore subfolders.  Only files in the root folder of your theme are recognized.
  - The default theme only contains one HTML and no JS file.  There's no reason why your theme can't sport more than one HTML file and/or JS files.  The templating engine won't replace keys in JS files, tho, so if you want to set JS variables, do so in a `<script>` block in the HTML file prior to loading your external JS file.
 
   

## Template Placeholders

Here's a list of available template keys/variables with their meaning.

  - `file_link`: the relative path to the shared file as seen from
    `index.html`.
  - `file_ext`: the normalized file extension (trimmed & lowercase).
  - `file_size`: the file size in readable format, eg. "2.70 KB", 
    "5.12 GB".
  - `short_url`: the landingerapp.com URL leading to the preview page.
  - `original_filename`: The name of the file as it was when the file was
    shared.
  - `is_archive`: the file is an archive (zip, tgz, rar etc.)
  - `is_audio`: the file is an audio file (mp3, m4a, wav etc.)
  - `is_contact`: the file is a vcard file
  - `is_image`: the file is an image (png, jpg, tiff, gif etc.)
  - `is_message`: the file is a recognized message (email, IM, and so on)
  - `is_pdf`: the file is a mixed content file, i.e. a PDF.
  - `is_text`: the file is text document (html, rtf, mdown etc.)
  - `is_video`: the file is a video (mov, mpg etc.)
  - `is_unknown_type`: the file wasn't recognized as one of the files 
    listed above
  - `is_ext_*`: a "dynamic" placeholder — for example, if the shared file
    is a GIF then the placeholder `is_ext_gif` would be set.


## Build Notes

For the time being, my "master files" are the HAML/SASS source files residing in `src/`.  These are compiled to HTML/CSS (created in `build/` and `assets/`, respectively) by [LiveReload][livereload].


## Legal

The Landinger Default Theme are copyright © 2012 Carlo Zottmann, [municode.de](http://municode.de/), carlo@municode.de.

3rd party libraries and code (listed below) expressively excluded, the Landinger Default Theme (this here repository) is licensed under the WTFPL v2.

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

Landinger default theme is using the rather nice glyphs of [Font Awesome][font-awesome].  Copyright (C) 2012 by Dave Gandy, released under a [CC BY 3.0][license-cc-by-30] license.


### Font: Yanone Kaffeesatz

Landinger main display font is [Yanone Kaffeesatz][kaffeesatz], released under the [SIL Open Font License v1.1][license-sil].


### Basic CSS: ZURB Foundation 3.0

The basic CSS structure is [ZURB Foundation 3.0][zurb-foundation], release under the MIT Open Source License.


### Background: Clean Gray Paper

The default theme's background image is [Clean Gray Paper][clean-gray-paper] by [Subtle Patterns][subtle-patterns], released under a [CC BY 3.0][license-cc-by-30] license.



[assets]: https://github.com/carlo/landinger-default-theme/tree/master/assets
[boilerplate-github]: https://github.com/carlo/landinger-theme-boilerplate
[dropbox]: http://db.tt/T84kkEv
[landinger]: http://landingerapp.com
[font-awesome]: http://fortawesome.github.com/Font-Awesome/
[heroku]: http://heroku.com
[index-html]: https://github.com/carlo/landinger-default-theme/blob/master/build/index.html
[kaffeesatz]: http://www.google.com/webfonts/specimen/Yanone+Kaffeesatz
[license-cc-by-30]: http://creativecommons.org/licenses/by/3.0/
[license-sil]: http://scripts.sil.org/OFL
[livereload]: http://livereload.com/
[mustache]: http://mustache.github.com/
[zurb-foundation]: https://github.com/zurb/foundation
[subtle-patterns]: http://subtlepatterns.com/
[clean-gray-paper]: http://subtlepatterns.com/clean-gray-paper/
