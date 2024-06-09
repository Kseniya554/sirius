import React, { createContext, useContext } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  // добавьте другие поля, которые могут быть в объекте пользователя
}

// Контекст может быть null, когда пользователь не аутентифицирован
export const CurrentUserContext = createContext<User | null>(null);

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};
