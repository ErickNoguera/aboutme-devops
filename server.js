const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos (tu HTML, CSS, JS, imágenes)
app.use(express.static('.'));

// Ruta principal - servir tu index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// ENDPOINTS PARA DEMO - Solo en desarrollo
if (process.env.NODE_ENV !== 'production') {
    
    // Simular fallo del servidor
    app.get('/demo/fail', (req, res) => {
        console.log('🎭 DEMO: Simulando fallo para entrevista...');
        res.status(500).json({ 
            error: 'Simulated server failure for demo',
            timestamp: new Date().toISOString() 
        });
        
        // Matar el proceso después de 2 segundos
        setTimeout(() => {
            console.log('💥 Terminando proceso para demo...');
            process.exit(1);
        }, 2000);
    });

    // Simular alta carga de CPU
    app.get('/demo/stress', (req, res) => {
        console.log('🔥 DEMO: Iniciando stress test...');
        const start = Date.now();
        
        // Simular carga por 10 segundos
        while (Date.now() - start < 10000) {
            Math.random() * Math.random();
        }
        
        res.json({ 
            message: 'Stress test completado para demo',
            duration: '10 segundos'
        });
    });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`📱 Aplicación: http://localhost:${PORT}`);
    console.log(`❤️  Health check: http://localhost:${PORT}/health`);
    if (process.env.NODE_ENV !== 'production') {
        console.log(`💣 Demo endpoints disponibles:`);
        console.log(`   - http://localhost:${PORT}/demo/fail`);
        console.log(`   - http://localhost:${PORT}/demo/stress`);
    }
});