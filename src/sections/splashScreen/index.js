import classNames from "classnames";

import "./style.scss";
import { useState } from "react";

const SplashScreen = ({ isLoading, finished }) => {
  const [isFinished, setIsFinished] = useState(false);

  const isLoaded = !isLoading;

  if (isFinished) {
    setTimeout(() => {
      finished();
    }, 1000);
  }

  return (
    <div className={classNames("splash fade", { hide: isFinished })}>
      <i className="icon-whatsapp" />
      <div className={classNames("progress", { loaded: isLoaded })}>
        <div onAnimationEnd={() => setIsFinished(true)} />
      </div>
      <span className="name">WhatsApp</span>
    </div>
  );
};

export default SplashScreen;
