# Filesystem

You can use your local filesystem to handle your image uploads in mdCollab.

You just add the following lines to your configuration:  
(with the appropriate substitution for `<DIRECTORY>` of course)

```dotenv
MDCOLLAB_MEDIA_BACKEND_TYPE="filesystem"
MDCOLLAB_MEDIA_BACKEND_FILESYSTEM_UPLOAD_PATH="<DIRECTORY>"
```

Please make sure that the user that runs mdCollab is able to write to the `uploads` directory.
