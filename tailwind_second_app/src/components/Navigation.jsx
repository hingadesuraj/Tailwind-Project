import React from 'react'
import Button from './miniComponent/Button'

const Navigation = () => {
  return (
    <div>
        {/* left */}
        <div>
            <img src="" alt="Logo" />
            <h1>Landwind</h1>
        </div>
        {/* middle */}
        <div>
          <div>
            <li>Home</li>
            <li>Company</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Team</li>
            <li>Contace</li>
          </div>
        </div>
        {/* right */}
        <div>
            <div>
                start|648
            </div>
            <div>
                <Button title="Download" />
            </div>
        </div>
    </div>
  )
}

export default Navigation