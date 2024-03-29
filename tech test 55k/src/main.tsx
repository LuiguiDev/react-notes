    import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
)
