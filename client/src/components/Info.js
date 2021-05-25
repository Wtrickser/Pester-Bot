import React from 'react';

const Info = () => (
	<div className="card">
		<div className="card-image" style={{heigth: "150px"}}>
      <span className="card-title">Welcome to Pester-bot!</span>
    </div>
    <div className="card-content">
      <p>
        This is a simple chatbot powered by Cleverbot API. You can asking it anything and it will do it's best to hold a conversion.
        You can also tell the bot to change the message box color by type "set lightmode" or "set darkmode"
      </p>
    </div>
	</div>
);

export default Info;