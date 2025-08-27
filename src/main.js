// Main JavaScript entry point for ParrotSing website
import './style.css'
import { audioManager, modernizeAudioElements } from './audio.js'

console.log('ParrotSing website loaded successfully!')

// Initialize any global functionality here
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...')
    
    // Modernize audio elements
    modernizeAudioElements()
    
    // Preload common audio files
    const commonAudioFiles = [
        '/TrackD211T29_BB.wav',
        '/TrackD211T26_HI.wav'
    ]
    audioManager.preloadAudio(commonAudioFiles)
    
    // Add modern enhancements to existing elements
    enhanceImageRollovers()
    addKeyboardNavigation()
    
    console.log('ParrotSing enhancements initialized')
})

// Enhance existing image rollovers with modern approach
function enhanceImageRollovers() {
    const images = document.querySelectorAll('img[onmouseover]')
    images.forEach(img => {
        // Extract image sources from inline handlers
        const mouseOverSrc = img.getAttribute('onmouseover')?.match(/src='([^']+)'/)?.[1]
        const mouseOutSrc = img.getAttribute('onmouseout')?.match(/src='([^']+)'/)?.[1]
        
        if (mouseOverSrc && mouseOutSrc) {
            // Preload hover images
            const hoverImg = new Image()
            hoverImg.src = mouseOverSrc
            
            // Add modern event listeners
            img.addEventListener('mouseenter', () => {
                img.src = mouseOverSrc
            })
            
            img.addEventListener('mouseleave', () => {
                img.src = mouseOutSrc
            })
        }
    })
}

// Add keyboard navigation support
function addKeyboardNavigation() {
    const links = document.querySelectorAll('a')
    links.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                link.click()
            }
        })
    })
}

// Export for potential module usage
export default {
    init: () => {
        console.log('ParrotSing app initialized')
    },
    audioManager
}
