## Docker commands

### In the project directory:
`Dockerfile`
`docker-compose.yml`

## In the project directory run:

- To build the image from the Dockerfile, run:

`docker build -t docker-example .`

- To run the image, run:

`docker run -d --name docker-example-cont -p 3000:3000 docker-example`

- To list the images, run:

`docker images`

- Delete the image with image name and tag, run: 

`docker rmi docker-example:latest`

- List all the containers, run:

`docker ps -a`

- Stop the container:

`docker stop docker-example-cont`

- Run the stopped container:

`docker start docker-example-cont`

- Remove the running container:

`docker rm -f docker-example-cont`

- Run all:

`docker-compose up`

`docker-compose up -d`

- Stop all:

`docker-compose stop`

- Remove all:

`docker-compose rm`

- Stop and remove all:

`docker-compose down`

- Logs for docker service in docker-compose:

`docker-compose logs app`

`docker-compose logs db`

- Run all with the env vars:

```
export NODE_ENV=production
export DATABASE_URL=postgres://user:pass@db:5432/mydatabase
export POSTGRES_DB=mydatabase
export POSTGRES_USER=user
export POSTGRES_PASSWORD=pass

docker-compose up
```


