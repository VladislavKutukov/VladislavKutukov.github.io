
export interface NavigationLink {
    to: string;     // Путь ссылки
    caption: string; // Текст, который будет отображаться на ссылке
  }
  
  export interface NavigationLinksProps {
    isActive?:string;
    className?: string;          // Опциональный класс для стилизации
    links: NavigationLink[];     // Массив объектов ссылки
  }