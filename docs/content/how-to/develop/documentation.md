# Documentation

Our documentation is built with [mkdocs][mkdocs]. While you can write documentation with every text
editor you like, if you want to build the documentation and want to see how it will look you need
to have [python3][python3] and [mkdocs][mkdocs] installed.

## Writing

All documentation files are found in the `docs/content` directory of the mdCollab repository.
These files are just normal markdown files with nothing special about them.

The configuration for mkdocs lies in the `docs` folder in a file called `mkdocs.yml`. With that file
the theme and menu - among others - can be configured.
**Please note:** Any new files need to be linked to by other files or put in the navigation,
otherwise the files will be very hard to find in the documentation.

## Building

To build the documentation locally you need to perform the following steps:

1. Make sure you have [python3][python3] installed. `python3 --version`
2. Go into the `docs` folder.
3. Install all the dependencies (E.g. with a [venv](https://docs.python.org/3/library/venv.html))
   with `pip install -r requirements.txt`
4. Start the mkdocs dev server (`mkdocs serve`) or build the documentation (`mkdocs build`).

If you run `mkdocs serve` a local server will serve the mkdocs files and change the served files as
you write documentation.

## Deployment

The documentation can be built as static files with `mkdocs build`. Deploying the generated site is
outside the scope of this repository.

[mkdocs]: https://www.mkdocs.org
[python3]: https://www.python.org/
