### Placeholders

  - `file_link`: the relative path to the shared file as seen from
    `index.html`.
  - `file_ext`: the normalized file extension (trimmed & lowercase).
  - `short_url`: the drpln.gs URL leading to the preview page.
  - `original_filename`: The name of the file as it was when the file was
    shared.
  - `is_ext_*`: a "dynamic" placeholder — for example, if the shared file
    is a `.gif`, the placeholder `is_ext_gif` would be set.
  - `is_archive`: the file is an archive (zip, tgz, rar etc.)
  - `is_audio`: the file is an audio file (mp3, m4a, wav etc.)
  - `is_contact`: the file is a vcard file
  - `is_image`: the file is an image (png, jpg, tiff, gif etc.)
  - `is_message`: the file is a recognized message (email, IM, and so on)
  - `is_pdf`: the file is a mixed content file, i.e. a PDF.
  - `is_text`: the file is text document (html, rtf, mdown etc.)
  - `is_video`: the file is a video (mov, mpg etc.)
  - `is_unknown_type`: the file wasn't recognized as one of the files listed
    above
