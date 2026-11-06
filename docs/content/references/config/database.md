# Database

We officially support and test these databases:

- SQLite (for development and smaller instances)
- PostgreSQL
- MariaDB

!!! warning  
    We don't necessarily support MySQL.

<!-- markdownlint-disable proper-names -->
| environment variable   | default | example             | description                                                                                |
|------------------------|---------|---------------------|--------------------------------------------------------------------------------------------|
| `MDCOLLAB_DATABASE_TYPE`     | -       | `postgres`          | The database type you want to use. This can be `postgres`, `mariadb` or `sqlite`.          |
| `MDCOLLAB_DATABASE_NAME`     | -       | `mdcollab`          | The name of the database to use. When using SQLite, this is the path to the database file. |
| `MDCOLLAB_DATABASE_HOST`     | -       | `db.example.com`    | The host, where the database runs. *Only if you're **not** using `sqlite`.*                |
| `MDCOLLAB_DATABASE_PORT`     | -       | `5432`              | The port, where the database runs. *Only if you're **not** using `sqlite`.*                |
| `MDCOLLAB_DATABASE_USERNAME` | -       | `mdcollab`          | The user that logs in the database. *Only if you're **not** using `sqlite`.*               |
| `MDCOLLAB_DATABASE_PASSWORD` | -       | `password`          | The password to log into the database. *Only if you're **not** using `sqlite`.*            |
<!-- markdownlint-enable proper-names -->

## TLS

To secure the connection between mdCollab and your database server, you can enable TLS.
This is only available for PostgreSQL and MariaDB, not for SQLite.

<!-- markdownlint-disable proper-names -->
| environment variable                  | default | example                  | description                                                                                                                             |
|---------------------------------------|---------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `MDCOLLAB_DATABASE_TLS_ENABLED`             | `false` | `true`                   | Set to `true` to enable TLS for the database connection.                                                                                |
| `MDCOLLAB_DATABASE_TLS_CA_PATH`             | -       | `/path/to/ca.pem`        | The file path of the CA certificate used as trust anchor for verifying the database server's certificate.                               |
| `MDCOLLAB_DATABASE_TLS_CERT_PATH`           | -       | `/path/to/cert.pem`      | The file path of the client certificate for mutual TLS authentication.                                                                  |
| `MDCOLLAB_DATABASE_TLS_KEY_PATH`            | -       | `/path/to/key.pem`       | The file path of the client private key for mutual TLS authentication.                                                                  |
| `MDCOLLAB_DATABASE_TLS_REJECT_UNAUTHORIZED` | `true`  | `false`                  | Whether to verify the database server's certificate against the CA. Set to `false` to allow self-signed certificates (not recommended). |
| `MDCOLLAB_DATABASE_TLS_CIPHERS`             | -       | `TLS_AES_256_GCM_SHA384` | The TLS cipher suites to use instead of the Node.js defaults.                                                                           |
| `MDCOLLAB_DATABASE_TLS_MIN_VERSION`         | -       | `TLSv1.2`                | The minimum TLS version to allow. Must be `TLSv1.2` or `TLSv1.3`.                                                                       |
| `MDCOLLAB_DATABASE_TLS_MAX_VERSION`         | -       | `TLSv1.3`                | The maximum TLS version to allow. Must be `TLSv1.2` or `TLSv1.3`.                                                                       |
| `MDCOLLAB_DATABASE_TLS_PASSPHRASE`          | -       | `my-passphrase`          | The passphrase for the client private key. *Only used for PostgreSQL.*                                                                  |
<!-- markdownlint-enable proper-names -->

!!! note
    The certificate file paths point to PEM-encoded files on the filesystem. Their contents
    are read at application startup. Make sure the files are accessible to the mdCollab process.

!!! note
    `MDCOLLAB_DATABASE_TLS_PASSPHRASE`, `MDCOLLAB_DATABASE_TLS_MIN_VERSION`, and
    `MDCOLLAB_DATABASE_TLS_MAX_VERSION` are only supported for PostgreSQL connections.
    MariaDB connections only support `MDCOLLAB_DATABASE_TLS_CA_PATH`,
    `MDCOLLAB_DATABASE_TLS_CERT_PATH`,
    `MDCOLLAB_DATABASE_TLS_KEY_PATH`, `MDCOLLAB_DATABASE_TLS_REJECT_UNAUTHORIZED`, and
    `MDCOLLAB_DATABASE_TLS_CIPHERS`.
