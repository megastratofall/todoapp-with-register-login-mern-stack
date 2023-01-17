import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
//create proxy, si la ruta empieza con /api apunta a localhost 5500 <--server Backend.
server: {
proxy: {
'/api': {
target: 'http://localhost:5500',
},
},
},
});
