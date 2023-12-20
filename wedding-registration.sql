\echo 'Delete and recreate wedding_registration db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE wedding_registration;
CREATE DATABASE wedding_registration;
\connect wedding_registration;

\i wedding-registration-schema.sql