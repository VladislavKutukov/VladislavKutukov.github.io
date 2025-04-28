// Types/UiKit.ts

export interface NotificationMessage {
    /** Текст сообщения уведомления */
    message: string;
  
    /** Тип уведомления: например, "success", "error", "info" и т.д. */
    type: "success" | "error" | "warning";
  
    /** Уникальный идентификатор для сообщения уведомления */
    notificationId: string;
  }
  
  export interface NotificationProps {
    /** Массив сообщений, которые должны отображаться в уведомлении */
    messages?: NotificationMessage[];
  
    /** Функция обратного вызова, вызываемая при закрытии уведомления */
    onClose?: () => void;
  }

  // Types/UiKit.ts

export interface ToastProps {
    /** Сообщение, отображаемое в тосте */
    message: string;
  
    /** Тип тоста, который определяет стиль и иконку (error, success, warning) */
    type: "success" | "error"  | "warning";
  
    /** Уникальный идентификатор для сообщения тоста */
    messageId: string;
  
    /** Функция обратного вызова, вызываемая при закрытии тоста */
    onClose?: (messageId: string) => void;
  }

  // Types/UiKit.ts

export interface PropsWithClassName {
    /** Дополнительный класс для стилизации компонента */
    className?: string;
  }