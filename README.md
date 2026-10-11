# Containerised App with CI/CD Pipeline

## 📋 Project Overview
Developed by **Muhammad Huzaifa Azeem**, this repository provides a production-ready template for containerized microservices managed via Docker Compose and automated using GitHub Actions CI/CD. It solves environment drift by ensuring identical containerized environments across local development and production.

## 🏛️ Architecture Diagram
```mermaid
graph TD
    User -->|HTTP 8082| Nginx[Nginx Frontend Container]
    User -->|HTTP 3000| API[Node.js API Container]
