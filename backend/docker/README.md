<!--
SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Using mdCollab with Docker

**Important:** This README describes mdCollab, not HedgeDoc 1.

The `Dockerfile` in this repo uses multiple stages and can be used to create both images for development
and images with only production dependencies.
It uses features which are only available in BuildKit - see https://docs.docker.com/go/buildkit/ for more information.

## Build a production image
**Note:** This does not include any frontend!

To build a production image, run the following command *from the root of the repository*:
`docker buildx build -t mdcollab-prod -f backend/docker/Dockerfile .`

When you run the image, you need to provide environment variables to configure mdCollab.
See [the config docs](../../docs/content/references/config/index.md) for more information.
This example starts mdCollab on localhost, with non-persistent storage:
`docker run -e MDCOLLAB_BASE_URL=http://localhost -e MDCOLLAB_MEDIA_BACKEND_TYPE=filesystem -e MDCOLLAB_MEDIA_BACKEND_FILESYSTEM_UPLOAD_PATH=uploads -e MDCOLLAB_DATABASE_TYPE=sqlite -e MDCOLLAB_DATABASE_NAME=mdcollab.sqlite -e MDCOLLAB_SESSION_SECRET=foobar -e MDCOLLAB_LOG_LEVEL=debug -p 3000:3000 mdcollab-prod`


## Build a development image
You can build a development image using the `development` target:
`docker buildx build -t mdcollab-dev -f backend/docker/Dockerfile --target development .`

You can then, e.g. run tests inside the image:
`docker run mdcollab-dev pnpm run test:e2e`
