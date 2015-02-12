# Google Cloud Print - Supported Mime Types

## Standard Types
*listing only types that make sense for printing*

* application
  - /pdf
  - /json
* image
  - /jpeg
  - /png
* text
  - /html
  - /xml
  - /plain

## Non-Standard Types

**Note GDrive, GDoc**

| Mimetype | Content |
|:---------|--------:|
| "url" | URL to be printed |
| "dataUrl" | Content of a URL data document as a string |
| "google.drawing" | Document ID of a Google Drawing |
| "google.drive" | ID of a file in a user's Google Drive |
| "google.kix" | ID of a Google Document |
| "google.mail" | ID of a Gmail thread |
| "google.presentation" | ID of a Google Presentation |
| "google.spreadsheet" | ID of a Google Spreadsheet |

## GDrive / GDocs Types

* Drive folder - application/vnd.google-apps.folder
