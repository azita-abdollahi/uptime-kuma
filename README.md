## Uptime-Kuma Integration with Grafana and Prometheus

Uptime-kuma is a free and open-source self-hosted monitoring solution that can be used to monitor the uptime and performance of your websites, APIs, and services. It provides a simple, user-friendly web interface that allows you to manage your monitoring configurations, view your monitoring results, and receive alerts in real-time.

Key features of uptime-kuma include:

- Dashboard: A customizable dashboard that shows you the overall health and status of your monitored services.
- Multi-location monitoring: Uptime-kuma allows you to monitor your services from multiple locations to ensure that they're available to users around the world.
- Integration with popular notification services: Uptime-kuma can send alerts to popular notification services such as Slack, Telegram, and Email, so you can receive alerts in the way that works best for you.
- User management: Uptime-kuma allows you to manage multiple user accounts, so you can grant access to your monitoring dashboard to your team members.
- Responsive design: The user interface of uptime-kuma is designed to work well on desktop and mobile devices, so you can easily monitor your services from anywhere.

Instructions for installation and usage of uptime-kuma can be found on the official GitHub repository: https://github.com/louislam/uptime-kuma

Uptime-kuma is a great monitoring tool for anyone who needs to monitor the uptime and performance of their services. It's easy to install and configure, and it provides all the features you need to ensure that your services are always available to your users.

# Prerequisites

- Docker and Docker Compose are installed.
- Port 3000 and 9090 and 3001 are free and available on your machine.

## Getting Started

1. Create a new directory for the project:

   ```shell
   mkdir uptime-kuma
   cd uptime-kuma
   ```

2. Create a new `docker-compose.yml` file:

   see [`here`](https://github.com/azita-abdollahi/uptime-kuma/blob/master/docker-compose.yml).

3. Create a new `prometheus.yml` file:

   see [`here`](https://github.com/azita-abdollahi/uptime-kuma/blob/master/config/prometheus.yml).

### Run Project:	

```shell
#start containers
docker compose up -d
#stop containers
docker compose down
#follow logs
docker compose logs -f
```

Note: these commands use for create volumes

```shell
docker volume create prometheus_data
docker volume create grafana_data
```

and this command use for create network:

```shell
docker network create \
  --driver=bridge \
  --subnet=192.168.22.0/24 \
  --ip-range=192.168.22.0/24 \
  --gateway=192.168.22.254 \
  connet
```

