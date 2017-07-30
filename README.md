# Tweet Coding tool

This is a open source application that runs locally in your browser and displays
embedded tweets so they can be coded as "True", "False", "unknown" and notes
recorded against each tweet. To use the app open `index.html` in the `dist`
directory. By default a sample dataset of Donald Trump tweets
(sourced from https://archive.org/details/trump-tweet-ids) is displayed.

To show your own dataset, open the `Tweet ID editor` dropdown and replace the
default tweet ids with your own tweet ids - one per line. The `Tweet ID editor`
can then be minimised to give more screen space for coding.

Your coding will be saved on your local disk and persists between sessions.
You can use the `reset` button to remove any previous coding.

The coding can be exported to a CSV file by using the `Save Data (CSV)` link.

## Citing

If you use this tool in your research please cite it as

Brenda Moon (2017) tweet-coding 1.0: [![DOI](https://zenodo.org/badge/98805900.svg)](https://zenodo.org/badge/latestdoi/98805900)

## Development

To contribute to the development of this tool you need to have Node.js
installed. It is available here: https://nodejs.org/en/download/
(this will also install npm)

I welcome pull requests and reporting of problems via GitHub issues.

### To run in development mode:

```
npm install
npm run watch
```

### To build for distribution:
```
npm run build:dist
```
