import React from 'react'

const Notification=({ showNotification }) => {
    return (
        <div class = { `notification-container ${showNotification ? 'show' : '' }` }>
            <p>You Have already entered this letter</p>
            
        </div>
    )
}

export default Notification
