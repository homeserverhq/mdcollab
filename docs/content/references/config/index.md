# Configuration

mdCollab can be configured via environment variables either directly or via an `.env` file.

## The `.env` file

The `.env` file should be in the root directory of the mdCollab application and
contains key-value pairs of environment variables and their corresponding value.
In the official Docker container this is `/usr/src/app/.env`
This can for example look like this:

<!-- markdownlint-disable proper-names -->
```ini
MDCOLLAB_BASE_URL="http://localhost:8080"
MDCOLLAB_SESSION_SECRET="change_me_in_production"
MDCOLLAB_DATABASE_TYPE="sqlite"
MDCOLLAB_DATABASE_NAME="./mdcollab.sqlite"
MDCOLLAB_MEDIA_BACKEND="filesystem"
MDCOLLAB_MEDIA_BACKEND_FILESYSTEM_UPLOAD_PATH="uploads/"
```
<!-- markdownlint-enable proper-names -->

We also provide an `.env.example` file containing a minimal configuration
in the root of the project. This should help you to write your own configuration.

!!! warning  
    The minimal configuration provided in `.env.example` is exactly that: minimal.  
    It will let you start mdCollab for local development,
    but it is **not** meant to be used in production without prior changes.
