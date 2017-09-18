# Deeson Demo Website

The purpose of this project is to act as a demo site for Deeon's way of developing websites and, in particular, to showcase out Component Driven Development process.

This is a full website, using Docker Compose and Docker Sync for local hosting. We work on Macs so if you are trying to run this on something else, your milage may vary.

# Getting started

1. Make sure you have the following global dependencies installed: php, composer, docker and docker-sync installed on your local machine. For drush to work with Docker, you'll need to add the following line to your `/etc/hosts` file: `127.0.0.1 docker.local`

2. Clone the repo to a folder called cdd-demo (the folder name is important!)

```
$> git clone git@github.com:teamdeeson/cdd-demo.git
```

3. Go into the folder and boot up the docker environment:

```
$> cd cdd-demo
$> make docker-start
```

4. Build the project assets and install Drupal

```
$> make build && make install
```

5. Go check the Drupal site is up and running at [http://localhost](http://localhost)

6. Go and check that the static frontend assets are being served at: [http://frontend.localhost/webpack-dev-server/](http://frontend.localhost/webpack-dev-server/)

7. Generate some test content:

```
$> drush @docker genc 20
```

# Overview of development

If you completed the steps in the previous section you should now have your development environment setup. From now on, you start the development environment with `make docker-start` and when you are done use `make docker-stop`
