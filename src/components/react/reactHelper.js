import * as React from 'react'
import { createRoot } from 'react-dom/client'

export const renderReactComponent = (Component, container) => {
    const root = createRoot(container)
    root.render(<Component />)
}