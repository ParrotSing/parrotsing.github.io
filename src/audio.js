// Audio utility functions for ParrotSing website
export class AudioManager {
    constructor() {
        this.audioElements = new Map()
        this.currentlyPlaying = null
    }

    // Create and manage audio elements
    createAudio(src, options = {}) {
        const audio = new Audio()
        audio.src = src
        audio.preload = options.preload || 'metadata'
        
        // Add error handling
        audio.addEventListener('error', (e) => {
            console.warn(`Failed to load audio: ${src}`, e)
        })

        return audio
    }

    // Play audio with modern promise-based approach
    async playAudio(src, options = {}) {
        try {
            let audio = this.audioElements.get(src)
            
            if (!audio) {
                audio = this.createAudio(src, options)
                this.audioElements.set(src, audio)
            }

            // Stop currently playing audio if needed
            if (this.currentlyPlaying && !options.allowMultiple) {
                this.currentlyPlaying.pause()
                this.currentlyPlaying.currentTime = 0
            }

            await audio.play()
            this.currentlyPlaying = audio

            // Auto-cleanup when finished
            audio.addEventListener('ended', () => {
                if (this.currentlyPlaying === audio) {
                    this.currentlyPlaying = null
                }
            })

        } catch (error) {
            console.warn('Audio playback failed:', error)
        }
    }

    // Stop current audio
    stopAudio() {
        if (this.currentlyPlaying) {
            this.currentlyPlaying.pause()
            this.currentlyPlaying.currentTime = 0
            this.currentlyPlaying = null
        }
    }

    // Preload audio files for better performance
    preloadAudio(sources) {
        sources.forEach(src => {
            if (!this.audioElements.has(src)) {
                const audio = this.createAudio(src, { preload: 'auto' })
                this.audioElements.set(src, audio)
            }
        })
    }
}

// Initialize global audio manager
export const audioManager = new AudioManager()

// Legacy support - replace old embed/bgsound elements with modern audio
export function modernizeAudioElements() {
    // Replace old embed elements
    const embeds = document.querySelectorAll('embed[src$=".wav"], embed[src$=".mp3"]')
    embeds.forEach(embed => {
        const src = embed.getAttribute('src')
        const autostart = embed.getAttribute('autostart') === 'true'
        
        if (autostart) {
            audioManager.playAudio(src)
        }
        
        // Create a modern audio element as replacement
        const audio = document.createElement('audio')
        audio.src = src
        audio.controls = true
        audio.style.display = embed.style.display || 'block'
        
        embed.parentNode.replaceChild(audio, embed)
    })

    // Handle old bgsound elements (IE specific)
    const bgsounds = document.querySelectorAll('bgsound')
    bgsounds.forEach(bgsound => {
        const src = bgsound.getAttribute('src')
        if (src) {
            audioManager.playAudio(src)
            bgsound.remove()
        }
    })
}

// Auto-initialize when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', modernizeAudioElements)
}
