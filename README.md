# 🚀 Aboutme DevOps

**Aboutme DevOps** es un proyecto que implementa tecnologías modernas de **DevOps** sobre una aplicación web personal. Este proyecto demuestra la containerización, orquestación, monitoreo y **simulación de fallos** usando **Docker**, **Kubernetes**, **Helm**, **Prometheus** y **Grafana**.

## 🌟 Descripción

Este proyecto toma una aplicación web personal simple (HTML, CSS, JavaScript) y la transforma en una solución completa de DevOps, implementando las mejores prácticas de:

- **Containerización** con Docker
- **Orquestación** con Kubernetes  
- **Gestión de paquetes** con Helm
- **Monitoreo y visualización** con Grafana y Prometheus
- **Simulación de fallos** para demostraciones DevOps

La aplicación presenta una landing page personal con funcionalidad para agregar tarjetas de actividades favoritas de forma dinámica, ahora servida por un **servidor Express** con endpoints de monitoreo y demo.

## ✨ Características de la Aplicación

✅ **Página personal** con información del desarrollador  
✅ **Formulario interactivo** para agregar actividades favoritas  
✅ **Generación dinámica** de cards con imagen, título y descripción  
✅ **Funcionalidad de eliminación** de cards (click en la card)  
✅ **Diseño responsivo** con HTML y CSS puros  
✅ **Servidor Express** con endpoints de salud y demo  
✅ **Endpoints de simulación** para fallos y estrés  

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo  
- **JavaScript** - Manipulación del DOM y lógica de la aplicación

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para APIs y servidor estático

### DevOps
- **Docker** - Containerización de la aplicación
- **Kubernetes** - Orquestación de contenedores
- **Helm** - Gestión de charts de Kubernetes
- **Grafana** - Dashboards y visualización de métricas
- **Prometheus** - Recolección de métricas y monitoreo
- **Minikube** - Kubernetes local para desarrollo

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

# Ejecutar la aplicación con Express
npm start
```
La aplicación estará disponible en `http://localhost:8080`

**Endpoints disponibles:**
- `/` - Aplicación principal
- `/health` - Health check
- `/demo/fail` - Simular fallo del servidor (solo desarrollo)
- `/demo/stress` - Simular alta carga de CPU (solo desarrollo)

### 3. Ejecutar con Docker
```bash
# Construir la imagen
docker build -t aboutme-devops:v2 .

# Ejecutar el contenedor
docker run -p 8080:8080 aboutme-devops:v2
```

### 4. Desplegar en Kubernetes con minikube
```bash
# Iniciar minikube
minikube start

# Cargar imagen en minikube
minikube image load aboutme-devops:v2

# Desplegar con Helm
helm install aboutme-app ./aboutme-helm-chart

# Obtener URL de la aplicación
minikube service aboutme-app-aboutme-helm-chart --url
```

### 5. Instalar stack de monitoreo
```bash
# Agregar repositorio de Prometheus
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Instalar Prometheus + Grafana
helm install monitoring prometheus-community/kube-prometheus-stack

# Acceder a Grafana
kubectl port-forward service/monitoring-grafana 3000:80
```

**Credenciales de Grafana:**
- Usuario: `admin`
- Password: `prom-operator`

## 🎭 Demostración de Fallos

Para demostraciones DevOps, la aplicación incluye endpoints que simulan fallos:

### Simular fallo del servidor
```bash
curl http://[minikube-url]/demo/fail
```
- Devuelve error 500
- Termina el proceso después de 2 segundos
- Kubernetes reinicia automáticamente el pod

### Simular alta carga de CPU
```bash
curl http://[minikube-url]/demo/stress
```
- Ejecuta carga intensiva por 10 segundos
- Permite observar métricas de CPU en Grafana

### Verificar auto-recuperación
```bash
# Ver pods reiniciándose
kubectl get pods -w

# Ver logs de la aplicación
kubectl logs -f [pod-name]
```

## 📊 Monitoreo con Grafana

### Métricas disponibles:
- **CPU y memoria** de pods
- **Request rate** y latencia
- **Errores HTTP** (500, 404)
- **Estado de pods** (running, restarting)
- **Resource utilization**

### Dashboards recomendados:
- Kubernetes Cluster Monitoring
- Node Exporter Full
- Kubernetes Pod Monitoring

## 📁 Estructura del Proyecto

```
aboutme-devops/
├── assets/                 # Imágenes y recursos estáticos
├── scripts/               # JavaScript de la aplicación
├── styles/                # Archivos CSS
├── aboutme-helm-chart/    # Chart de Helm
│   ├── templates/         # Templates de Kubernetes
│   ├── values.yaml        # Configuración del chart
│   └── Chart.yaml         # Metadatos del chart
├── Dockerfile             # Configuración de Docker
├── server.js              # Servidor Express con endpoints
├── package.json           # Dependencias de Node.js
└── index.html             # Página principal
```

## 🎯 Casos de Uso DevOps

### Para Entrevistas Técnicas:
1. **Demostrar containerización** - `docker build` y `docker run`
2. **Mostrar orquestación** - Despliegue en Kubernetes
3. **Simular incidentes** - Endpoints `/demo/fail` y `/demo/stress`
4. **Observabilidad** - Métricas en tiempo real con Grafana
5. **Auto-recuperación** - Kubernetes reinicia pods automáticamente

### Para Aprendizaje:
- Migración de aplicación legacy a contenedores
- Implementación de health checks
- Configuración de monitoreo
- Simulación de fallos controlados
- Best practices de DevOps

## 🔍 Características DevOps Implementadas

- ✅ **Express server** con health checks
- ✅ **Kubernetes deployments** con auto-recuperación
- ✅ **Helm charts** parametrizables
- ✅ **Health y readiness probes**
- ✅ **Resource limits** y requests
- ✅ **Monitoring stack** completo con Prometheus
- ✅ **Grafana dashboards** para visualización
- ✅ **Failure simulation** para demos
- ✅ **Automated recovery** con Kubernetes

## 🎪 Demo para Entrevistas

### Flujo completo de demostración:
1. **Mostrar aplicación funcionando** en Kubernetes
2. **Abrir Grafana** con métricas normales
3. **Simular fallo** con `/demo/fail`
4. **Observar en Grafana** el incremento de errores
5. **Mostrar auto-recuperación** de Kubernetes
6. **Explicar observabilidad** y monitoreo

### Scripts útiles:
```bash
# Ver estado general
kubectl get all

# Monitorear pods en tiempo real
kubectl get pods -w

# Seguir logs en tiempo real
kubectl logs -f deployment/aboutme-app-aboutme-helm-chart
```

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

📌 *Proyecto creado por **Erick Noguera** como demostración de habilidades en DevOps, Kubernetes, monitoreo y simulación de fallos para entrevistas técnicas.* 🚀