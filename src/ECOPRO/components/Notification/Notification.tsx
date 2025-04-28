import type { NotificationProps } from "./Notification.type";
import { joinClassNames } from "../Utils";
import Toast from "./Toast";
import "./Notification.css";

function Notification({
  messages = [],
  onClose = () => {},
}: NotificationProps) {
  console.log(' messages.length ', messages.length );
  return messages.length > 0 ? (
    <aside className={joinClassNames(["notification__wrapper"])}>
      {messages.map(({ message, type, notificationId }) => (
        <Toast
          message={message}
          type={type}
          key={notificationId}
          messageId={notificationId}
          onClose={onClose}
        />
      ))}
    </aside>
  ) : null;
}

Notification.defaultProps = {
  messages: [],
  onClose: () => {},
};

export default Notification;
