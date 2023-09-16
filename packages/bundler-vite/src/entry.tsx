// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - need to do this because this file doesn't actually exist
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from 'payload/components'

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<Root />)

console.log('test')

// Needed for Hot Module Replacement
if (typeof module.hot !== 'undefined') {
  module.hot.accept()
}