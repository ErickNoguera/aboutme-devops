# 🚀 Aboutme DevOps

**Aboutme DevOps** es un proyecto que implementa tecnologías modernas de **DevOps** sobre una aplicación web personal. Este proyecto demuestra la containerización, orquestación y monitoreo de una aplicación usando **Docker**, **Kubernetes**, **Helm** y **Grafana**.

## 🌟 Descripción

Este proyecto toma una aplicación web personal simple (HTML, CSS, JavaScript) y la transforma en una solución completa de DevOps, implementando las mejores prácticas de:

- **Containerización** con Docker
- **Orquestación** con Kubernetes  
- **Gestión de paquetes** con Helm
- **Monitoreo y visualización** con Grafana y Prometheus

La aplicación original presenta una landing page personal con funcionalidad para agregar tarjetas de actividades favoritas de forma dinámica.

## ✨ Características de la Aplicación

✅ **Página personal** con información del desarrollador  
✅ **Formulario interactivo** para agregar actividades favoritas  
✅ **Generación dinámica** de cards con imagen, título y descripción  
✅ **Funcionalidad de eliminación** de cards (click en la card)  
✅ **Diseño responsivo** con HTML y CSS puros

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo  
- **JavaScript** - Manipulación del DOM y lógica de la aplicación
- **Node.js + live-server** - Servidor de desarrollo

### DevOps
- **Docker** - Containerización de la aplicación
- **Kubernetes** - Orquestación de contenedores
- **Helm** - Gestión de charts de Kubernetes
- **Grafana** - Dashboards y visualización de métricas
- **Prometheus** - Recolección de métricas y monitoreo

## 📦 Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado:

- **Docker Desktop**
- **kubectl** (Kubernetes CLI)
- **minikube** (Kubernetes local)
- **Helm** (Package manager para Kubernetes)
- **Node.js y npm**
- **Git**

## 🔧 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/ErickNoguera/aboutme-devops.git
cd aboutme-devops
```

### 2. Ejecutar localmente (desarrollo)
```bash
# Instalar dependencias
npm install

# Ejecutar la aplicación
npm start
```
La aplicación estará disponible en `http://localhost:8080`

### 3. Ejecutar con Docker
```bash
# Construir la imagen
docker build -t aboutme-devops .

# Ejecutar el contenedor
docker run -p 8080:8080 aboutme-devops
```

### 4. Desplegar en Kubernetes
```bash
# Iniciar minikube
minikube start

# Aplicar manifiestos de Kubernetes
kubectl apply -f k8s/

# Ver el estado de los pods
kubectl get pods

# Acceder a la aplicación
kubectl port-forward service/aboutme-service 8080:80
```

### 5. Desplegar con Helm
```bash
# Instalar el chart
helm install aboutme-app ./helm-chart

# Ver el estado del release
helm status aboutme-app
```

## 📊 Monitoreo con Grafana

### Instalar stack de monitoreo
```bash
# Agregar repositorio de Prometheus
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

# Instalar Prometheus + Grafana
helm install monitoring prometheus-community/kube-prometheus-stack
```

### Acceder a Grafana
```bash
# Port-forward para acceder a Grafana
kubectl port-forward service/monitoring-grafana 3000:80

# Credenciales por defecto:
# Usuario: admin
# Password: prom-operator
```

## 📁 Estructura del Proyecto

```
aboutme-devops/
├── assets/                 # Imágenes y recursos estáticos
├── scripts/               # JavaScript de la aplicación
├── styles/                # Archivos CSS
├── k8s/                   # Manifiestos de Kubernetes
├── helm-chart/            # Chart de Helm
├── Dockerfile             # Configuración de Docker
├── .dockerignore          # Archivos ignorados por Docker
├── package.json           # Dependencias de Node.js
└── index.html             # Página principal
```

## 🎯 Objetivos de Aprendizaje

Este proyecto demuestra competencias en:

- **Containerización** de aplicaciones web
- **Orchestración** con Kubernetes
- **Infrastructure as Code** con Helm
- **Monitoring** y observabilidad
- **CI/CD** y GitOps workflows
- **Best practices** de DevOps

## 🔍 Características DevOps Implementadas

- ✅ **Multi-stage Docker builds** para optimización
- ✅ **Kubernetes deployments** con alta disponibilidad
- ✅ **Helm charts** parametrizables
- ✅ **Health checks** y readiness probes
- ✅ **Resource limits** y requests
- ✅ **Monitoring stack** completo
- ✅ **Grafana dashboards** personalizados

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si quieres mejorar la implementación DevOps o añadir nuevas funcionalidades:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto no cuenta con una licencia específica.

---

📌 *Proyecto creado por **Erick Noguera** como demostración de habilidades en DevOps, Kubernetes y tecnologías de containerización.* 🚀