import React from 'react';

export interface ErrorTheme {
  primary?: string;
  secondary?: string;
}

export const ErrorIcon: React.FC<ErrorTheme> = () => {
  return <div className="error-icon" />;
}; 