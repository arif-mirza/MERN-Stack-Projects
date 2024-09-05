import React from "react";

function Topics({text}) {
  return (
    <>
      <a href="#" class="topic-btn">
        <div class="icon-box">
          <ion-icon name="server-outline"></ion-icon>
        </div>

        <p>{text}</p>
      </a>
    </>
  );
}

export default Topics;
