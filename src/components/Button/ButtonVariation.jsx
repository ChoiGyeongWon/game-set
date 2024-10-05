import Button from "./Button";

const ButtonControlState = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

const ButtonRefreshGame = ({ children, ...props }) => (
  <Button {...props} className="gameRefresh" title="새로고침">
    <span className="text-hidden">{children}</span>
  </Button>
);

const ButtonResetGame = ({ children, ...props }) => (
  <Button {...props} className="gameReset" title="다시시작">
    <span className="text-hidden">{children}</span>
  </Button>
);


export default {
  ControlState: ButtonControlState,
  RefreshGame: ButtonRefreshGame,
  ResetGame: ButtonResetGame,
};
