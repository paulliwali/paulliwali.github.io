# Kubernetes Snippets

## K9s

Fuze connect and launch K9s

```bash
fuze k8s clusters connect <cluster_name>
k9s -c dp
```

Log a pod

```bash
kubectl -n <deployment_namespace> logs <pod_name>
```

## Docker Snippets

- `docker ps` to list the docker container
- `docker exec -it <DOCKER-CONTAINER-NAME> bash` to launch the container
- `docker logs <DOCKER-CONTAINER-NAME>` to look at the logs
