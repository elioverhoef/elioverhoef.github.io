import React from 'react';
import './ChatInterface.css';

function ChatInterface() {
  return (
    <div className="chat-container">
      <iframe
        src="https://copilotstudio.microsoft.com/environments/Default-6c98972a-5745-461e-b498-b115596b19a7/bots/cra67_ticketSwapEventScout/webchat?__version__=2"
        frameBorder="0"
        title="Chat Interface"
        className="chat-frame"
      />
    </div>
  );
}

export default ChatInterface; 