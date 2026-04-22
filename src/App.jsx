import { useState } from 'react'
import './App.css'

const randomQuotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
]

function App() {
  const [quote, setQuote] = useState(randomQuotes[0])
  const [color, setColor] = useState('#6C63FF')

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length)
    setQuote(randomQuotes[randomIndex])
    getRandomColor()
  }

  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#6C63FF', '#F7DC6F', '#BB8FCE']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(randomColor)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>✨ Random Quote Generator</h1>
      </div>
      
      <div className="quote-box" style={{ borderColor: color }}>
        <p className="quote-text">{quote}</p>
      </div>

      <div className="button-group">
        <button 
          className="btn btn-primary" 
          onClick={getRandomQuote}
          style={{ backgroundColor: color }}
        >
          Get New Quote
        </button>
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>🎲 Random quotes from famous people</li>
          <li>🎨 Dynamic color changes</li>
          <li>⚡ Built with React & Vite</li>
          <li>💅 Clean and modern UI</li>
        </ul>
      </div>
    </div>
  )
}

export default App
